// Task #5
const runTaskButton = document.querySelector("#taskFive");

runTaskButton.addEventListener('click', function () {
    console.log("Task #5");
    let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
    // let arr = ["null", 5, "Limit", [null, undefined], 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], [true, NaN, NaN], "strong", "broun", true];
    let arrNew = funcName(arr);
    console.log(arr);
    console.log(arrNew);
    alert("Check the console");
});

function funcName(arr) {
    let newArr = [];
    for (const element of arr.flat(Infinity)) {
        let iterator = 0;
        let isSuccess = false;
        for (let newValue of newArr) {
            if (typeof newValue[0] === typeof element) {
                newArr[iterator].push(element);
                isSuccess = true;
                break;
            }
            iterator++;
        }
        if (!isSuccess) {
            newArr.push([element]);
        }
    }
    return newArr;
}