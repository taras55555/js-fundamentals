// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    const ulElements = document.querySelectorAll("#list li");
    const resultElement = document.querySelector("#task1Result");
    const resultArray = [];
    const arrayUlElements = Array.from(ulElements);
    const lengthList = arrayUlElements.length;

    for (let i = 0; i < lengthList; ++i) {
        let currentElement = i%2===0 ? arrayUlElements.shift() : arrayUlElements.pop();    
        resultArray.push(currentElement.textContent);
    }
    resultElement.innerHTML = resultArray.join(', ');
});