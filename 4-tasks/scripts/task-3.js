// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log(calcRectangleArea("0.1", 5));
    console.log(calcRectangleArea(0.1, 5));
    console.log(calcRectangleArea(0, 5));
    console.log(calcRectangleArea(0.555, 66));
    console.log(calcRectangleArea(1, 5));
    console.log(calcRectangleArea(12, 5));
    console.log(calcRectangleArea(1, 5));
});

function calcRectangleArea(width, height) {
    let rectangleArea = null;
    try {
        if (typeof width !== "number") throw new TypeError("Please check the width\nThe value \"" + width + "\" is not allowed");
        if (typeof height !== "number") throw new TypeError("Please check the height\nThe value \"" + height + "\" is not allowed");
        if (width <= 0 || height <= 0) throw new RangeError("Please check the ranges. The values must be greater than zero");
        rectangleArea = width * height;
        return rectangleArea; 
    }
    catch (error) {
        alert(error.name + "\n" + error.message);
        return rectangleArea;   
    }
}