// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");
    // const txt = "A marker pen, fine liner, marking pen, felt-tip pen, felt pen, flow marker, sign pen (in South Korea), vivid (in New Zealand), texta (in Australia), sketch pen (in South Asia) or koki (in South Africa), is a pen which has its own ink source and a tip made of porous, pressed fibers such as felt.[1] A marker pen consists of a container (glass, aluminum or plastic) and a core of an absorbent material that holds the ink. The upper part of the marker contains the nib that was made in earlier times of a hard felt material, and a cap to prevent the marker from drying out."
    const txt = "Afg"
    const redMarker = new MarkerPen("red", 0.1);
    const greenMarker = new MarkerPen("green", 0.4);
    const orangeMarker = new MarkerPen("orange", 0.2);

    redMarker.writeText(txt);
    greenMarker.writeText(txt);
    greenMarker.writeText(txt);
    orangeMarker.writeText(txt);
    redMarker.writeText(txt);
    redMarker.writeText(txt);

});

class MarkerPen {
    constructor(markerColor, inkLevel) {
        this.markerColor = markerColor;
        this.inkLevel = inkLevel;
    }

    writeText(str) {
        console.log("The current level of ink in the " + this.markerColor + " marker - " + this.inkLevel.toFixed(3) * 100 + "%");
        let count = 0;
        let output = "";
        let inkHasRunOut = this.inkLevel >= 0.005 ? false : true;
        while (!inkHasRunOut && count < str.length) {
            output = output + str[count];
            if (str[count] !== " ") {
                this.inkLevel -= 0.005;
            }
            inkHasRunOut = this.inkLevel >= 0.005 ? false : true;
            count++
        }

        console.log("%c" + output, "color:" + this.markerColor);
        console.warn(inkHasRunOut === true ? "Not enough ink in the " + this.markerColor + " marker" : this.inkLevel.toFixed(3) * 100 + "%");
    }
}

// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнила в маркері (у відсотках);
// метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
