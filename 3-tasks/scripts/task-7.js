// Task #7
const runTaskButton = document.querySelector("#taskSeven");

runTaskButton.addEventListener('click', function () {
    console.log("Task #7");
    findUnique([1, 2, 3, 5, 3]);
    findUnique([1, 2, 3, 5, 11]);
    alert("Check the console");
});

function findUnique(arr) {
    let isUnique = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            isUnique = false;
            break;
        }
    }
    console.log(isUnique);
    return isUnique;
}