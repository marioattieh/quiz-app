const express = require("express");
const router = express.Router();
const Cat = require("../models/Categories");

router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  const cat = new Cat({
    title: req.body.title,
    body: req.body.body,
  });
  cat
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
