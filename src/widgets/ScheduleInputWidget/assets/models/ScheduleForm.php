<?php

namespace common\models;

use yii\base\Model;

class ScheduleForm extends Model
{
    public $schedule;

    public function rules()
    {
        return [
            ['schedule', 'safe'],
        ];
    }
}
