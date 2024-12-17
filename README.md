composer require your-namespace/schedule-input-widget:dev-main

use yii\widgets\ActiveForm;
use YourNamespace\ScheduleInputWidget\models\ScheduleForm;
use YourNamespace\ScheduleInputWidget\ScheduleInputWidget;

$model = new ScheduleForm();

$form = ActiveForm::begin();
echo $form->field($model, 'schedule')->widget(ScheduleInputWidget::class, [
    'attribute' => 'schedule',
    'model' => $model,
    'name' => 'schedule',
    'enableTimeZone' => true,
    'enableSpecialTime' => true,
    'enableProductionCalendar' => false,
    'allowMultipleItems' => true,
]);

ActiveForm::end();

vendor/
└── your-namespace/
    └── schedule-input-widget/
        └── src/
            └── widgets/
                └── ScheduleInputWidget/
                    ├── ScheduleInputWidget.php
                    ├── assets/
                    │   └── ScheduleInputAsset.php
                    ├── views/
                    │   └── schedule-input-widget.php
                    └── models/
                        └── ScheduleForm.php
