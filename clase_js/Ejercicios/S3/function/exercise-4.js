const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  // insert code
    let suma = 0;
    let media = 0;

    for (let i = 0; i < param.length; i++) {
        suma += param[i];
        media++;
    }

    return suma / media;

}

console.log(average(numbers));