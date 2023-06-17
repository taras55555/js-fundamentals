// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    const a = -99;
    const b = -199;
    const c = 3;

    console.log(a < b && b < c);
    alert("Check the console");
});