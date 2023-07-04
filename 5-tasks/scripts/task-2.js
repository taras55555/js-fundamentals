// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log("Task #2");
    let mentor = {
        course: "JS fundamental",
        duration: 3,
        direction: "web-development"
    };
    console.log(propsCount(mentor));
    alert("Check the console");
});

const propsCount = (obj) => Object.keys(obj).length;