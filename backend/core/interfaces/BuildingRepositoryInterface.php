<?php

namespace backend\core\interfaces;

use backend\core\entities\BuildingEntity;

interface UserRepositoryInterface
{
    public function create(BuildingEntity $user): BuildingEntity;
    public function update(BuildingEntity $user): BuildingEntity;
    public function findById(int $id): ?BuildingEntity;
}