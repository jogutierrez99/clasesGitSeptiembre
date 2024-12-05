const {selectAll, insertClient, selectById, selectByName, selectByEmail, deleteClient} = require("../models/client.model")
const bycrypt = require("bcrypt");
const {createToken} = require("../../utils/jwt");
const {checkAdmin} = require("../../utils/middleware");

const getAll = async (req, res)=>{
    try {
        const result = await selectAll();
        return res.status(200).json(result);
    } catch (error) {
        console.log(err);
    }
}

const createClient = async (req, res)=>{
    try {
        //req.body
        const result = await insertClient(req.body);
        //insertClient(req.body)

        if(result === -1){
            return res.status(400).json({msg:"No se ha insertado ningun dato"});
        }

        //select * from client where idClient = result
        const clienteData = await selectById(result);
        return res.status(201).json({ data: clienteData });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "error del servidor", error: error});
    }
}

const getByName = async (req, res) => {

    try {
        const{name} = req.query;
        const data = await selectByName(name);

        if(data.length === 0){
            return res.status(404).json({msg:"No existe el usuario"});
        }

        return res.status(200).json(data);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const registerUser = async (req,res) => {

    try {

        const data = req.body;
        const selectedEmail = await selectByEmail(data.email);

        if(selectedEmail.length !==0) {
            return res.status(400).json({msg:"El email ya existe"});
        }
        //console.log(selectedEmail);

        //guardamos en el obj la contraseña encriptada
        const passwordHashed = await bycrypt.hash(data.password, 10);
        data.password = passwordHashed;
        console.log(data.password)
        const insertedClient = await insertClient(data); // id del cliente creado

        if(insertedClient === -1){
            return res.status(400).json({msg:"No se realizo el insert"});
        }

        const clientCreated = await selectById(insertedClient);
        return res.status(201).json({success:true, data: clientCreated});
        
    } catch (error) {

        return res.status(500).json(error);
        
    }
    
}

const login = async (req, res) => {
    
    try {
        
        const {email, password} = req.body;

        //Buscamos el usuario entero con el email
        const emailSelected = await selectByEmail(email);

        if(emailSelected.length === 0) {
            return res.status(404).json({msg:"El email no existe"});
        }

        const same = await bycrypt.compare(password, emailSelected[0].password);

        if(!same){
            return res.status(400).json({msg:"contraseña incorrecta"});
        }

        return res.status(200).json({
            toke: createToken(emailSelected[0]),
            msg:"Login OK"
        })


    } catch (error) {
        return res.status(500).json(error);
    }

}

const deleteUser = async (req, res) => {
    
    try {

        if(checkAdmin(req.user.role)){

            const result = await deleteClient(req.params.id);

            console.log("Error del resul"+result)
            if(result.affectedRows === 0){
                return res.status(400).json({msg:"No pudo eliminarse"});
            }

            return res.status(200).json({msg:"Eliminado con exito"});

        }

        
    } catch (error) {
        return res.status(500).json(error);
    }


}


module.exports={ getAll, createClient, getByName, registerUser, login, deleteUser }