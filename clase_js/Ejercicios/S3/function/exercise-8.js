const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    // insert code
   /* let contador= 0;
    for (let i = 0; i < param.length; i++) {
        
        for (let j = 0; j < param.length; j++) {
            
            if(param[i] == param[j]){
                
                contador++;
                
            }
            
        }
        console.log("la palabra " + param[i] + " aparece: " + contador);
        contador = 0;
    }*/
    let counter = {};
        for (const element of param) {
            //counter[word] === undefined
            if(!counter.hasOwnProperty(element)){
                counter[element] = 0;
            }

           counter[element] += 1;
            
        }

        return counter;
  }

  console.log(repeatCounter(counterWords));