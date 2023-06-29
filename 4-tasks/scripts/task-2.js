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
        if (userName === null || userName.trim() === "") throw Error("The field \"username\" is empty! Please enter your username");
        if (userAge === null || userAge.trim() === "") throw Error("The field \"user age\" is empty! Please enter your age");
        if (isNaN(userAge)) throw TypeError("The field must contain only an integer number");
        if (!(userAge >= 18 && userAge <= 70)) throw RangeError("Age should be in the range of 18 - 70");
        if (userStatus === null || userStatus.trim() === "") throw Error("The field \"user status\" is empty! Please enter your role");
        if (!rolesArray.includes(userStatus.toLowerCase())) throw EvalError("Please check your role");
        canWatchMovie = true;
        alert("Great!\nUsername - " + userName + "\nUser age - " + userAge + "\nUser status - " + userStatus + "\nYou can watch a movie!");
    }
    catch (error) {
        if (error instanceof TypeError) {
            alert(error.name + "\n" + error.message);
        } else if (error instanceof RangeError) {
            alert(error.name + "\n" + error.message);
        } else if (error instanceof EvalError) {
            alert(error.name + "\n" + error.message);
        } else if (error instanceof Error) {
            alert(error.name + "\n" + error.message);
        }
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