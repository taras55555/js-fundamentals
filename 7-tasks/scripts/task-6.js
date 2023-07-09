// Task #6
printResult();

window.addEventListener('resize', printResult)

function printResult() {
    screenWidthValue.textContent = window.innerWidth;
    screenHeightValue.textContent = window.innerHeight;
}