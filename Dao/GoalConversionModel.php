<?php

namespace Piwik\Plugins\GoalConversionExport\Dao;

use Piwik\Common;
use Piwik\Date;
use Piwik\Db;
use Piwik\DbHelper;

class GoalConversionModel
{
    private $tableName = 'goal_conversion_export';
    private $tablePrefix;

    public function __construct()
    {
        $this->tablePrefix = Common::prefixTable($this->tableName);
    }

    public function install(): void
    {
        $table = "`id_export` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
                  `id_site` INT(11) NOT NULL,
                  `access_token` VARCHAR(100) NOT NULL,
                  `name` VARCHAR(50) NOT NULL,
                  `export_type` VARCHAR(15) NOT NULL,
                  `description` VARCHAR(1000) NOT NULL,
                  `goals` JSON NOT NULL,
                  `day_to_export` INT(11) NOT NULL default 7,
                  `ts_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                  `ts_modified` TIMESTAMP NOT NULL DEFAULT 0,
                  `ts_requested` TIMESTAMP NULL DEFAULT NULL,
                  `deleted` TINYINT(1) NOT NULL DEFAULT '0',
                  `parameters` JSON NULL DEFAULT NULL,
                  PRIMARY KEY (`id_export`),
                  UNIQUE INDEX `access_token` (`access_token`)";

        DbHelper::createTable($this->tableName, $table);
    }

    public function uninstall(): void
    {
        Db::query(sprintf('DROP TABLE IF EXISTS `%s`', $this->tablePrefix));
    }

    public function add(int $idSite, string $name, string $exportType, string $description, string $accessToken, array $goals, int $dayToExport, ?array $parameters = null): int
    {
        $db = $this->getDatabase();
        $db->insert($this->tablePrefix, [
            'id_site' => $idSite,
            'name' => $name,
            'export_type' => $exportType,
            'description' => $description,
            'access_token' => $accessToken,
            'day_to_export' => $dayToExport,
            'goals' => json_encode($goals),
            'ts_modified' => Date::now()->getDatetime(),
            'parameters' => json_encode($parameters),
        ]);

        return $db->lastInsertId();
    }

    protected function getDatabase()
    {
        return Db::get();
    }

    public function getBySiteId(int $idSite): array
    {
        $query = sprintf(
            'SELECT * FROM %s  WHERE `id_site`=%s AND `deleted` = 0',
            $this->tablePrefix,
            ((int)$idSite)
        );

        return $this->getDatabase()->fetchAll($query);
    }

    public function getAll(): array
    {
        $query = sprintf(
            'SELECT * FROM %s  WHERE `deleted` = 0',
            $this->tablePrefix
        );

        return $this->getDatabase()->fetchAll($query);
    }

    public function getById(int $idExport)
    {
        $query = sprintf(
            'SELECT * FROM %s  WHERE `id_export`=%s',
            $this->tablePrefix,
            ((int)$idExport)
        );

        return $this->getDatabase()->fetchRow($query);
    }

    public function getByAccessToken(string $accessToken)
    {
        $query = sprintf(
            'SELECT * FROM %s  WHERE `access_token`=?',
            $this->tablePrefix
        );

        return $this->getDatabase()->fetchRow($query, [$accessToken]);
    }

    public function delete(int $idExport)
    {
        $db = $this->getDatabase();
        $db->update($this->tablePrefix, [
            'deleted' => '1',
        ], 'id_export = ' . (int)$idExport);
    }

    public function update(int $idExport, int $idSite, string $name, string $exportType, string $description, array $goals, int $dayToExport, ?array $parameters = null): void
    {
        $db = $this->getDatabase();
        $db->update($this->tablePrefix, [
            'name' => $name,
            'export_type' => $exportType,
            'description' => $description,
            'day_to_export' => $dayToExport,
            'goals' => json_encode($goals),
            'ts_modified' => Date::now()->getDatetime(),
            'parameters' => json_encode($parameters),
        ], 'id_export = ' . (int)$idExport . ' AND id_site = ' . (int)$idSite);
    }

    public function updateRequestTime(int $idExport)
    {
        $db = $this->getDatabase();
        $db->update($this->tablePrefix, [
            'ts_requested' => Date::now()->getDatetime(),
        ], 'id_export = ' . (int)$idExport);
    }
}
