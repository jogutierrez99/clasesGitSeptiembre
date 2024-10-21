let $btn = document.querySelector("#btnToClick");


function sayHello(e){
    console.log(e);
    console.log(this);
}

$btn.addEventListener("click" , sayHello);