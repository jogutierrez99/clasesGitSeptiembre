let $divs = document.querySelectorAll(".fn-insert-here");

for (const div of $divs) {
    let $p = document.createElement("p");
    $p.textContent = "voy dentro";

    div.appendChild($p);
}