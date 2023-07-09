// Task #1
const runTaskButton = document.querySelector("#taskOne");

runTaskButton.addEventListener('click', function () {
    console.log("Task #1");

    const windowParameters = {
        width: 300,
        height: 300,
        xCoordinate: 500,
        yCoordinate: 500,
    };
    const window1 = new CreateBrowserWindow(windowParameters)
    const methods = [window1.resizeWindow.bind(window1), window1.moveWindow.bind(window1), window1.closeWindow.bind(window1)];
    const cycle = setInterval(() => {
        methods.length > 0 ? methods.shift()() : clearInterval(cycle);
    }, 2000)

});

class CreateBrowserWindow {
    constructor({ width, height, xCoordinate, yCoordinate }) {
        this.width = width;
        this.height = height;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.wind = window.open('../../images/js-ico.png', '', `width=${this.width}, height=${this.height}`);
    }

    resizeWindow() {
        this.wind.resizeTo(this.xCoordinate, this.yCoordinate)
    }

    moveWindow() {
        this.wind.moveTo(this.xCoordinate - this.width, this.yCoordinate - this.height);
    }
    closeWindow() {
        this.wind.close();
    }
};
