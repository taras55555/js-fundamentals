// Task #6
const colorElements = document.querySelectorAll(".color");
const gradientElements = document.querySelectorAll(".gradient");
const imgElements = document.querySelectorAll("img.shoe");
const outPrice = document.querySelector("h1#outprice");
// console.log(gradientElements)
// console.log(imgElements)
colorElements.forEach(function(element) {
    element.addEventListener('click', function() {
        colorElements.forEach(function(el) {
            let currentGradient = document.querySelector(".gradient[color='"+el.getAttribute("color") + "']");
            let currentImg = document.querySelector("img[color='"+el.getAttribute("color") + "']");

            el.classList.remove('active');
            currentGradient.classList.remove('second');
            currentImg.classList.remove('show');
        });
        let thisPrice = this.getAttribute("data-price");
        let thisColor = this.getAttribute("color");

        let gradientChange = document.querySelector(".gradient[color='"+thisColor+"']");
        let imgChange = document.querySelector("img[color='"+thisColor+"']");

        outPrice.textContent = thisPrice;

        this.classList.add("active");
        gradientChange.classList.add("second");
        imgChange.classList.add("show");
    });
});