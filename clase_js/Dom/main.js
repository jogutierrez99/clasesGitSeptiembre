let $title = document.getElementById("title");
$title.textContent = "Adios";
//cambia html
$title.innerHTML = "<span style='color: red'>texto</span>"; 
console.log($title);

let $p = document.querySelector(".content");
console.log($p.textContent);

//pedir todos los elementos
let $lis = document.querySelectorAll("li");
console.log($lis);


for (const $li of $lis) {
    $li.textContent = "Nuevo contenido";
    $li.style.color = "pink";
    //background-color no existe
    $li.style.backgroundColor = "grey";

    //se borran los li pero no el ul
    $li.remove();
}



let $catImg = document.querySelector("#catImg");
//$catImg.src = "";
$catImg.alt = "Nuevo"
console.log($catImg.src);
console.log($catImg.alt);

console.log($catImg.dataset.type);

console.log($catImg.className);
console.log($catImg.classList);

$catImg.classList.add("chuli");
$catImg.classList.remove("gatito");
//$catImg.classList.add("grande");


let $brownCatImg = document.createElement("img");

$brownCatImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_ZXYYAUMRz6PBvT5IGn56rLSy7B0a0yaLA&s"

$brownCatImg.alt = "gatoMarron"

let $catContainer = document.querySelector("#catContainer");
$catContainer.appendChild($brownCatImg);