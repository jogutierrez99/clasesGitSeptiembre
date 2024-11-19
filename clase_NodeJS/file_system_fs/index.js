//Imports
const fs = require("fs");
const http = require("http");
const express = reuire("express");

fs.writeFileSync("mensaje.txt", "Hola soy joshua");

/*
//Sobreescribe
fs.writeFile("mensaje.txt", "sgundo mensaje", (err)=>{
    if(err){
        console.log(err);
    }

    console.log("Escribiendo en el archivo");
})
//const texto = fs.readFileSync("mensaje.txt", "utf-8");
//console.log(texto);

//leerarchivo

//devuelve el mensaje del archivo
*/

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/leerarchivo"){
        const texto = fs.readFileSync("mensaje.txt", "utf-8");
        res.end(texto);
    }else if(url === "/characters"){
        res.end("Listado de personajes");
    }else{
        res.end("No esta definida esta ruta: " + url);
    }
});

const port = 3500

server.listen(port, ()=>{
    console.log("Servidor ejecutando en http://localhost:" + port);
});

//postman
