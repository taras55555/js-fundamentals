// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");
    let Person = {
        name: "Taras",
        currentYear: 2023,
        isAdult: false,
        city: undefined,
        defaultValue: null
    }
    console.log(Person);
    alert("Check the console");
});