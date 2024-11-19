function sayHi(nameUser){
    console.log("Hola " + nameUser);
}
function sayBye(nameUser) {
    console.log("Adeu " + nameUser);
}

//module.exports = sayHi;
module.exports = {sayHi, sayBye};