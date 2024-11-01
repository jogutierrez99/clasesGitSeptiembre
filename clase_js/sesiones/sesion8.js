// asincronia
// fetch

let url = "https://rickandmortyapi.com/api/character";


fetch(url)
    .then(response => {
        response.json()
            .then(data => {
                console.log(data);
                console.log(data.info.count);
            });
    })


 //Async await
 getCharacter();
async function getCharacter() {
    try {
        let response = await fetch(url);
        let data = await response.json();
    } catch (err) {
        console.log(err);
    }

    return 
}


async function paintCharacter() {
    let characters = await getCharacter();

    for (const character of characters) {
        let $pill = document.createElement("div");
    }
}


