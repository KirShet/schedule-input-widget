<?php

namespace YourVendor\YourWidgetPackage\widgets\ScheduleInputWidget\models;

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
