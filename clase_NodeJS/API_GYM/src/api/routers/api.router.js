const router = require("express").Router();

router.use("/client", require("../routers/api/client.router"));
router.use("/class", require("../routers/api/class.router"))

module.exports = router