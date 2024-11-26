const express = require("express");
const router = express.Router();
const { add, updateCurso, deleteCurso, getByName, addUser, getAll, updateUser, getAllName } = require("../../controllers/curso.controller");

router.post("/add", add);
router.put("/update/:id", updateCurso)
router.delete("/delete/:id", deleteCurso)
router.get("/getByName", getByName)
router.put("/addUser/:idC/:idU", addUser)
//router.get("/getUsers", getUsers);
router.get("/getAll", getAll)
router.put("/updateUser", updateUser )
router.get("/get", getAllName)

module.exports = router;
