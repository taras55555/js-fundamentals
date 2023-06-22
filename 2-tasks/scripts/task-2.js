// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log("Task #2");
    let x = 1;
    let y = 2;

    // Допишіть код, необхідно використовувати змінні x і y
    let res1 = "" + x + y;
    console.log('""' + res1 + '""'); // ""12""
    console.log('""' + typeof res1 + '""'); // ""string""

    // Допишіть код, необхідно використовувати змінні x і y
    let res2 = "" + Boolean(x) + y
    console.log('""' + res2 + '""'); // ""true2""
    console.log('""' + typeof res2 + '""'); // ""string""

    // Допишіть код, необхідно використовувати змінні x і y
    let res3 = Boolean(x < y);
    console.log(res3); // true
    console.log('""' + typeof res3 + '""'); // ""boolean""

    // Допишіть код, необхідно використовувати змінні x і y
    let res4 = Math.sqrt(x - y);
    console.log(res4); // NaN
    console.log('""' + typeof res4 + '""'); // ""number""

    alert("Check the console");
});