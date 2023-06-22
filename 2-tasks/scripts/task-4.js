// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");
    const sidesOfTriangle = [window.prompt("Enter side A"), window.prompt("Enter side B"), window.prompt("Enter side C")];
    const normalizeSides = sidesOfTriangle.map(processSide);
    normalizeSides.sort((a, b) => a - b);
    if (normalizeSides.includes(NaN) || normalizeSides[0] + normalizeSides[1] <= normalizeSides[2]) {
        alert("Incorrect data");
    } else {
        const areaOfTriangle = getAreaOfTriangle(normalizeSides)
        const isRightTriangle = normalizeSides[0] * normalizeSides[1] / 2 === areaOfTriangle;
        console.log("Area of the triangle - " + areaOfTriangle + "\nIs triangle right - " + isRightTriangle);
    }
});

function processSide(side) {
    if (side === null) {
        return NaN;
    } else {
        side = side.replace(",", ".");
        side = side <= 0 ? NaN : side;
        return Number(side);
    }
}

function getAreaOfTriangle(arraySides) {
    let sum = 0;
    arraySides.forEach((item) => {
        sum += item;
    })
    const semiPerimeter = sum / 2;
    const triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - arraySides[0]) * (semiPerimeter - arraySides[1]) * (semiPerimeter - arraySides[2]))
    return Number(triangleArea.toFixed(3));
}