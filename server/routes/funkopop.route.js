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

router.put("/:id", async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const updatedFunko = await FunkoPop.update(
      { name, description, price, category, image },
      { where: { id: req.params.id } }
    );
    res.json(updatedFunko);
  } catch (err) {
    res.status(500).json({ error: "Failed to update item" });
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     await FunkoPop.destroy({ where: { id: req.params.id } });
//     res.status(204);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete item" });
//   }
// });
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
