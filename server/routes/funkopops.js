const express = require("express");
const router = express.Router();
const { Funkos } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const funko = await Funkos.findAll();
    res.send(funko);
  } catch (error) {
    next(error);
  }
});

module.exports = router;