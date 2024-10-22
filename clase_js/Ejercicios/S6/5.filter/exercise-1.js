const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let agesGreaterThan18 = ages.filter(function(age){
    return age > 18;
});

console.log(agesGreaterThan18);