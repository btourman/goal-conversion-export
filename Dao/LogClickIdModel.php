<?php

namespace Piwik\Plugins\GoalConversionExport\Dao;

use Piwik\Common;
use Piwik\Db;
use Piwik\DbHelper;
use Piwik\Tracker;

class LogClickIdModel
{
    private $tableName = 'goal_conversion_log_click_id';
    private $tablePrefix;

    public function __construct()
    {
        $this->tablePrefix = Common::prefixTable($this->tableName);
    }

    public function install(): void
    {
        $table = "`click_id` VARCHAR(255) NULL DEFAULT NULL,
                `id_visit` BIGINT(10) UNSIGNED NOT NULL,
                `id_visitor` BINARY(8) NOT NULL,
                `provider` VARCHAR(50) NULL DEFAULT NULL,
                `server_time` DATETIME NOT NULL,
                PRIMARY KEY (`id_visit`),
                INDEX `id_visitor` (`id_visitor`)";

        DbHelper::createTable($this->tableName, $table);
    }

    public function uninstall(): void
    {
        Db::query(sprintf('DROP TABLE IF EXISTS `%s`', $this->tablePrefix));
    }

    public function add(string $click_id, int $id_visit, string $id_visitor, string $provider, string $server_time): int
    {
        $db = $this->getDatabase();
        $sql = "INSERT INTO $this->tablePrefix (click_id,id_visit,id_visitor,provider,server_time) VALUES (?,?,?,?,?)";
        $db->query($sql, array($click_id, $id_visit, $id_visitor, $provider, $server_time));

        return $db->lastInsertId();
    }

    protected function getDatabase()
    {
        return Tracker::getDatabase();;
    }

    public function findIdVisits($idVisits)
    {
        if (empty($idVisits)) {
            return [];
        }

        $idVisits = array_map('intval', $idVisits);

        $query = sprintf('SELECT * 
                                 FROM %s 
                                 WHERE id_visit IN (%s)', $this->tablePrefix, implode(', ', $idVisits));
        return $this->getDatabase()->fetchAll($query);
    }
}
