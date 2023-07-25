// Task #2
const runTaskButton = document.querySelector("#taskTwo");

runTaskButton.addEventListener('click', function () {
    console.log("Task #2");

    function calcArrProduct(array) {
        return new Promise((resolve, reject) => {
            if(array.some(element => typeof element !== 'number')) resolve("Error! Incorrect array!");
            resolve(array.reduce((accumulator, element) => accumulator * element));
            
        })
    }
    calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
    calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"
    calcArrProduct([5, false, 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"
    calcArrProduct([5, 1.33, 7, 12]).then(result => console.log(result)); // 558.6
    calcArrProduct([5, 4, "0", 12]).then(result => console.log(result)); // "Error! Incorrect array!"
});