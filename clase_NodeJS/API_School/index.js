const express = require("express");
require("dotenv").config(); //Configurar al server para que pueda usar variables de entorno
const connectDB = require("./src/utils/db_mongo");
const routes = require("./src/api/routers/routes");
const cloudinary = require("cloudinary").v2
connectDB();

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const server = express();
server.use(express.json());
//const port = 3500;
const PORT = process.env.PORT

server.use("/", routes);

server.listen( PORT , ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

