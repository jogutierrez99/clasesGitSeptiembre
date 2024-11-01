/*function sayHi(){
    console.log("Holaaaa");
}

setTimeout(sayHi, 3000);


setTimeout(function(){
    console.log("klk");
} , 3000);

let time= 0;
function countTime(){
    time++;
    console.log(time);

    if(time == 10){
        clearInterval(timer);
    }
}

let timer = setInterval(countTime, 100);

clearInterval();

let $div = document.querySelector("#timeDiv");
function update(){
    let date = new Date();
    let dateString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    $div.textContent = dateString;
}

update();*/

/*
function ok(user){
    console.log("El usuario " + user.name + " ha sido creado correctamente");
}*/

//callBacks
/*
function createUser(username, age, callback){
    setTimeout(function(){
        callback({name: username, age: age});
    }, 2000);
}
    
createUser("Antonio", 20, ok);

*/


//Promesas
/*
function ok(user){
    console.log("El usuario " + user.name + " ha sido creado correctamente");
}

function createUser(username, age, callback){

    return new Promise();
}

createUser("Antonio", 20).then(ok).catch;
*/

/*
try {
    console.log(username);
    let username = "Joshua";
} catch (e) {
    console.log(e);
    console.error("Eres mas tonto que ofu");
}

console.log("Holiiii");

*/

/*

function sumaPositivos(a,b) {
    if(a < 0 || b<0){
        throw "No son positivos";
    }

    return a+b
};

try {
    console.log(sumaPositivos(5,6));
} catch (e) {
    console.error("Errorrr")
}

console.log("Sigooo aqui");

*/


