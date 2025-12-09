<?php

namespace backend\core\entities;

class BuildingEntity
{
    public ?int $id;

    public function __construct(
        ?int $id
    ) {
        $this->id = $id;
    }
}