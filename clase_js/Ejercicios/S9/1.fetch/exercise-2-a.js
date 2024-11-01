const baseUrl = 'https://api.nationalize.io?name=';

let $btn = document.querySelector("button");

$btn.addEventListener("click", prueba);

function prueba() {
    let $input = document.querySelector("input");
    fetch(baseUrl + $input.value)
        .then(response => {
            response.json()
                .then(data =>{
                    console.log(data);
                })
        });
}