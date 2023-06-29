// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    const arr = [5, 5, 44, 2, 3, 8, 4, 32, 4];
    console.log(sumSliceArray(arr, 1, 7));
});

function sumSliceArray(arr, first, second) {
    let sum = null;
    const arrLen = arr.length;
    try {
        if (arrLen === 0) throw TypeError("Array is empty");
        if (!Number.isInteger(first) || !Number.isInteger(second)) throw TypeError("Icorrect data. Parameters should be a natural");
        if ((first < 1 || first > arrLen) || (second < 1 || second > arrLen)) throw RangeError("Incorrect data. The specified parameters must be within the range from 1 to " + arrLen);
        const slicedArray = arr.slice(first - 1, first).concat(arr.slice(second - 1, second));
        sum = slicedArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sum;
    }
    catch (error) {
        if (error instanceof RangeError) {
            alert("Error type - " + error.name + "\nError message  - " + error.message + "\nError stack - " + error.stack);
        } else if (error instanceof TypeError) {
            alert("Error typer - " + error.name + "\nError message - " + error.message + "\nError stack - " + error.stack);
        } else {
            alert("Error typer - " + error.name + "\nError message - " + error.message + "\nError stack - " + error.stack);
        }
    }
    return sum;
}