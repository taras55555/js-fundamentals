// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log("Task #2");
    console.log(checkAge());
});

function checkAge() {
    const rolesArray = ["admin", "moderator", "user"];
    const userName = window.prompt("Type your username");
    const userAge = window.prompt("How old are you?");
    const userStatus = window.prompt("Type your role (admin, moderator, user)");
    let canWatchMovie = false;
    try {
        if (userName === null || userName.trim() === "") throw new Error("The field \"username\" is empty! Please enter your username");
        if (userAge === null || userAge.trim() === "") throw new Error("The field \"user age\" is empty! Please enter your age");
        if (userStatus === null || userStatus.trim() === "") throw new Error("The field \"user status\" is empty! Please enter your role");
        if (isNaN(userAge)) throw new TypeError("The field must contain only an integer number");
        if (!(userAge >= 18 && userAge <= 70)) throw new RangeError("Age should be in the range of 18 - 70");
        if (!rolesArray.includes(userStatus.toLowerCase())) throw new EvalError("Please check your role");
        canWatchMovie = true;
        alert("Great!\nUsername - " + userName + "\nUser age - " + userAge + "\nUser status - " + userStatus + "\nYou can watch a movie!");
    }
    catch (error) {
        alert(error.name + "\n" + error.message);
        alert("We're sorry. Please check the data");
    }
    return canWatchMovie;
}
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:
// -вік користувача менше 18 або більше 70 років(генерується помилка типу RangeError). ✓
// -користувач не ввів жодних даних в будь - якому полі(виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). ✓
// -У полі статус введено неправильне слово(тип помилки EvalError).✓
// -в полі вік введено нечислове значення. ✓
// У всіх інших випадках користувач отримає доступ до перегляду фільму.У блоці catch передбачена можливість виведення назви та опису помилки.