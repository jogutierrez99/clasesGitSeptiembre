// Bucles for y foreach

for (let i = 0; i < 10; i++) {
    //console.log(i);
}

//let i = 0;

/*
while (i<10) { 
    console.log(i);
    i++
}

let number;

while (isNaN(number)) {

    number =prompt("Dime un numero");
    console.log("Has escrito " + number);
    number = parseInt(number);
}

console.log("El numero es: " + number);*/

let names = ["Joshua", "Pedro", "Ana", "Julia"];


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for(let name of names){
    console.log(name);
}

names.forEach(nombres => {
    console.log(nombres);
});

let person ={
    name: "Joshua",
    age: 25
};

for(let key in person){
    console.log(key + ": " + person[key]);
};