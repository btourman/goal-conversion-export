<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\GoalConversionExport;

use DateTime;
use Piwik\Access;
use Piwik\Container\StaticContainer;
use Piwik\Http;
use Piwik\Plugins\GoalConversionExport\Dao\GoalConversionModel;
use Piwik\Plugins\GoalConversionExport\ProviderExport\FacebookAds;

class Tasks extends \Piwik\Plugin\Tasks
{
    public function schedule()
    {
        $this->daily('sendToMetaAPI');   // method will be executed once every day
    }

    public function sendToMetaAPI()
    {
        $model = new GoalConversionModel();
        $exports = $model->getAll();

        StaticContainer::get('Psr\Log\LoggerInterface')->info('Export Conversion Goal length : ' . count($exports));

        foreach ($exports as $export) {
            $today = new DateTime('today midnight');
            if (empty($export['ts_requested'])) {
                $last_requested = new DateTime('0000-00-00 00:00:00');
            } else {
                $last_requested = (new DateTime($export['ts_requested']))->setTime(0, 0);
            }

            $interval = $last_requested->diff($today);

            if ($export['export_type'] == 'facebook' && $interval->days >= $export['day_to_export']) {
                $exportAdapter = new FacebookAds();

                Access::doAsSuperUser(function () use ($export, $exportAdapter, $model) {
                    $export['goals'] = json_decode($export['goals'], true);
                    $export['parameters'] = json_decode($export['parameters'], true);

                    $conversionData = $exportAdapter->generateObjects($export);

                    StaticContainer::get('Psr\Log\LoggerInterface')->info('Conversion numbers : ' . count($conversionData));
                    $parameters = array("data" => array());

                    $index = 1;
                    foreach ($conversionData as $conversion) {
                        StaticContainer::get('Psr\Log\LoggerInterface')->info('Conversion data index : ' . $index . '; idVisit : ' . $conversion['idVisit']);
                        $conversionTime = $conversion['conversionTime']->getTimestampUTC();

                        $conversionToJson = array(
                            "event_name" => $conversion['conversionName'],
                            "event_time" => $conversionTime,
                            "action_source" => "website",
                            "user_data" => array(
                                "fbc" => "fb.1." . $conversionTime . "." . $conversion['clickId']
                            ),
                            "custom_data" => array(
                                "value" => $conversion['conversionValue'],
                                "currency" => $conversion['conversionCurrency']
                            )
                        );
                        $parameters['data'][] = $conversionToJson;
                        $index = $index + 1;
                    }

                    if (!empty($parameters['data'])) {

                        StaticContainer::get('Psr\Log\LoggerInterface')->info('Number of conversions send to meta : ' . count($parameters['data']));

                        try {
                            $result = Http::sendHttpRequestBy(
                                Http::getTransportMethod(),
                                "https://graph.facebook.com/v17.0/" . $export['parameters']['pixel_id'] . "/events?access_token=" . $export['parameters']['meta_access_token'],
                                10000,
                                $userAgent = null,
                                $destinationPath = null,
                                $file = null,
                                $followDepth = 0,
                                $acceptLanguage = false,
                                $acceptInvalidSslCertificate = true,
                                $byteRange = false,
                                $getExtendedInfo = false,
                                $httpMethod = 'POST',
                                $httpUserName = null,
                                $httpPassword = null,
                                $requestBody = $parameters,
                                $additionalHeaders = [
                                    'Content-Type' => 'application/x-www-form-urlencoded',
                                    'Content-Length' => strlen(implode(',', $parameters['data'])),
                                ]
                            );
                        } catch (Exception $e) {
                            StaticContainer::get('Psr\Log\LoggerInterface')->error('Error on Meta GraphQL API : ' . $e->getMessage());
                        }

                        $result = json_decode($result, true);

                        if (!$result || array_key_exists('error', $result)) {
                            StaticContainer::get('Psr\Log\LoggerInterface')->error('Meta GraphQL API returned the following error message : ' . $result['error']['message'] . '\n Code :' . $result['error']['code'] . '\n Subcode :' . $result['error']['error_subcode']);
                            StaticContainer::get('Psr\Log\LoggerInterface')->error('Error on Meta GraphQL API with this parameters : ' . print_r($parameters['data'], true));
                        } else {
                            StaticContainer::get('Psr\Log\LoggerInterface')->info('Export ' . $export['id_export'] . ' correctly sent to Meta GraphQL API');
                            $model->updateRequestTime($export['id_export']);
                        }

                        exit;
                    } else {
                        StaticContainer::get('Psr\Log\LoggerInterface')->info('Export ' . $export['id_export'] . ' : no data to send to Meta GraphQL API');
                    }
                });
            }
        }
    }
}
