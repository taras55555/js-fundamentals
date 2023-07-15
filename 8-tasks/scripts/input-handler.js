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
                } else if (this.method === 'checkEmailV2') {
                    currentResult.innerHTML = this.checkEmailV2();
                } else if (this.method === 'checkLogin') {
                    currentResult.innerHTML = this.checkLogin();
                }

                currentResult.classList.remove("image-container");
            }, 1000);
        });
    }
    // Task#1
    firstUpperCase() {
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /^[A-Z]/g;
        // const searching = regExpression.test(!this.currentElementValue);
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching ? `String's <span class="green-text">starts</span> with uppercase character` : `String's <span class="red-text">not</span> starts with uppercase character`;
    }
    
    // Task#2
    checkEmail() {
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching;
    }

    // Task#3
    swapWords() {
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /\S+/ig;
        const searching = this.currentElementValue.trim().match(regExpression);
        return searching.reverse().join(', ');
    }

    // Task#4
    checkBankCard() {
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /^(?:\d{4}-? ?){3}\d{4}$/g;
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching ? `The format <span class="green-text">matches</span> a bank card` : `The format <span class="red-text">doesn't</span> match a bank card!`;
    }

    // Task#5
    checkEmailV2() {
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /^[a-z0-9]+[a-z0-9_]*-?[a-z0-9_]*@([0-9a-z-]+\.[0-9a-z-]+)(\.?[a-z0-9-]+){1,3}$/i;
        const searching = regExpression.test(this.currentElementValue.trim());
        return searching;
    }

    // Task#6
    checkLogin() {
        let numbers = [];
        if (!this.currentElementValue) return `String's empty`;
        const regExpression = /^(?=.{2,10}$)[a-z]{1}(([0-9]+(\.[0-9]+)?)?([a-z0-9])?){1,9}$/i;
        const searchingTest = regExpression.test(this.currentElementValue.trim());

        const regExpressionMatch = /[0-9]+(\.?[0-9]+)?/g;
        const searchingMatch = this.currentElementValue.trim().match(regExpressionMatch);
        if (searchingMatch) numbers = searchingMatch.filter((element) => parseFloat(element));
        return [searchingTest, numbers.join(", ")].join("<br>");
    }
}