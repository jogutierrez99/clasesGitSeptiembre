const Users = require("../models/user.model");

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

module.exports = {addUser, getUsers};