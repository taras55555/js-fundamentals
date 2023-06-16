// Task #8
const currentDate = new Date().toISOString().split('T')[0];
const calendar = document.querySelector("#calendar");
calendar.value = currentDate;

const runTaskButton = document.querySelector("#taskEight");

runTaskButton.addEventListener('click', function () {
    calculateSeconds();

    calendar.addEventListener('change', calculateSeconds);

    function calculateSeconds() {
        const formattedDate = calendar.value.split("-");

        const secondsInHour = 60 * 60;
        const secondsInDay = numberOfSecondsInSelectedDay(formattedDate);
        const secondsInMonth = numberOfSecondsInSelectedMonth(formattedDate);

        alert("Number of seconds in an hour - " + secondsInHour + "\nNumber of the seconds in the selected day - " + secondsInDay + "\nNumber of the seconds in the selected month - " + secondsInMonth);
    }
});

function numberOfSecondsInSelectedDay(formattedDate) {
    const startDate = new Date(parseInt(formattedDate[0]), parseInt(formattedDate[1]) - 1, parseInt(formattedDate[2]), 0, 0, 0, 0);
    const endDate = new Date(parseInt(formattedDate[0]), parseInt(formattedDate[1]) - 1, parseInt(formattedDate[2]), 23, 59, 59, 999);

    const getMillisecondsStartDate = startDate.getTime();
    const getMillisecondsEndtDate = endDate.getTime();

    const secondsInSelectedDay = Math.round((getMillisecondsEndtDate - getMillisecondsStartDate) / 1000);

    return secondsInSelectedDay;
}

function numberOfSecondsInSelectedMonth(formattedDate) {
    const startMonth = new Date(parseInt(formattedDate[0]), parseInt(formattedDate[1]) - 1, 1, 0, 0, 0, 0);

    const selectedYear = startMonth.getFullYear();
    const selectedMonth = startMonth.getMonth();

    const lastDay = new Date(selectedYear, selectedMonth, 1);
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(lastDay.getDate() - 1);
    const lastDayOfMonth = lastDay.getDate();

    const endMonth = new Date(parseInt(formattedDate[0]), parseInt(formattedDate[1]) - 1, lastDayOfMonth, 23, 59, 59, 999);

    const getMillisecondsStartMonth = startMonth.getTime();
    const getMillisecondsEndMonth = endMonth.getTime();

    const secondsInMonth = Math.round((getMillisecondsEndMonth - getMillisecondsStartMonth) / 1000);

    return secondsInMonth;
}