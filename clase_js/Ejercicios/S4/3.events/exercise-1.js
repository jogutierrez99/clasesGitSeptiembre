let $btn = document.querySelector("#btnToClick");


function sayHello(){
    console.log(this);
}

$btn.addEventListener("click" , sayHello());