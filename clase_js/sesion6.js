//Objetos avanzados
//Reducir propiedades

let person1 = {
    name: "Joshua",
    age: 28,
    isPretty: true, 
    sayHi: function(){
        alert("hola me llamo " + this.name);
    },

    changeName: function(newName){
        this.name = newName;
    }

};

person.changeName("Pedro");
//console.log(person.name);
//person.sayHi();

//Arrow function

function f1(){

};

const f2 = function(){


}
//arrow
const f3 = () => {
    console.log("Holaa");
}

f3();

const f4 = (parametro1) =>{
    console.log(parametro1);
}

f4("Klk");

const isGreaterThan5 = n =>{
    return n > 5;
}

console.log(isGreaterThan5(3));


const isGreaterThan6 = n => n > 6;


console.log(isGreaterThan6(3));

//Sintaxis avanzada


let person = {
    name: "Joshua",
    age: 28,
    isPretty: true,
};

//Por si quieres llevarlas a variables

let {name:personName, age, isPretty} = person;

console.log(personName, age, isPretty);

let names = ["Maria" , "Pedro", "Joshua"];

//Llevarlas a variables distintas

//let name1 = names[0];

let [name1,name2,name3] = names;

console.log(name1,name2,name3);


//Pasar parametros ilimitados
function sum(...nums){
    
    let sum = 0;

    for (const n of nums) {
        sum+=n;
    }

    return sum;
};


console.log(sum(2,3,4,5,6));

//Azucar sintactico
let names2 = ["Maria" , "Pedro", "Joshua", "Carol"];

let namesCopy = [...names2];

console.log(namesCopy);



