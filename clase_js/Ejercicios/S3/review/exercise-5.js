function rollDice(numberFace){

    let n = Math.floor((Math.random() * numberFace) + 1);

    return n

}

//rendondea par abajo
//Math.floor()
//Math.ceil()

for (let i = 0; i < 10; i++) {
    console.log(rollDice(6));
    
}


//console.log(rollDice(6));