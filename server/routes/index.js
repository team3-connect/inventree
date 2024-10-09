const express = require("express");
const router = express.Router();

// different model routers
router.use("/funkopops", require("./funkopop.route"));

module.exports = router;
