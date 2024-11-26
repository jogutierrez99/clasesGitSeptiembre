const express = require("express");
require("dotenv").config(); //Configurar al server para que pueda usar variables de entorno
const connectDB = require("./src/utils/db_mongo");
const routes = require("./src/api/routers/routes");
connectDB();

const server = express();
server.use(express.json());
//const port = 3500;
const PORT = process.env.PORT

server.use("/", routes);

server.listen( PORT , ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

