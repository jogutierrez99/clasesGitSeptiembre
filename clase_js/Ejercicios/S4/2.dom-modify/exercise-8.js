let $p = document.createElement("p");

$p.textContent = "Estoy en medio";

let $secondDiv = document.querySelector("div:nth-child(2)");
// padre.insertbefore(cosa_a_meter, codaDeReferencia);

//document.body.insertBefore($p, $secondDiv);
$secondDiv.parentNode.insertBefore($p, $secondDiv);