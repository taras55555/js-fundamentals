// Task #6
const runTaskButton = document.querySelector("#taskSix");

runTaskButton.addEventListener('click', function () {
    alert(calc(10, 3, 1));
});

const calc = (a, b, op) => op === 1
? a - b
: op === 2
? a * b
: op === 3
? a / b
: a + b;