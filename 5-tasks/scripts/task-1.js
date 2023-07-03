// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    const x = 10;
    const y = 10;
    const radius = 6
    const firstCircle = new Circle(x, y, radius);
    console.log(firstCircle.circumference(radius) + " (calculated with instance method)");

    console.log(Circle.circumference(11) + " (calculated with static method)");

    console.log(firstCircle.returnCopy());

    console.log(Circle.createCircle(2, 2, 7));

    console.log(Circle.createCircle(2, 2, 7));

    console.log("Is the point inside the circle?");
    console.log(firstCircle.isPointInsideCircle(3, 10));

    Circle.prototype.toString = function () {
        return "secondCircle: " + this.x + ", " + this.y + ", " + this.radius;
    }
    const secondCircle = new Circle(9, 9, 9);
    console.log(secondCircle.toString() + " - " + typeof secondCircle.toString());
});


class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(1);
    }

    static circumference(r) {
        return (2 * Math.PI * r).toFixed(1);
    }

    returnCopy() {
        return Object.assign(new Circle(this.x, this.y, this.radius));
    }

    static createCircle(x, y, r) {
        return new Circle(x, y, r);
    }

    isPointInsideCircle(coordinatesX, coordinatesY) {
        return Math.sqrt(Math.pow(this.x - coordinatesX, 2) + Math.pow(this.y - coordinatesY, 2)) <= this.radius;
    }
}

// Напишіть клас Круг та реалізуйте функціонал:
// -Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт; ✓
// -Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R); ✓
// -Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу; ✓
// -Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта; ✓
// -Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами; ✓
// -Визначте метод перевірки попадання крапки до кола; ✓
// -Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()). ✓