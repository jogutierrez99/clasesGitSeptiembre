const baseUrl = 'https://api.nationalize.io?name=';

let $btn = document.querySelector("button");

$btn.addEventListener("click", prueba);

let $buttons = [];

function prueba() {
    let $input = document.querySelector("input");
    fetch(baseUrl + $input.value)
        .then(response => {
            response.json()
                .then(data =>{
                    
                    for (const country of data.country) {
                        //console.log(country.country_id);

                        let $div = document.querySelector(".container-p");
                        
                        let $p = document.createElement("p");
                        //El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
                        $p.textContent = "El nombre "+ $input.value + " tiene un " + country.probability + " porciento de ser de " + country.country_id + " ";

                        let $btn = document.createElement("button");
                        $btn.classList.add("button-x");
                        $btn.textContent = "x";
                        $btn.addEventListener("click", removeItem);

                        $p.appendChild($btn);
                        
                        $div.appendChild($p);

                        //$div.innerHTML += `<p>El nombre ${$input.value} tiene un ${country.probability} porciento de ser de ${country.country_id}</p>`;
                    }

                    $buttons = document.querySelectorAll(".button-x");
                    console.log($buttons);
                })
        });
}


function removeItem(){
    this.parentNode.remove();
}


