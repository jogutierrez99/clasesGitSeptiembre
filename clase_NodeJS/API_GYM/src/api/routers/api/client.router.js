const router = require("express").Router();
const { getAll, createClient, getByName, registerUser, login, deleteUser} = require("../../controllers/client.controllers");
const {checkToken} = require("../../../utils/middleware")

router.get("/", getAll);
router.post("/", createClient);
router.get("/getByName", getByName)

router.post("/register", registerUser)
router.post("/login", login)
router.delete("/delete/:id", checkToken, deleteUser); //Para eliminar cliente solo puede hacerlo un admin

module.exports = router;


//Para eliminar usuario llamamos a la funcion checkTokenAdmin
//Para ver perfil de usuario llamamos a la funcion checkToken
//En el controlador no seria necesario validar el role