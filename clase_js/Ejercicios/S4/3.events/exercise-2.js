let $input = document.querySelector("input");

function contenido(){
    console.log($input.value);
    
}
$input.addEventListener("focus" , contenido);