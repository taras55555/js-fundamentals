// Task #3

let html = document.documentElement;
let body = document.createElement("body");

let main = document.createElement("main");
body.append(main)
main.classList.add("mainClass");
main.classList.add("check");
main.classList.add("item");

let div = document.createElement("div");
main.append(div);
div.id = "myDiv";

let p = document.createElement("p");
div.append(p);
p.textContent = "First paragraph";

html.append(body);