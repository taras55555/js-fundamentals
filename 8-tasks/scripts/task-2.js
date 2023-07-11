// Task #2
const runTaskButton = document.querySelector("#taskTwo");
let currentTimeout;

runTaskButton.addEventListener('keyup', () => {
    resultTaskTwo.textContent = "";
    resultTaskTwo.classList.add("image-container");
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
        const currentValue = taskTwo.value;
        resultTaskTwo.textContent = checkEmail(currentValue);
        resultTaskTwo.classList.remove("image-container");
    }, 1000);
});

function checkEmail(currentText) {
    if (!currentText) return `String's empty`
    const regExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const searching = regExpression.test(currentText.trim());
    console.log(searching);
    return searching;
}