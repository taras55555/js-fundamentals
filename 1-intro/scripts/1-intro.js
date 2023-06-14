// 2
console.log("Kaminskyi");

// 3
let course;
let group;
const valuseOfVariables = document.querySelector(".main__text");

course = "JavaScript Fundamentals";
group = "0906";

console.log(course + " " + group);
valuseOfVariables.innerHTML = course + " " + group;

course = group;
console.log(course + " " + group);
valuseOfVariables.innerHTML = valuseOfVariables.innerHTML + "<br>" + course + " " + group;

// 4
let Person = {
    name: "Taras",
    currentYear: 2023,
    isAdult: false,
    city: undefined,
    defaultValue: null
}
console.log(Person);