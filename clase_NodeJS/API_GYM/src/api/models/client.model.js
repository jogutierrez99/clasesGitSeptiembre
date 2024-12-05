const pool = require("../../utils/db");

const selectAll = async () => {   
    const result = await pool.query("SELECT * FROM client");
    return result[0];
}

const insertClient = async ({name, lastname, email, age, dni, password}) => {

    const [result] = await pool.query("INSERT INTO client (name, lastname, email, age, dni, password) VALUE(?,?,?,?,?,?)", 
        [name, lastname, email, age, dni, password]
    );
    if(result.affectedRows === 0){
        return -1;
    }

    return result.insertId;
}

const selectById = async (id) => {
    
    const result = await pool.query("SELECT * FROM client where idClient =?", [id]);
    console.log(result);
    return result[0];
}

const selectByName = async (name) => {
    
    const result = await pool.query("SELECT * FROM client where name =?", [name]);
    console.log(result);
    return result[0];
}

const selectByEmail = async (email) => {
    
    const result = await pool.query("SELECT * FROM client where email =?", [email]);
    console.log(result);
    return result[0];
}

const deleteClient = async (id) => {
    try {
        const [result] = await pool.query("DELETE FROM client where idclient=?",[id]);
        return result;
    } catch (error) {
        
    }
}

module.exports = {selectAll, insertClient, selectById, selectByName, selectByEmail, deleteClient}