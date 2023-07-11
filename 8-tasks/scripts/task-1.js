// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('keyup', function () {
    const currentValue = taskOne.value;
    searchResult.innerHTML = upperCase(currentValue);
});

function upperCase(currentText) {
    if(!currentText) return `String's empty`
    const regExpression = /^[A-Z]/g;
    // const searching = regExpression.test(currentText);
    const searching = regExpression.test(currentText.trim());
    return searching ? `String's <span class="green-text">starts</span> with uppercase character` : `String's <span class="red-text">not</span> starts with uppercase character`;
}