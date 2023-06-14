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