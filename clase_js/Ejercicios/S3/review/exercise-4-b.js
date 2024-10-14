const array1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const array2 = ['Caracol', 'hola', 'Salamandra', 'Ajolote'];

function findArrayIndex(arreglo, text) {

    if(arreglo.indexOf(text) == -1){
         return "El texto no existe"
    }else{
        return arreglo.indexOf(text)
    }

    

}

function removeItem(arreglo, text){

    if(arreglo.indexOf(text) == -1){
        return "El texto no existe"
   }else{
    let position = findArrayIndex(arreglo, text);
    arreglo.splice(position, 1);
    return arreglo
   }

   
}

console.log(removeItem(array1, "Ajolote"));
console.log(removeItem(array2, "hola"));