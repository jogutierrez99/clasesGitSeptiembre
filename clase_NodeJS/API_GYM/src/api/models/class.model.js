const pool = require("../../utils/db");

const insertClass = async ({date, name}) => {

    const [result] = await pool.query("INSERT INTO class (date, name) VALUE(?,?)", 
        [date, name]
    );

    if(result.affectedRows === 0){
        return -1;
    }

    return result.insertId;
}

const selectById = async (id) => {
    
    const result = await pool.query("SELECT * FROM class where idclass =?", [id]);
    console.log(result);
    return result[0];
}

const update = async (idclass, date, name) => {
    
    const [result] = await pool.query("UPDATE class SET date =?, name=? WHERE idclass=?", 
        [date, name, idclass]
    );

    if(result.affectedRows === 0){
        return -1;
    }

    return idclass;
}

module.exports = { insertClass, selectById, update }