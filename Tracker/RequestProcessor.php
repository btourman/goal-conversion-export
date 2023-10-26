<?php
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret or copyright law.
 * Redistribution of this information or reproduction of this material is strictly forbidden
 * unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from InnoCraft Ltd.
 *
 * @link    https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\GoalConversionExport\Tracker;

use Piwik\Common;
use Piwik\Plugins\GoalConversionExport\Dao\LogClickIdModel;
use Piwik\Tracker;
use Piwik\Tracker\Request;
use Piwik\Tracker\Visit\VisitProperties;

class RequestProcessor extends Tracker\RequestProcessor
{
    private $logClickIdModel;

    private $clickIdAndProvider = null;

    private $PROVIDERS = array(
        "google" => "gclid",
        "facebook" => "fbclid",
    );

    public function __construct(LogClickIdModel $logClickIdModel)
    {
        $this->logClickIdModel = $logClickIdModel;
    }

    public function manipulateRequest(Request $request)
    {
        $this->clickIdAndProvider = $this->getClickIdAndProviderFromRequest($request);
    }

    /**
     * @param Request $request
     * @return bool|array
     */
    protected function getClickIdAndProviderFromRequest(Request $request)
    {
        $rawParams = $request->getRawParams();

        parse_str(parse_url($rawParams['url'] ?? '', PHP_URL_QUERY) ?? '', $params);

        foreach ($this->PROVIDERS as $provider_key => $provider_click_id) {
            $requestClickId = Common::getRequestVar($provider_click_id, '', null, $params);
            if (!empty($requestClickId)) {
                return [
                    'click_id' => $requestClickId,
                    'provider' => $provider_key,
                ];
            }
        }

        return false;
    }

    public function recordLogs(VisitProperties $visitProperties, Request $request)
    {
        if ($request->getMetadata('CoreHome', 'isNewVisit') && !empty($this->clickIdAndProvider)) {

            $id_visit = $visitProperties->getProperty('idvisit');
            $id_visitor = $visitProperties->getProperty('idvisitor');
            $click_id = $this->clickIdAndProvider['click_id'];
            $provider = $this->clickIdAndProvider['provider'];
            $server_time = date('Y-m-d H:i:s', $request->getCurrentTimestamp());

            $this->logClickIdModel->add($click_id, $id_visit, $id_visitor, $provider, $server_time);
        }
    }

    public function afterRequestProcessed(VisitProperties $visitProperties, Request $request)
    {
        if (empty($this->clickIdAndProvider)) {
            return; // abort if there is no click_id in the request
        }

        $idVisit = $visitProperties->getProperty('idvisit');

        // force new visit if click id parameter changed
        $existingVisit = !empty($idVisit) ? $this->logClickIdModel->findIdVisits([$idVisit]) : '';

        $visitorClickId = !empty($existingVisit[0]['click_id']) ? $existingVisit[0]['click_id'] : '';
        $visitorClickIdProvider = !empty($existingVisit[0]['provider']) ? $existingVisit[0]['provider'] : '';

        if ((!empty($this->clickIdAndProvider['click_id']) && $visitorClickId != $this->clickIdAndProvider['click_id']) ||
            (!empty($this->clickIdAndProvider['provider']) && $visitorClickIdProvider != $this->clickIdAndProvider['provider'])) {
            $request->setMetadata('CoreHome', 'isNewVisit', true);
        }
    }
}
