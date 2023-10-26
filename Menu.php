<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\GoalConversionExport;

use Piwik\Common;
use Piwik\Menu\MenuAdmin;
use Piwik\Piwik;

/**
 * This class allows you to add, remove or rename menu items.
 * To configure a menu (such as Admin Menu, Top Menu, User Menu...) simply call the corresponding methods as
 * described in the API-Reference http://developer.piwik.org/api-reference/Piwik/Menu/MenuAbstract
 */
class Menu extends \Piwik\Plugin\Menu
{

    public function configureAdminMenu(MenuAdmin $menu)
    {
        $idSite = Common::getRequestVar('idSite', 0, 'int');

        if (!empty($idSite) && Piwik::isUserHasWriteAccess($idSite)) {
            $menu->addMeasurableItem(
                "Goal Conversion Export",
                $this->urlForAction('index'),
                30
            );
        }
        // $menu->addPlatformItem('GoalConversionExport_MyUserItem', $this->urlForDefaultAction(), $orderId = 30);

        // or create a custom category
        // $menu->addItem('CoreAdminHome_MenuManage', 'GoalConversionExport_MyUserItem', $this->urlForDefaultAction(), $orderId = 30);
    }
}
