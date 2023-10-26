<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\GoalConversionExport;

use Piwik\Piwik;
use Piwik\Plugins\GoalConversionExport\Dao\GoalConversionModel;
use Piwik\Tracker;

/**
 * API for plugin GoalConversionExport
 *
 * @method static \Piwik\Plugins\GoalConversionExport\API getInstance()
 */
class API extends \Piwik\Plugin\API
{

    /**
     * @var GoalConversionModel
     */
    protected $model;

    public function __construct(GoalConversionModel $model)
    {
        $this->model = $model;
    }

    public function addGoalConversion($idSite, $name, $exportType, $goals, $dayToExport, $parameters = null, $description = '')
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $response = $this->model->add($idSite, $name, $exportType, $description, uniqid(), $goals, $dayToExport, $parameters);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);

        return $response;
    }

    public function updateGoalConversion($idExport, $idSite, $name, $exportType, $goals, $dayToExport, $parameters = null, $description = '')
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $response = $this->model->update($idExport, $idSite, $name, $exportType, $description, $goals, $dayToExport, $parameters);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);

        return $response;
    }

    public function getGoalConversions($idSite)
    {
        Piwik::checkUserHasWriteAccess($idSite);

        return $this->model->getBySiteId($idSite);
    }

    public function getGoalConversion($idExport, $idSite)
    {
        Piwik::checkUserHasWriteAccess($idSite);

        return $this->model->getById($idExport);
    }

    public function deleteGoalConversion($idExport, $idSite)
    {
        Piwik::checkUserHasWriteAccess($idSite);

        $this->model->delete($idExport);
        Tracker\Cache::deleteCacheWebsiteAttributes($idSite);
    }

}
