// Task #2
console.log("Task #2");
console.log("Kaminskyi");

// Task #3
console.log("Task #3");
let course;
let group;
const valuseOfVariables = document.querySelector(".main-text");

course = "JavaScript Fundamentals";
group = "0906";

console.log(course + " " + group);
valuseOfVariables.innerHTML = "Task #3<br>" + course + " " + group;

course = group;
console.log(course + " " + group);
valuseOfVariables.innerHTML = valuseOfVariables.innerHTML + "<br>" + course + " " + group;

// Task #4
console.log("Task #4");
let Person = {
    name: "Taras",
    currentYear: 2023,
    isAdult: false,
    city: undefined,
    defaultValue: null
}
console.log(Person);

// Task #5
console.log("Task #5");
const isAdult = confirm("Are you of legal age?");
console.log(isAdult);