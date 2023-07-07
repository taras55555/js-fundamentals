const h1Element = document.querySelector("h1");
h1Element.style.backgroundColor = "#9bd99b";


const myDiv = document.querySelector("#myDiv");
const stylesArray = [
    { property: 'font-weight', value: 'bold' },
    { property: 'color', value: 'red' },
    { property: 'text-decoration', value: 'underline' },
    { property: 'font-style', value: 'italic' }
]
for (let i = 0; i < myDiv.children.length; ++i) {
    let style = stylesArray[i];
    myDiv.children[i].style[style.property] = style.value;
}

const myList = document.querySelector("#myList");
let makeHorizontal = "\t";
for (let text of myList.children) {
    makeHorizontal = makeHorizontal + text.textContent;
}
myList.remove();

const firstSpanElement = document.querySelector("span");
firstSpanElement.textContent = makeHorizontal;
firstSpanElement.style.whiteSpace = "pre"