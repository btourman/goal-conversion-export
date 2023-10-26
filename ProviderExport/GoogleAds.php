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

class GoogleAds extends AbstractProviderExport
{

    protected function getConversionDataAsObject($logClikId)
    {
        // TODO: Implement getConversionDataAsObject() method.
    }

    protected function getFileHeader()
    {
        $timezone = $this->site['timezone'];
        $timezone = $this->convertTimezone($timezone);
        return <<<HEAD
### INSTRUCTIONS ###,,,,
# IMPORTANT: Remember to set the TimeZone value in the "parameters" row and/or in your Conversion Time column,,,,
# For instructions on how to set your timezones visit http://goo.gl/T1C5Ov,,,,
,,,,
### TEMPLATE ###,,,,
Parameters:TimeZone={$timezone},,,,
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency

HEAD;
    }

    protected function getConversionDataAsCSV($conversion)
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
        $conversionTime = Date::factory($conversion['server_time'])->toString('Y-m-d H:i:s');

        return <<<CONVERSION
{$clickId},{$conversionName},{$conversionTime},{$conversionValue},{$conversionCurrency}

CONVERSION;

    }
}
