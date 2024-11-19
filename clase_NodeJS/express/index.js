//Imports
const express = require("express");

//Crear server con express
const server = express();

//Configurar server
server.use(express.json());

//Indicar el puerto para ejecutar el server
const port = 4000;
server.listen(port, () =>{
    console.log(`Servidor corriendo por el puerto: http://localhost:${port}`);
});


//rutas del servidor
/*
CRUD
Metodos:
    post --> Create --> Enviar datos al servidor, registrar, login, heacer compra.
    get --> Read --> devolver o consultar datos, listados, detalles, filtros (BBDD).
    Put --> Update --> Editar datos que ya existen, editar perfil de usuario, modificar cantidad de un carrito de compra.
    delete --> Delete --> Eliminar o borrar datos, eliminar una cuenta, eliminar contactos, eliminar un post(de alguna red social).
*/

const products = [
    {name: "pantalon", price:30},
    {name: "falda", price:45},
    {name: "camiseta", price:30}
];

const users = [];

//Creamos Modulos y cada una de sus rutas:
const routerProduct = express.Router();
const routerUser = express.Router();

//Listar todos los productos
routerProduct.get("/listproduct", (req, res)=>{
    //Buscar en un fichero.
    //Buscar en la BBDD, buscar en un array.


    //Devolver una respuesta --> json, pdf, html.
    console.log("Ruta de listado de productos");
    res.json(products);
});


routerUser.get("/listusers", (req, res)=>{
    console.log("Ruta de listado de usuarios");
    res.json(users);
});

//Mostrar los productos con precio mayor a 40
routerProduct.get("/productprice", (req, res)=>{

    const filterProduct = products.filter((item)=> item.price > 40);

    res.json(filterProduct);
});


routerProduct.post("/addproduct", (req,res)=>{
    //body --> grandes volumenes de datos, añadir un registro nuevo, cuando hay datos sensibles
    //Recibimos los datos -- en este caso recibimos un json
    const newProduct = req.body; //{"name": "xxxx", "price":80}
    //Guardamos los datos --> array
    products.push(newProduct);
    //Devolver una respuesta --> json, pdf, html.
    res.json({
        success:true, 
        message:"Producto agregado con exito", 
        data: products
    });
});


routerUser.post("/adduser", (req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({
        success:true, 
        message:"Usuario agregado con exito", 
        data: users
    });
});

/*
Parametros para mandar informacion al servidor
1 - Body --> body params.
2 - url params --> ids, filtrado.
3 - query params --> filtro, ordenamiento, paginacion.
4 - authorization params --> token de autenticacion --> 
*/


routerProduct.get("/listproduct/:data", (req,res)=>{
    console.log(req.params);
    const info = req.params.data;
    // const {data} = req.params
    const filterProduct = products.filter((item)=> item.name === info);
    res.json(filterProduct)
});

//Añadir el modulo al server
server.use("/product", routerProduct);
server.use("/user", routerUser);

///Ejercicio 
/*
Crear un modulo: usuarios -->
configurar al server para utilizar usuarios
crear array vacio de usuarios
rutas:
endpoint para añadir un usuario
endpoint para mostrar usuarios
*/