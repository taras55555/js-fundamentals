// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log("Task #3");
    let isAdult = processInput(window.prompt("How old are you?"));
    console.log(isAdult);
    while (isNaN(isAdult)) {
        isAdult = processInput(window.prompt("The field must contain only an integer number.\nHow old are you?"));
    }
    isAdult >= 18 ? alert("You are already of legal age") : alert("You are still too young");
});

function processInput(isAdult) {
    if (isAdult === null) {
        return NaN;
    } else {
        isAdult = isAdult.replace(",", ".");
        isAdult = isAdult <= 0 ? NaN : isAdult;
        return Number(isAdult);
    }
}