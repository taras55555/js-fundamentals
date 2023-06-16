// Task #7
const runTaskButton = document.querySelector("#taskSeven");

runTaskButton.addEventListener('click', function () {
    console.log("Task #7");
    const login = window.prompt("Enter your username");
    const email = window.prompt("Enter your email");
    const password = window.prompt("Enter your password");

    alert("Dear " + login + "\nyour email is " + email + ",\nyour password is " + password);
});