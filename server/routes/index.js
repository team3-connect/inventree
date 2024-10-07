const express = require("express");
const router = express.Router();

// different model routers
router.use("/sauces", require("./sauces"));

router.use("/funkopops", require("./funkopop.route"));

module.exports = router;
