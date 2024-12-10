const express = require("express");
require("dotenv").config(); //Configurar al server para que pueda usar variables de entorno
const router = require("./src/api/routers/api.router")

const server = express();
server.use(express.json());
//const port = 3500;
const PORT = process.env.PORT
//config de la rutas
server.use("/", router);

server.listen( PORT , ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

module.exports = server;