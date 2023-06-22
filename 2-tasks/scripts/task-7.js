// Task #7
const runTaskButton1 = document.querySelector("#taskSeven-1");
const runTaskButton2 = document.querySelector("#taskSeven-2");
const runTaskButton3 = document.querySelector("#taskSeven-3");

import { processInput } from './task-3.js';

const blockSize = 100;
const amountPerBlockSizeRows = 50;
const amountOfFine = 20;
const delayLimit = 3;

// користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
runTaskButton1.addEventListener('click', function () {
    let expectedSalary = processInput(window.prompt("Type expected salary"));
    while (isNaN(expectedSalary)) {
        expectedSalary = processInput(window.prompt("The field must contain only an integer or a floating-point number.\nType expected salary"));
    }
    let countOfDelays = processOnlyNaturalNum(window.prompt("Type number of delays"));
    while (isNaN(countOfDelays) || countOfDelays === null) {
        countOfDelays = processOnlyNaturalNum(window.prompt("A number should be a natural or zero\nType number of delays"));
    }
    const debt = Math.floor(countOfDelays / delayLimit) * amountOfFine;

    const howManyRows = Math.ceil((debt + expectedSalary) / amountPerBlockSizeRows);
    alert("expectedSalary = " + expectedSalary + "$\ncountOfDelays = " + countOfDelays + "\nHow many lines of code should he write?\nAnswer - " + howManyRows * blockSize);

});

// користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися.
runTaskButton2.addEventListener('click', function () {
    let numberLinesCode = processOnlyNaturalNum(window.prompt("Type the number of lines of code"));
    while (isNaN(numberLinesCode) || numberLinesCode === null) {
        numberLinesCode = processOnlyNaturalNum(window.prompt("A number should be a natural or zero\nType the number of lines of code"));
    }

    let expectedSalary = processInput(window.prompt("Type expected salary"));
    while (isNaN(expectedSalary)) {
        expectedSalary = processInput(window.prompt("The field must contain only an integer or a floating-point number.\nType expected salary"));
    }

    let income = Math.floor(numberLinesCode / blockSize) * amountPerBlockSizeRows;
    
    const extraMoney = income - expectedSalary;
    const timesLate = income >= expectedSalary
        ? "He can be late " + (Math.floor(extraMoney / amountOfFine) * delayLimit + delayLimit - 1) + " times"
        : "His income is lower than desired, but he can be late twice.";
    alert("numberLinesCode = " + numberLinesCode + "\nincome = " + income + "$\nexpectedSalary = " + expectedSalary + "\nextraMoney = " + extraMoney + "$\n" + timesLate);
});

// користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.
runTaskButton3.addEventListener('click', function () {
    let numberLinesCode = processOnlyNaturalNum(window.prompt("Type the number of lines of code"));
    while (isNaN(numberLinesCode) || numberLinesCode === null) {
        numberLinesCode = processOnlyNaturalNum(window.prompt("A number should be a natural or zero\nType the number of lines of code"));
    }
    let countOfDelays = processOnlyNaturalNum(window.prompt("Type number of delays"));
    while (isNaN(countOfDelays) || countOfDelays === null) {
        countOfDelays = processOnlyNaturalNum(window.prompt("A number should be a natural or zero\nType number of delays"));
    }

    const income = Math.floor(numberLinesCode / blockSize) * amountPerBlockSizeRows;
    const debt = Math.floor(countOfDelays / delayLimit) * amountOfFine;

    const salary = income > debt
        ? "Good! He will earn " + (income-debt) +"$"
        : "Bad! He has a debt of " + (income-debt) + "$";

    alert("numberLinesCode = " + numberLinesCode + "\ncountOfDelays = " + countOfDelays + "\nincome = " + income + "\ndebt = " + debt + "\n" + salary);
});



function processOnlyNaturalNum(num) {
    num = Number.isInteger(Number(num)) && num >= 0 ? Number(num) : NaN;
    return num;
}

