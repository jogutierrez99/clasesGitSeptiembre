const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param) {
    // insert code
    let arrayNuevo = [];
    for (let i = 0; i < duplicates.length; i++) {

        if(!arrayNuevo.includes(duplicates[i])){
            arrayNuevo.push(duplicates[i]);
        }else{
            
            //console.log(duplicates[i]);
        }
            
    }

   return arrayNuevo;

  }


console.log(removeDuplicates(duplicates));