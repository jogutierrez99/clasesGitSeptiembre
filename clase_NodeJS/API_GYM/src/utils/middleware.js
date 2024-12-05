const jwt = require("jsonwebtoken");
const {selectById} = require("../api/models/client.model");

//req.authorization

//Validar el token y el rol

const checkToken = async (req, res, next) => {
    //Validar que el token que me envias es correcto
    if(!req.headers["authorization"]){
        return res.json({msg:"Debe incluir el token"});
    }

    const token = req.headers["authorization"];
    //bearer 
    console.log(token);

    let data
    try {
        const tokenVe = token.split(" ")[1];
        data = jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
    } catch (error) {

        return res.json({msg:"token incorrecto"});
        
    }

    //buscar en la BD el token del usuario

    const user = await selectById(data.user_id);
    
    if(user.length === 0){
        return res.json({msg:"El usuario no existe"});
    }

    //envio los datos del usuario al controlador
    req.user = user[0];

    next();


};

const checkAdmin = async (role) => {
    
    if(role !== 'a'){
        return res.status(403).json({msg:"Debes ser admin para usar esta ruta"});
    }

    return true;

};


//Crear una funcion checkTokenAdmin --> validar Token y ademas validar el rol del usuario
//Rol debe ser Admin user[0].role !== "a" --> 
//return res.status(403).json({msg:"Debes ser admin para usar esta ruta"});

module.exports = {checkToken, checkAdmin};