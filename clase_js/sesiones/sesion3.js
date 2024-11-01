/*let msg;
let color = "red";

if(color === "red"){
    msg = "ROjo";
}else{
    msg = "Verde mensaje"
}

console.log(msg);*/

/*
let color = "red";

let msg = color === "red" ? "Rojo mensaje" : "Verde mensaje"
*/

// if ternario
/*
let isError = true;

let msg = (isError ? "Error : " : "Info: ") + " Contenido del mensaje";
console.log(msg);
*/

//funciones

function writeMsg(msg){
    console.log("Mensaje loco: " + msg);
}



//parametros
// Parametros opcionales
function sumaNumeros(a = 0, b = 0){
    //console.log(a + b);
    let result = a + b;
    return result;
}

let suma = sumaNumeros(2,2);

console.log("la suma es: " + suma);

writeMsg(suma);


let miFuncion = function( a, b){
    return a + b;
};

miFuncion(5, 10);



function media(numbers){
    for (const number of numbers) {
        
    }
}


media([10,5,3]);
