let apellidos = "Gutierrez Zerpa";
let nombre = "Joshua";

let edad = 25;
let peso = 110.5;

let adulto = true;
let guapo = false;

let var1 = null;
let var2;

/*para saber el tipo de variable*/

console.log(typeof peso);

let saludo = "hola";

saludo = 33;

console.log(saludo);

/* let edad = "33";
let edadNumber = parseInt(edad);
/*console.log(typeof edad);
console.log(typeof edadNumber);
console.log(edadNumber);

let nombreConPatatas = "";



let tartas = 20;
let numeroPersonas = 4;

console.log(tartas / numeroPersonas);

console.log(tartas % numeroPersonas);


let i = 0;

console.log(i);

i++;

i += 1;

console.log(i);


console.log(i++);

console.log(i);

i--;

console.log(i);*/

/*
let nombre = "joshua";
let apellido = "Guti";

console.log("Hola " + nombre + " " + apellido);

let suma1 = 10 + 5;

console.log(suma1);

let suma2 = 10 + "5";
console.log(suma2);
*/
/*
const EDAD_ADULTO = 18;

console.log(EDAD_ADULTO);
*/

/*
let edad = 18;

// si mayor de edad, preguntar que quiere beber
// si menor de edad, echar deñ bar

if(edad >= 18){
    console.log("Que quieres beber")
}else{
    console.log("Solo para adultos")
}

// operadores de comparacion > < >= <= == === != !===

let username = "paco";
if(username == "paco"){
    console.log("nombre bonito")
}else{
    console.log("Nombre aburrido")
}
// == compara el valor -- === compara el valor y el tipo de variable
if(18 === "18"){
    console.log("iguales");
}else{
    console.log("no son iguales");
}

let isEqual = "18" === "18";

if(isEqual){
    console.log("real");
}*/

/*
let username = "paco";

// let dentro del scopre ---> var dentro del hambito global
if(true){

    console.log(username);
    var lastname = "guti";
    console.log(lastname);

}

console.log(lastname);
*/


//Operadores logicos && u ||

/*
let age = 18;

let isPretty = false;

if(age >= 18 && isPretty){
    console.log("Que cubata quieres");
}*/

//condicionales
let age = 14;

if(age >= 18){
    console.log("adulto");
}else if(age >= 15){
    console.log("adolescente");
}else{
    console.log("Niño");
}


let fruit = "manzana";

switch (fruit) {
    case "platano":
        console.log("Que rico platano")
        break;

        case "manzana":
            console.log("Que rica manzana")
            break;

    default:
        console.log("No hay fruta");
        break;
}
