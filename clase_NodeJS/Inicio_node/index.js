//Importamos los modulos
//const obj = require("./mic");

//Se puede usar el destructuring
const {sayHi, sayBye} = require("./mic");

console.log("Holaa mundo");

const name = "Joshua";

if(name !== "Ana"){
    console.log("Eres bienvenido");
}

console.log("Otra cosa");

console.log("Otra pepe");

console.log("Otra chaval");



//obj.sayHi(name);
sayHi(name);


/*Modulos basicos de NodeJS

FS --> gestion de ficheros,

http --> creacion de servidores y gestion de peticioneshttp

path --> tratamiento de rutas o directores

os --> informacion del sistema operativo

events --> creacion de eventos perzonalizados

url --> formato de urls

*/