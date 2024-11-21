const express = require("express");
const router = express.Router();
const {addUser, getUsers} = require("../controllers/user.controllers");

router.post("/add", addUser);
router.get("/getUsers", getUsers);

module.exports = router;