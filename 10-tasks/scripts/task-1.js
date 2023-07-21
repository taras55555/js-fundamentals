// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    let names = {
        first: "Tom",
        second: "Sam",
        third: "Ray",
        fourth: "Bob",
    };

    let { first: f, second, third: x, fourth, fifth = 'Name №5' } = names;

    console.log(f); // "Tom"
    console.log(x); // "Ray"
    console.log(fifth); // "Name №5"
});