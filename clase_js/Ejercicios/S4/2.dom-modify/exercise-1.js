let div = document.createElement("div");
let contenido = document.createTextNode("Prueba del texto creado");
div.appendChild(contenido);

let $body = document.querySelector(".body");

$body.appendChild(div);

//document.body.appendChild(div);