// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");
    const txt = "A marker pen, fine liner, marking pen, felt-tip pen, felt pen, flow marker, sign pen (in South Korea), vivid (in New Zealand), texta (in Australia), sketch pen (in South Asia) or koki (in South Africa), is a pen which has its own ink source and a tip made of porous, pressed fibers such as felt.[1] A marker pen consists of a container (glass, aluminum or plastic) and a core of an absorbent material that holds the ink. The upper part of the marker contains the nib that was made in earlier times of a hard felt material, and a cap to prevent the marker from drying out."
    // const txt = "A marker pen";

    const redMarker = new MarkerPen("red", 0.017);
    const greenMarker = new MarkerPen("green", 0.4);
    const orangeMarker = new MarkerPen("orange", 0.2);

    redMarker.writeText(txt);

    greenMarker.writeText(txt);
    greenMarker.writeText(txt);
    orangeMarker.writeText(txt);

    redMarker.writeText(txt);
    console.log("--------------------------------------------------\nStart using a refillable marker");
    const redRefillableMarker = new MarkerRefill("red", 0.1);
    redRefillableMarker.writeText(txt);
    redRefillableMarker.refillMarker();
    redRefillableMarker.writeText(txt);

    const greenRefillableMarker = new MarkerRefill("green", 0.057);
    greenRefillableMarker.writeText(txt);
    alert("Check the console");
});

class MarkerPen {
    constructor(markerColor, inkLevel) {
        this.markerColor = markerColor;
        this.inkLevel = inkLevel;
    }
    setInkLevel(val) {
        val === 1 ? this.inkLevel = 1 : this.inkLevel = parseFloat((this.inkLevel + val).toFixed(3));
    }
    getIncLevel() {
        return this.inkLevel;
    }
    writeText(str) {
        console.log("\nThe current level of ink in the " + this.markerColor + " marker - " + MarkerPen.convertToPercentages(this.getIncLevel()));
        let count = 0;
        let output = "";
        let inkHasRunOut = this.getIncLevel() >= 0.005 ? false : true;
        while (!inkHasRunOut && count < str.length) {
            output = output + str[count];
            if (str[count] !== " ") {
                this.setInkLevel(-0.005);
            }
            inkHasRunOut = this.getIncLevel() >= 0.005 ? false : true;
            count++
        }

        console.log("%c" + output, "color:" + this.markerColor);
        console.warn(inkHasRunOut === true ? "The " + this.markerColor + " marker has run out of ink" : "Ink remaining - " + MarkerPen.convertToPercentages(this.getIncLevel()));
    }
    static convertToPercentages(val) {
        const splitVal = (100 * val).toFixed(2).split(".");
        const floatVal = splitVal[1].indexOf(0) === 0 && splitVal[1][1].indexOf(0) === 0 ? "%" : splitVal[1][1].indexOf(0) === 0 ? "." + splitVal[1][0] + "%" : "." + splitVal[1] + "%"
        return splitVal[0] + floatVal;
    }
}

class MarkerRefill extends MarkerPen {
    constructor(markerColor, inkLevel) {
        super(markerColor, inkLevel);
    }

    refillMarker() {
        super.setInkLevel(1);
        console.log("The " + this.markerColor + " marker is refilled");
    }
}
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнила в маркері (у відсотках);
// метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів