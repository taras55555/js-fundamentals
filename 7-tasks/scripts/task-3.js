// Task #3
console.log("Task #3");
clickEvent.addEventListener('click', () => changeBodyBackgroundColor('blue'));
doubleClickEvent.addEventListener('dblclick', () => changeBodyBackgroundColor('pink'));
pressEvent.addEventListener('mousedown', () => changeBodyBackgroundColor('brown'));
pressEvent.addEventListener('mouseleave', () => changeBodyBackgroundColor('white'));
pressEvent.addEventListener('mouseup', () => changeBodyBackgroundColor('white'));
hoverEvent.addEventListener('mouseenter', () => changeBodyBackgroundColor('yellow'));
hoverEvent.addEventListener('mouseleave', () => changeBodyBackgroundColor('white'));

function changeBodyBackgroundColor(newColor) {
    document.body.style.backgroundColor = newColor;
}