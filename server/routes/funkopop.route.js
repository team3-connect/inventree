const express = require("express");
const router = express.Router();
const { FunkoPop } = require("../models");
const { funkopops } = require("../seedData");

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
    const funkopop = await FunkoPop.findByPk(req.params.id);
    res.send(funkopop);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newFunkoPop = await FunkoPop.create(req.body);
    res.json(newFunkoPop);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
