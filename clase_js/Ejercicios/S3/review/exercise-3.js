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

    let counter = {};

    for (const user of users) {
    
        for (const soundkey in user.favoritesSounds) {
            /*
            if(key == "waves"){
                //let volumen = user.favoritesSounds.waves.volume;
                //suma += user.favoritesSounds.waves.volume;
                /*
                if(!sonidosFav.sonido.includes(key)){
                    sonidosFav.push({sonido:"waves" , contador: 0});
                }else{
                    sonidosFav.contador = sonidosFav.contador++;
                }


            }
    
            if(key == "rain"){
                //let volumen = user.favoritesSounds.waves.volume;
               
            }
    
            if(key == "firecamp"){
                //let volumen = user.favoritesSounds.waves.volume;
               
            }
    
            if(key == "shower"){
                //let volumen = user.favoritesSounds.waves.volume;
                
            }
    
            if(key == "train"){
                //let volumen = user.favoritesSounds.waves.volume;
              
            }
    
            if(key == "wind"){
                //let volumen = user.favoritesSounds.waves.volume;
               
            } */
    
            if(!counter.hasOwnProperty(soundkey)){
                counter[soundkey] = 0;
            }

            counter[soundkey]++;

        }
        
    }
    
    return counter;
    
    }    

    console.log(volumeMedia(users));