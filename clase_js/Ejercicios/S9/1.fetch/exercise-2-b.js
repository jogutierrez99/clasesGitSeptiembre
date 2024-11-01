const baseUrl = 'https://api.nationalize.io?name=';

let $btn = document.querySelector("button");

$btn.addEventListener("click", prueba);

let $input = document.querySelector("input");

function prueba() {
    
    fetch(baseUrl + $input.value)
        .then(response => {
            response.json()
                .then(data =>{
                    
                    /*for (const country of data.country) {
                        //console.log(country.country_id);

                        let $div = document.querySelector(".container-p");
                        
                        let $p = document.createElement("p");
                        //El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
                        $p.textContent = "El nombre "+ $input.value + " tiene un " + country.probability + " porciento de ser de " + country.country_id;
                        
                        $div.appendChild($p);

                        //$div.innerHTML += `<p>El nombre ${$input.value} tiene un ${country.probability} porciento de ser de ${country.country_id}</p>`;
                    }*/

                    addDom($input, data);

                })
        });
}

function addDom(input, data){

                        for (const country of data.country) {
                        //console.log(country.country_id);
                        let prob = Math.round(country.probability * 100);
                        let $div = document.querySelector(".container-p");
                        
                        let $p = document.createElement("p");
                        //El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
                        $p.textContent = "El nombre "+ $input.value + " tiene un " + prob + " % de ser de " + country.country_id;
                        
                        $div.appendChild($p);

                        //$div.innerHTML += `<p>El nombre ${$input.value} tiene un ${country.probability} porciento de ser de ${country.country_id}</p>`;
                    }
    
}