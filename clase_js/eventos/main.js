let $btn = document.querySelector("#button");
/*
$btn.addEventListener("click" , function(){
    alert("hola");
});
*/

$btn.addEventListener("click" , sayHello);

function sayHello(){
    alert("hola!");
}

let $nameInput = document.querySelector("#name");
let $ageInput = document.querySelector("#age");

$nameInput.addEventListener("keydown", printValue);

function printValue() {

    console.log(this.printValue);
    
}

let $divKawaii = document.querySelector("#divKawaii");


//time out
function sayHi() {

    console.log("Holii");
    
}

setTimeout(sayHi, 4000);