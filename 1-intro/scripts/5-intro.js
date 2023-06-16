// Task #5
const runTaskButton = document.querySelector("#taskFive");

runTaskButton.addEventListener('click', function () {
    console.log("Task #5");
    const isAdult = confirm("Are you of legal age?");
    console.log(isAdult);
    alert("Check the console");
});