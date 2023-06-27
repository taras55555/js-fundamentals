// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    const arr = [5, 4, 1, 2, 6, 8, 1];
    sumSliceArray(arr, 2, 7);
});

function sumSliceArray(arr, first, second) {
    const arrLen = arr.length;
    try {
        if (arrLen === 0) throw "Array is empty";
        if (!Number.isInteger(first) || !Number.isInteger(second)) throw "Icorrect data. Parameters should be a natural";
        if ((first < 1 || first > arrLen) || (second < 1 || second > arrLen)) throw "Icorrect data. The specified parameters must be within the range from 1 to " + arr.length;
        const slicedArray = arr.slice(first-1, first).concat(arr.slice(second-1, second));
        const sum = slicedArray.reduce((accumulator, currentValue) => accumulator+currentValue);
        
        console.log(sum);

    }
    catch (err) {
        alert(err);
    }
}