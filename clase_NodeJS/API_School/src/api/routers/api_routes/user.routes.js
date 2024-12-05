const express = require("express");
const router = express.Router();
const {addUser, getUsers, updateUser, deleteUser, register, login, getProfile, registerUpload} = require("../../controllers/user.controllers");

const {checkToken} = require("../../middleware/auth");
const upload = require("../../middleware/upload.file");

router.post("/add", addUser);
router.get("/getUsers", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/register", register)
router.post("/login", login)

//rutas privadas
router.get("/profile", checkToken, getProfile);
router.post("/uploadFile", upload.single("image"), registerUpload);

//router.get("/profile", middle, getProfile);

//router.post("/guardarProyecto", middleGuardarFoto, guardarProyecto)
//perfil de usuario
//nube cloudinary

module.exports = router;


/* /users/add */