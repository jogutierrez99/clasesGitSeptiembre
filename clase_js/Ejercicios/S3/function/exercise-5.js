const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
  let suma = 0;
    for (const element of mixedElements) {
        
        if(typeof element == "number"){

           //console.log(element);
           suma += element;

        }else{

          //console.log(element);
          suma += element.length;

        };
    }

    return suma;
}


console.log(averageWord(mixedElements));

