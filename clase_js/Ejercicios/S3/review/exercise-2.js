const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

function volumeMedia(users){

let suma = 0;
let media = 0;
for (const user of users) {

    for (const key in user.favoritesSounds) {
        
        if(key == "waves"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.waves.volume;
        }

        if(key == "rain"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.rain.volume;
        }

        if(key == "firecamp"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.firecamp.volume;
        }

        if(key == "shower"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.shower.volume;
        }

        if(key == "train"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.train.volume;
        }

        if(key == "wind"){
            //let volumen = user.favoritesSounds.waves.volume;
            suma += user.favoritesSounds.wind.volume;
        }

        media++;
    }
    
}

return media = suma / media;

}


console.log(volumeMedia(users));

