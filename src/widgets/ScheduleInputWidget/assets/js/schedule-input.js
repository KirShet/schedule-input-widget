$(document).ready(function () {
    const modalOverlay = $('#modal-overlay');
    const modalMessage = $('.modal-overlay-message');
    const selectedDateSpan = $('#selected-date');
    const workTimeContainer = $('#work-time-container');

    let firstDate = null; // Переменная для хранения первой выбранной даты
    let secondDate = null; // Переменная для второй даты

    let workItemToDelete = null;

    // Открытие модального окна
    $('.add-special-day-button').on('click', function () {
        modalOverlay.addClass('show');
    });

    // Закрытие модального окна
    $('.cancel-btn').on('click', function () {
        modalOverlay.removeClass('show');
        modalMessage.removeClass('show');
    });

    // брос выборов
    function resetDates() {
        firstDate = null;
        secondDate = null;
        $('.days .green-selected').removeClass('green-selected');
    }

    // Выбор дня в календаре
    $('.days div').on('click', function () {
        const month = $(this).closest('.month').find('h3').text();
        const dayNumber = $(this).text();
    
        if (!firstDate) {
            firstDate = `${dayNumber} ${month}`;
            $(this).addClass('green-selected');
            selectedDateSpan.text(`${firstDate}`);
        } else if (!secondDate) {
            secondDate = `${dayNumber} ${month}`;
            $(this).addClass('green-selected');
            const startDate = new Date(`${firstDate} 2024`);
            const endDate = new Date(`${secondDate} 2024`);
            const displayDates =
                startDate <= endDate
                    ? `${firstDate} — ${secondDate}`
                    : `${secondDate} — ${firstDate}`;
            selectedDateSpan.text(displayDates);
        } else {
            resetDates();
        }
    });

    // Добавление рабочей записи по нажатию на "Добавить"
    $('.add-btn').on('click', function () {
        const selectedDate = selectedDateSpan.text();

        const startTime = modalOverlay.find('input[type="time"]').eq(0).val();
        const endTime = modalOverlay.find('input[type="time"]').eq(1).val();
        
        if (!startTime || !endTime) {
            alert('Пожалуйста, заполните все временные поля.');
            return;
        }
        
        const newEntry = `
            <div class="days-wrapper">
                <div class="work-time-info">
                    <span class="work-date">${selectedDate}</span>
                </div>
                <div class="time-selection">
                    <div class="time-box">${startTime}</div>
                    <div class="time-divider"></div>
                    <div class="time-box">${endTime}</div>
                </div>
                <div class="action-buttons">
                    <button type="button" class="edit-work-time" title="Редактировать"></button>
                    <button type="button" class="remove-work-time" title="Удалить"></button>
                </div>
            </div>
                `;
        workTimeContainer.append(newEntry);
        
        modalOverlay.removeClass('show');
        resetDates();
    });
        
    // Удаление рабочей записи
    $(document).on('click', '.remove-work-time', function () {
        workItemToDelete = $(this).closest('.days-wrapper');
        modalMessage.addClass('show');
    });

    // Подтверждение удаления
    $('.delete-btn').on('click', function () {
        if (workItemToDelete) {
            workItemToDelete.remove();
        }
        modalMessage.removeClass('show');
    });

    $('form').on('submit', function(event) {
        event.preventDefault();
    });
});