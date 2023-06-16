// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log("Task #3");
    let course = null;
    let group = null;

    course = "JavaScript Fundamentals";
    group = "0906";

    alert("Task 3\n" + course + " " + group);

    course = group;
    alert(course + " " + group);
});