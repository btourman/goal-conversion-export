<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\GoalConversionExport;


use Piwik\Access;
use Piwik\Common;
use Piwik\Plugins\GoalConversionExport\Dao\GoalConversionModel;
use Piwik\Plugins\GoalConversionExport\ProviderExport\Cache;
use Piwik\Plugins\GoalConversionExport\ProviderExport\FacebookAds;
use Piwik\Plugins\GoalConversionExport\ProviderExport\GoogleAds;

/**
 * A controller lets you for example create a page that can be added to a menu. For more information read our guide
 * http://developer.piwik.org/guides/mvc-in-piwik or have a look at the our API references for controller and view:
 * http://developer.piwik.org/api-reference/Piwik/Plugin/Controller and
 * http://developer.piwik.org/api-reference/Piwik/View
 */
class Controller extends \Piwik\Plugin\Controller
{
    public function createOrEdit($idExport = null)
    {
        $params = array();
        if ($idExport) {
            $params = array('idExport' => $idExport);
        }
        // Render the Twig template templates/createOrEdit.twig and assign the view variable answerToLife to the view.
        return $this->renderTemplate('createOrEdit', $params);
    }

    public function index()
    {
        // Render the Twig template templates/createOrEdit.twig and assign the view variable answerToLife to the view.
        return $this->renderTemplate('index');
    }

    public function generateConversionExport()
    {
        $model = new GoalConversionModel();

        $accessToken = Common::getRequestVar('accessToken', null, 'string');

        // Here is no permission check on purpose to avoid the requirement of using a token_auth
        $export = $model->getByAccessToken($accessToken);

        if (empty($export)) {
            throw new \Exception('Requested conversion export could not be found');
        }

        if ($export['export_type'] == 'google') {
            $exportAdapter = new GoogleAds();
        }
        if ($export['export_type'] == 'facebook') {
            $exportAdapter = new FacebookAds();
        }

        if (empty($exportAdapter)) {
            throw new \Exception('Invalid export type configured');
        }

        Access::doAsSuperUser(function () use ($export, $exportAdapter) {
            $cache = new Cache($export['id_export']);
            $export['goals'] = json_decode($export['goals'], true);

            if (!$cache->contains()) {
                $content = $exportAdapter->generateCSV($export);
                $cache->save($content);
            }

            $exportAdapter->sendHttpHeaders();
            echo $cache->fetch();
            exit;
        });
    }

}
