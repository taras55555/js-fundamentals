// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log("Task #3");

    new Promise(function (resolve, reject) {
        // Запитуємо у користувача number за допомогою prompt()
        // Якщо користувач ввів не число - викликаємо reject()
        // Якщо користувач ввів число- викликаємо resolve(number)
        const number = prompt("Type your number 1");
        isNaN(number) ? reject() : resolve(number);
    }).catch(function (error) {
        return new Promise(function (resolve, reject) {
            // Запитуємо у користувача number, до тих пір, поки він його не введе
            // Після вводу числа - викликаємо resolve(number)
            let number;
            while (isNaN(number)) {
                number = prompt("Type your number 2");
            }
            resolve(number);
        });
    }).then(function (result) {
        // Вивід number у консоль
        console.log(result)
    });


});