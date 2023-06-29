// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    let arr = createArray(3, 9);
    console.log(arr);
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