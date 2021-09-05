const express = require("express");
const router = express.Router();
const Cat = require("../models/Categories");

router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const cat = new Cat({
    title: req.body.title,
    body: req.body.body,
  });
  try {
    const savedCat = await cat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:catId", async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.catId);
    res.json(cat);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:catId", async (req, res) => {
  try {
    const deletedCat = await Cat.deleteOne({ _id: req.params.catId });
    res.json(deletedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
