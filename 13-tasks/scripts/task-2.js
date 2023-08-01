// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    const ajax = new XMLHttpRequest();

    ajax.onload = function () {
        if (ajax.status !== 200) {
            console.log(ajax.status + " " + ajax.statusText);
        } else {
            console.log(ajax.status + " " + ajax.statusText);
            const jsonString = JSON.parse(ajax.responseText);
            const ulElement = document.createElement('ul');
            jsonString.forEach(element => {
                const authorName = document.createElement('li');
                authorName.textContent = element.author;
                ulElement.appendChild(authorName);
            });
            taskTwoContent.innerHTML=''
            taskTwoContent.appendChild(ulElement);
        }
    }
    ajax.open("GET", "books.json", true);
    ajax.send();

});