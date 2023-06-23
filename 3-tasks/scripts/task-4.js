// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    const arr = [5, 3, 4, -2, -5, -2, -22, 5, 1, 1, 1, 1, 1, 1, 1, 16, 7, 3, "a", "b", "a", "a", "c"];
    const arr2 = compact(arr);
    console.log(arr2); // [5, 3, 4, -2, -5, -22, 1, 16, 7, 'a', 'b', 'c']
});

function compact(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr.indexOf(arr[i]) === i || (arr.splice(i, 1), i--);
    }
    return arr;
}