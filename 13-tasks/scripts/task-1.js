// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    const ajax = new XMLHttpRequest();

    ajax.onload = function () {
        if (ajax.status !== 200) {
            console.log(ajax.status + " " + ajax.statusText);
        } else {
            const currentDate = new Date();
            runTaskButton.innerText = "Your vote is accepted: " + currentDate
            console.log(ajax.status + " " + ajax.statusText);
        }
    }
    ajax.open("GET", "http://localhost:3000/");
    ajax.send();

});