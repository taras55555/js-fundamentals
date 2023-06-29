// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log("Task #3");
    try {
        const width = 7;
        const height = 5;
        alert("Rectangle area is " + width + " * " + height + " = " + calcRectangleArea(width, height));
    }
    catch (error) {
        alert(error);
        console.log("Incorrect data");
    }
});

function calcRectangleArea(width, height) {
    try {
        if (typeof width !== "number") throw new TypeError("Please check the width\nThe value \"" + width + "\" is not allowed");
        if (typeof height !== "number") throw new TypeError("Please check the height\nThe value \"" + height + "\" is not allowed");
        if (width <= 0 || height <= 0) throw new RangeError("Please check the ranges. The values must be greater than zero");
    } catch (error) {
        throw error;
    };
    return width * height;
}