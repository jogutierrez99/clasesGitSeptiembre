const bcrypt = require("bcryptjs");
const Users = require("../models/user.model");
const {createToken} = require("../../utils/jwt");
const router = require("../routers/routes");

const addUser = async (req,res)=>{

    try {

        const data = req.body;
        const newUser = new Users(data);
        const createdUser = await newUser.save();
        return res.json({message:"Usuario creado", data: createdUser});

    } catch (error) {
        console.log(error);
    }
};

const getUsers = async (req, res) =>{
    try {

        const listUsers = await Users.find();
        return res.json({succes:true, list:listUsers});
        
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res)=>{
    const id = req.params.id;
    const user = req.body;

    try {
        //lo que buscas, los datos nuevos, devuelve el actualizado
        const newUser = await Users.findByIdAndUpdate(id, user, {new:true});
        return res.json(newUser);

    } catch (error) {
        
    }

}

const deleteUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const deleteUser = await Users.findByIdAndDelete(id);
        return res.json({message:"Usuario eliminado", deleteUser});

    } catch (error) {
        
    }
}

const register = async (req,res) =>{

    try {
        //recibo los datos
        const newUser = req.body;

        //Valido si el usuario ya existe en la BD

        const userDB = await Users.find({email: newUser.email})
        //Si existe envio error de respuesta
        if(userDB.length !== 0){
            return res.json({msg:"el email ya existe"});
        }

        //Si no existe --> Encripto la contraseña y lo añado
        newUser.password = await bcrypt.hash(newUser.password, 10);

        const user = await Users.create(newUser);

        return res.json({msg:"Usuario creado", user});
       /* const user = new Users(newUser);
        const createdUser = await user.save()*/
        
        /*return res.json({msg:"Usuario creado", createdUser});*/

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) =>{

    try {

        //recibo los datos

        const {email , password} = req.body;

        //verificar que el email existe ---> findOne

        const userDB = await Users.findOne({email})

        if(!userDB){
            return res.json({msg: "El correo no existe"});
        }

        //comparar la contraseña del usuario con la password de la BD  -- bycrypt.compare()

        const same = await bcrypt.compare(password, userDB.password);
        //devuelve true o false si coinciden o no

        if(!same){
            //si no coinciden las contraseñas envio mensaje de error
            return res.json("La contraseña es incorrecta");
        }
    
        // si coinciden creo el token

//const token = createToken(userDB);
       return res.json({
            mesg: "login exitoso",
            token: createToken(userDB)
        })
        
    } catch (error) {

        console.log(error)
        
    }

}

//perfil de usuario

const getProfile = async (req, res) => {
    //req.user
    // busco en la bd la info que me interesa de ese usuario

    const dataUser = await Users.find({email:req.user.email});
    return res.json(dataUser);

};


const registerUpload = async (req, res) => {
    
    const newUser = new Users(req.body);

    if(req.file.path){
        newUser.image = req.file.path;
    }

    const createdUser = await newUser.save();

    return res.json(createdUser);

}



module.exports = {addUser, getUsers, updateUser, deleteUser, register, login, getProfile, registerUpload};