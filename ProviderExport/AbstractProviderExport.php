<?php

namespace Piwik\Plugins\GoalConversionExport\ProviderExport;

use Piwik\Common;
use Piwik\Date;
use Piwik\Db;
use Piwik\ProxyHttp;

abstract class AbstractProviderExport
{
    protected $site;
    protected $goalConversionExport;
    protected $logConversion;

    public function generateCSV($goalConversion): string
    {
        $this->prepareGeneration($goalConversion);
        $content = $this->getFileHeader();

        foreach ($this->logConversion as $conv) {
            $content .= $this->getConversionDataAsCSV($conv);
        }

        return $content;
    }

    public function prepareGeneration($goalConversion): void
    {
        $this->goalConversionExport = $goalConversion;
        $this->getSite($goalConversion['id_site']);

        $this->getLogConversion();
    }

    private function getSite($idSite)
    {
        $query = sprintf(
            'SELECT * FROM %s  WHERE `idsite`=%s',
            $this->getTableName('site'),
            $idSite
        );
        $this->site = Db::fetchRow($query);
    }

    private function getTableName($tableName)
    {
        return Common::prefixTable($tableName);
    }

    private function getLogConversion()
    {
        $goalIds = [];

        foreach ($this->goalConversionExport['goals'] as $goal) {
            array_push($goalIds, $goal['id_goal']);
        }

        $toDate = Date::factoryInTimezone('today', $this->site['timezone']);
        $fromDate = $toDate->subDay($this->goalConversionExport['day_to_export']);

        $queryConversion = sprintf(
            'select * from %s mlg right join %s mgclci on mlg.idvisit=mgclci.id_visit where idsite = ? and provider=? and mgclci.server_time >= ? and mgclci.server_time < ? and idgoal IN (' . Common::getSqlStringFieldsArray($goalIds) . ') ORDER BY mgclci.server_time DESC;',
            $this->getTableName('log_conversion'),
            $this->getTableName('goal_conversion_log_click_id')
        );

        $paramsConversion = [
            $this->goalConversionExport['id_site'],
            $this->goalConversionExport['export_type'],
            $fromDate->toString('Y-m-d H:i:s'),
            $toDate->toString('Y-m-d H:i:s')
        ];
        $paramsConversion = array_merge($paramsConversion, $goalIds);

        $this->logConversion = Db::fetchAll($queryConversion, $paramsConversion);

    }

    abstract protected function getFileHeader();

    abstract protected function getConversionDataAsCSV($conversion);

    public function generateObjects($goalConversion): array
    {
        $this->prepareGeneration($goalConversion);

        $data = array();

        foreach ($this->logConversion as $conv) {
            $conversion = $this->getConversionDataAsObject($conv);
            if (!empty($conversion)) {
                $data[] = $conversion;
            }
        }

        return $data;
    }

    abstract protected function getConversionDataAsObject($logClikId);

    public function sendHttpHeaders()
    {
        Common::sendHeader("Content-Disposition: attachment; filename=conversion-export.csv");
        Common::sendHeader('Content-Type: application/vnd.ms-excel', true);
        ProxyHttp::overrideCacheControlHeaders('no-cache');
    }

    protected function convertTimezone($matomoTimezone)
    {
        if (substr($matomoTimezone, 0, 4) === 'UTC+') {
            $offset = substr($matomoTimezone, 4);
            return sprintf('+%04d', $offset * 100);
        }
        if (substr($matomoTimezone, 0, 4) === 'UTC-') {
            $offset = substr($matomoTimezone, 4);
            return sprintf('-%04d', $offset * 100);
        }

        return $matomoTimezone;
    }

    protected function getConversionValue($goalConversionValue, $revenueType)
    {
        switch ($revenueType) {
            case 'null':
                return '';
            case 'goal':
            default:
                return $goalConversionValue;
        }
    }
}
