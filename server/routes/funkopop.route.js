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
router.get("/:id", async (req, res, next) => {
  try {
    const funkopops = await FunkoPop.findOne({where: {id:req.params.id}});
    res.send(funkopops);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
