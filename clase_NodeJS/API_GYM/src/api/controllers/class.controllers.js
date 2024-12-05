const {insertClass, selectById, update} = require ("../models/class.model");

const createClass = async (req, res) => {
    
    try {
        const result = await insertClass(req.body);

        if(result === -1){
            return res.json({msg:"No se ha insertado ningun dato"});
        }

        const classData = await selectById(result);
        return res.json({ data: classData });

    } catch (err) {
        console.log(err);
    }
}

const updateClass = async (req, res) => {

    try {
        const {date, name} = req.body;
        const idclass = req.param.id;
        const result = await update(idclass, date, name);

        if(result === -1){
            return res.json({msg:"No actualizado"})
        }

        const classData = await selectById(result);
        return res.json({data:classData})

    } catch (error) {
        
    }

    
    
}


module.exports = { createClass, updateClass }