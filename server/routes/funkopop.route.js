const express = require("express");
const router = express.Router();
const { FunkoPop } = require("../models");
const { funkopops } = require("../seedData");
const { where } = require("sequelize");

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
    const funkopops = await FunkoPop.findOne({ where: { id: req.params.id } });
    res.send(funkopops);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newFunko = await FunkoPop.create({
      name,
      description,
      price,
      category,
      image,
    });
    res.status(201).json(newFunko);
  } catch (err) {
    res.status(500).json({ error: "Failed to create item" });
  }
});

router.put('/:id', async (req, res, next) => {
  try{
    const updateFunko = await FunkoPop.update(req.body, { where: { id: req.params.id } })
    const funkopops = await FunkoPop.findAll()
    console.log(`**from .route file, PUT: ${updateFunko}`)
    res.send(funkopops)

  }catch(error){
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    await FunkoPop.destroy({
      where: {
        id: req.params.id
      }
    })

    const funkopops = await FunkoPop.findAll()
    res.send(funkopops)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
