// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log("Task #2");
    const a = 3;
    const b = 7;
    let count = 0;
    console.log(sequenceOfNumbers(a, b, count).slice(0, -1));
    alert("Check the console");
});

function sequenceOfNumbers(a, b, count) {

    if (a > b) {
        return '';
    }
    let sequence = (a + ",").repeat(++count);
    return a > b ? '' : sequence + sequenceOfNumbers(a + 1, b, count);
}