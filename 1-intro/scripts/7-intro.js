console.log("Task #7");
const login = window.prompt("Enter your username");
const email = window.prompt("Enter your email");
const password = window.prompt("Enter your password");
const valuseOfVariables = document.querySelector(".main__text");

valuseOfVariables.innerHTML = valuseOfVariables.innerHTML + "<br><br>Task #7<br>Dear " + login + ", your email is " + email + ", your password is " + password;
console.log("Dear " + login + ", your email is " + email + ", your password is " + password);