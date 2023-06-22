// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    let arr = createArray(10, 9);
    console.log(arr); //
    alert("Check the console");
});

function createArray(start, end) {
    if (start > end) {
        return [];
    }
    let arr = createArray(start + 1, end);
    arr.unshift(start);
    return arr;
}