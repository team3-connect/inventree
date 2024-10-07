const express = require("express");
const router = express.Router();
const { FunkoPop } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const funkopops = await FunkoPop.findAll();
    res.send(funkopops);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
