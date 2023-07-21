// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log('Task #2');
    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
    };

    let {
        names: [, name2, , name4],
        ages: [, age2, , age4],
    } = data;

    console.log(name2); // "Tom"
    console.log(age2); // 24
    console.log(name4); // "Bob"
    console.log(age4); // 26
});