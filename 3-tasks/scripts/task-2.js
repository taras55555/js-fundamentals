// Task #1
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    const a = 3;
    const b = 11;
    let count = 0;
    console.log(sequenceOfNumbers(a, b, count).slice(0, -1));

});

function sequenceOfNumbers(a, b, count) {

    if (a > b) {
        return '';
    }
    let sequence = (a + ",").repeat(++count);
    return a > b ? '' : sequence + sequenceOfNumbers(a + 1, b, count);
}