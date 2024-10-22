const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let $text = document.querySelector("#toFilterStreamers");

let $btn = document.querySelector("#button");

function contenido(){

    let streamerinput = streamers.filter(function(streamer){
        return streamer.name.includes($text.value);
    })

    console.log(streamerinput);

}

$btn.addEventListener("click", contenido);