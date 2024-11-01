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



var pilots = [ 
    { id: 2, name: "Wedge Antilles", faction: "Rebels"}, 
    { id: 22, name: "Dark Vader", faction: "Empire" },
    { id: 19, name: "Thanos", faction: "Empire" },
    { id: 66, name: "Thane Kyrell", faction: "Rebels"}];


   /* let idsArray = pilots.map(function (pilot){
        return idsArray.id;
    });

    console.log(idsArray);*/


    //ARRAY filter


    /*let rebelPilots = [];

    for (const pilot of pilots) {
        if(pilot.faction === "Rebels"){
            rebelPilots.push(pilot);
        }
    }*/
/*
    let rebelPilots = pilots.filter(function(pilot){
        return pilot.faction === "Rebels";
    });

    console.log(rebelPilots);*/

let rebelPilots = pilots.filter(pilot => pilot.faction === "Rebels");

const array1 = [1,2,3,4,5,12];

let numberFund = array1.find(function(n){
    return n > 10;
})

let numberFund2 = array1.find(n => n>10);

console.log(numberFund);
//Reduce
var pilots2 = [ 
	{ id: 10, name: "Poe Dameron", years: 14, }, 
	{ id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
	{ id: 41, name: "Tallissan Lintra", years: 16, }, 
	{ id: 99, name: "Ello Asty", years: 22, }
];

/*
let totalYears = pilots2.reduce(function(acc, pilot){
    return acc + pilot.years;
}, 0);*/

let totalYears = pilots2.reduce((acc , pilot) => acc + pilot.years, 0);

console.log(totalYears);


var personnel = [ 
	{ id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true, }, 
	{ id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false, }, 
	{ id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false, }, 
	{ id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, 
	isForceUser: true, }, 
	{ id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85, 
	isForceUser: true, }
];


//let personName = "Hola hector";

console.log(`${personName}`);