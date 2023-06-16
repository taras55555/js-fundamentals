// Task #7
const runTaskButton = document.querySelector("#taskSeven");

runTaskButton.addEventListener('click', function () {
    console.log("Task #7");

    let login = window.prompt("Enter your username");
    while(login === "" || login === null) {
        login = window.prompt("The field cannot be empty. Enter your username");
    }

    let email = window.prompt("Enter your email");
    while(email === "" || email === null) {
        email = window.prompt("The field cannot be empty. Enter your email");
    }

    let password = window.prompt("Enter your password");
    while(password === "" || password === null) {
        password = window.prompt("The field cannot be empty. Enter your password");
    }

    alert("Dear " + login + "\nyour email is " + email + ",\nyour password is " + password);
});