const router = require("express").Router();
const {createClass, updateClass} = require("../../controllers/class.controllers");

router.post("/createClass", createClass);
router.put("/updateClass/:id", updateClass);
/*router.getAll("/", getAll);
router.delete("/", deleteClass);*/

module.exports = router;