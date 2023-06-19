// Task #6
const runTaskButton = document.querySelector("#taskSix");

runTaskButton.addEventListener('click', function () {
    let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
    let data = null;
    let maxOccurrences = 0;
    const countMap = {};
    arr.forEach(function (element) {
        countMap[element] = (countMap[element] || 0) + 1;

        if (countMap[element] > maxOccurrences) {
            maxOccurrences = countMap[element];
            data = element;
        }
    });
    console.log(data);
    arr = arr.filter(element => element !== data);
    console.log(arr);
    alert("Check the console")
});