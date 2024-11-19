const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/"){
        res.end("Estoy en el home");
    }else if(url === "/characters"){
        res.end("Listado de personajes");
    }else{
        res.end("No esta definida esta ruta: " + url);
    }
});

server.listen(3000, ()=>{
    console.log("Servidor ejecutando en http://localhost:3000");
});