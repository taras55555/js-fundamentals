// Task #5
const circle = document.querySelectorAll(".circle");

circle.forEach(tag => {
    currentAttribute = tag.getAttribute("data-anim");
    tag.classList.add(currentAttribute)
})