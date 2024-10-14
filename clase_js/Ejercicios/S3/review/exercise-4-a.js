const array1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const array2 = ['Caracol', 'hola', 'Salamandra', 'Ajolote'];

function findArrayIndex(arreglo, text) {

    return arreglo.indexOf(text);

}


console.log(findArrayIndex(array1, "Ajolote"));
console.log(findArrayIndex(array2, "hola"));