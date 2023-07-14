export class InputHandler {
    constructor(name, id, eventName, resultField, method) {
        this.name = name;
        this.id = id;
        this.eventName = eventName;
        this.resultField = resultField
        this.method = method;
        this.currentElementValue;
    }

    newEventListener() {
        let currentTimeout;
        const currentInput = document.querySelector(`#${this.id}`)
        const currentResult = document.querySelector(`#${this.resultField}`)
        currentInput.addEventListener(this.eventName, () => {
            currentResult.textContent = "";
            currentResult.classList.add("image-container");
            clearTimeout(currentTimeout);
            currentTimeout = setTimeout(() => {
                this.currentElementValue = currentInput.value;
                if (this.method === 'firstUpperCase') {
                    currentResult.innerHTML = this.firstUpperCase();
                } else if (this.method === 'checkEmail') {
                    currentResult.innerHTML = this.checkEmail();
                } else if (this.method === 'swapWords') {
                    currentResult.innerHTML = this.swapWords();
                } else if (this.method === 'checkBankCard') {
                    currentResult.innerHTML = this.checkBankCard();
                }

                currentResult.classList.remove("image-container");
            }, 1000);
        });
    }
    // Task#1
    firstUpperCase() {
        if (!this.currentElementValue) return `String's empty`
        const regExpression = /^[A-Z]/g;
        // const searching = regExpression.test(!this.currentElementValue);
        const searching = regExpression.test(!this.currentElementValue.trim());
        return searching ? `String's <span class="green-text">starts</span> with uppercase character` : `String's <span class="red-text">not</span> starts with uppercase character`;
    }

    checkEmail() {
        if (!this.currentElementValue) return `String's empty`
        const regExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching;
    }

    swapWords() {
        if (!this.currentElementValue) return `String's empty`
        const regExpression = /\S+/ig;
        const searching = this.currentElementValue.trim().match(regExpression);
        return searching.reverse().join(', ');
    }

    checkBankCard() {
        if (!this.currentElementValue) return `String's empty`
        const regExpression = /^(?:\d{4}-? ?){3}\d{4}$/g;
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching ? `The format <span class="green-text">matches</span> a bank card` : `The format <span class="red-text">doesn't</span> match a bank card!`;
    }
}