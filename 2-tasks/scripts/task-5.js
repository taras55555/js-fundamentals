// Task #5
const runTaskButton1 = document.querySelector("#taskFive-1");
const runTaskButton2 = document.querySelector("#taskFive-2");
const runTaskButton3 = document.querySelector("#taskFive-3");

const currentHour = new Date().getHours();

let greeting = null;

runTaskButton1.addEventListener('click', function () {
    if (currentHour == 23 || currentHour < 5) {
        greeting = "Good Night";
    } else if (currentHour >= 5 && currentHour < 11) {
        greeting = "Good Morning";
    } else if (currentHour >= 11 && currentHour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    alert(greeting + "\nIf / else if / else Statements");
});

runTaskButton2.addEventListener('click', function () {
    switch (currentHour) {
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            greeting = "Good Night";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            greeting = "Good Morning";
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }
    alert(greeting + "\nSwitch Statement");
});

runTaskButton3.addEventListener('click', function () {
    greeting = currentHour == 23 || currentHour < 5
        ? "Good night"
        : currentHour >= 5 && currentHour < 11
        ? "Good morning"
        : currentHour >= 11 && currentHour < 17
        ? "Good Afternoon"
        : "Good Evening";
    alert(greeting + "\nTernary Operator");
});