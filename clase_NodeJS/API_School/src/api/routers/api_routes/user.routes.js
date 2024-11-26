const express = require("express");
const router = express.Router();
const {addUser, getUsers, updateUser, deleteUser, register, login} = require("../../controllers/user.controllers");

router.post("/add", addUser);
router.get("/getUsers", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/register", register)

router.post("/login", login)

module.exports = router;


/* /users/add */