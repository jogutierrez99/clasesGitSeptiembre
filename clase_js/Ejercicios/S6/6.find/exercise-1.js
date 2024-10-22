const numbers = [32, 21, 63, 95, 100, 67, 43];
/*
let number100 = numbers.find(function(number){
    return number === 100;
});
*/

let number100 = numbers.find(number => number === 100);

console.log(number100);