// Task #3
const runTaskButton = document.querySelector("#taskThree");
const rangeMax = 500;

runTaskButton.addEventListener('click', function () {
    const k=5;    
    console.log(randArray(k));
});

function randArray(k) {
    let arr = [];
    for(let i=0; i<k; i++) {
        arr[i] = Math.ceil(Math.random()*rangeMax);
    }
    return arr;
}