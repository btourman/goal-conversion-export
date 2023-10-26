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

class Cache
{
    private $exportId;

    private $cache;

    public function __construct($exportId)
    {
        $this->exportId = $exportId;
        $this->cache = \Piwik\Cache::getLazyCache();
    }

    public function fetch()
    {
        return $this->cache->fetch($this->getCacheName());
    }

    private function getCacheName()
    {
        return 'GoalConversionExport.' . $this->exportId;
    }

    public function save($content)
    {
        $ttl = Date::today()->getEndOfDay()->getTimestamp() - Date::now()->getTimestamp(); // cache is valid til end of day
        $this->cache->save($this->getCacheName(), $content, $ttl);
    }

    public function contains()
    {
        return $this->cache->contains($this->getCacheName());
    }

    public function delete()
    {
        return $this->cache->delete($this->getCacheName());
    }
}
