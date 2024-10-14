const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
    let suma = 0;
    for (let number of param) {
        suma += number;
    }

    return suma;
}

console.log(sumAll(numbers));

