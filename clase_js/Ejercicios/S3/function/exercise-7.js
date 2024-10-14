const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Tony',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    // insert code
    //console.log(number);
    if(param.includes(name)){
       console.log("Existe");

       for (let i = 0; i < param.length; i++) {
        
        if (param[i] == name) {
            console.log("Esta en la posicion: "+ i);
        }
        
       }

    }else{

        console.log("No existe");

    }

  }

finderName(nameFinder, "Tony");