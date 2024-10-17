let p = document.createElement("p");
let content = document.createTextNode("Soy dinamico");

//p.appendChild(content);

p.textContent = "Soy dinamico";

let body = document.querySelector("body");

body.appendChild(p);