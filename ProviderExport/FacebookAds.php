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

namespace Piwik\Plugins\GoalConversionExport\ProviderExport;

use Piwik\Date;

class FacebookAds extends AbstractProviderExport
{
    protected function getFileHeader()
    {
        return <<<HEAD
fbc,event_name,event_time,value,currency

HEAD;
    }

    protected function getConversionDataAsCSV($conversion)
    {
        $conversionData = $this->getConversionDataAsObject($conversion);

        if (empty($conversionData)) {
            return;
        }

        $conversionTime = $conversionData['conversionTime']->getTimestamp();

        return <<<CONVERSION
{$conversionData['clickId']},{$conversionData['conversionName']},{$conversionTime},{$conversionData['conversionValue']},{$conversionData['conversionCurrency']}

CONVERSION;

    }

    protected function getConversionDataAsObject($conversion)
    {
        $clickId = $conversion['click_id'];

        foreach ($this->goalConversionExport['goals'] as $g) {
            if ($g['id_goal'] == $conversion['idgoal']) {
                $goal = $g;
                break;
            }
        }

        $conversionName = $goal['export_name'];
        $conversionValue = $this->getConversionValue($conversion['revenue'], $goal['revenu']);
        $conversionCurrency = $this->site['currency'];

        return array(
            "clickId" => $clickId,
            "conversionName" => $conversionName,
            "conversionValue" => $conversionValue,
            "conversionCurrency" => $conversionCurrency,
            "conversionTime" => Date::factory($conversion['server_time']),
            "idVisit" => $conversion['idvisit']
        );
    }
}
