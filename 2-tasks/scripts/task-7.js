// Task #7

// користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
// користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися.
// користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.

const runTaskButton1 = document.querySelector("#taskSeven-1");
const runTaskButton2 = document.querySelector("#taskSeven-2");
const runTaskButton3 = document.querySelector("#taskSeven-3");

import { processInput } from './task-3.js';

const amountPerHundredRows = 50;
const amountOfFine = 20;
const delayLimit = 3;

// користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
runTaskButton1.addEventListener('click', function () {
    let expectedSalary = processInput(window.prompt("Type expected salary"));
    while (isNaN(expectedSalary)) {
        expectedSalary = processInput(window.prompt("The field must contain only an integer number.\nType expected salary"));
    }
    let countOfDelays = processOnlyNaturalNum(window.prompt("Type number of delays"));
    while (isNaN(countOfDelays) || countOfDelays === null) {
        countOfDelays = processOnlyNaturalNum(window.prompt("A number should be a natural or zero\nType number of delays"));
    }
    const debt = Math.floor(countOfDelays / delayLimit) * amountOfFine;

    const howManyRows = Math.ceil((debt + expectedSalary) / amountPerHundredRows);
    console.log("How many lines of code should he write?\nAnswer - " + howManyRows * 100);

});

runTaskButton2.addEventListener('click', function () {
    alert("The solution for this task is currently unavailable.");
});

runTaskButton3.addEventListener('click', function () {
    alert("The solution for this task is currently unavailable.");
});



function processOnlyNaturalNum(num) {
    num = Number.isInteger(Number(num)) && num >= 0 ? Number(num) : NaN;
    return num;
}

