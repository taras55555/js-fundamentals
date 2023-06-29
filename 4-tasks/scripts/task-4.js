// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");
    try {
        console.log(showMonthName(1));
        console.log(showMonthName(2));
        console.log(showMonthName(3));
        console.log(showMonthName(4));
        console.log(showMonthName(5));
        console.log(showMonthName(6));
        console.log(showMonthName(7));
        console.log(showMonthName(8));
        console.log(showMonthName(9));
        console.log(showMonthName(10));
        console.log(showMonthName(11));
        console.log(showMonthName(12));
        console.log(showMonthName(55));

    } catch (error) {
        if (error instanceof MonthException) {
            console.log(error.name + " " + error.message);
        } else {
            console.log("Unexpected error: " + error);
        }
    }
});

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}
function showMonthName(month) {
    if (month < 1 || month > 12) throw new MonthException("Incorrect month number");
    const date = new Date();
    date.setMonth(--month, 1);
    const options = { month: "long" };
    return date.toLocaleString("en-US", options);
}