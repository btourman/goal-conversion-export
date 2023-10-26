<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\GoalConversionExport;

use Piwik\Common;
use Piwik\Plugins\GoalConversionExport\Dao\GoalConversionModel;
use Piwik\Plugins\GoalConversionExport\Dao\LogClickIdModel;

class GoalConversionExport extends \Piwik\Plugin
{
    public function registerEvents()
    {
        return [
            'CronArchive.getArchivingAPIMethodForPlugin' => 'getArchivingAPIMethodForPlugin',
            'Db.getTablesInstalled' => 'getTablesInstalled',
        ];
    }

    public function getTablesInstalled(&$allTablesInstalled)
    {
        $allTablesInstalled[] = Common::prefixTable('goal_conversion_export');
        $allTablesInstalled[] = Common::prefixTable('goal_conversion_log_click_id');
    }

    public function install()
    {
        $goalConversionModel = new GoalConversionModel();
        $goalConversionModel->install();
        $logClickIdModel = new LogClickIdModel();
        $logClickIdModel->install();
    }

    public function uninstall()
    {
        $goalConversionModel = new GoalConversionModel();
        $goalConversionModel->uninstall();
        $logClickIdModel = new LogClickIdModel();
        $logClickIdModel->uninstall();
    }

    public function isTrackerPlugin()
    {
        return true;
    }

}
