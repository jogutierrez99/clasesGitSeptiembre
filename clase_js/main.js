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


let personName = "Hola hector";

console.log(`${personName}`);