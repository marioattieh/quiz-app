const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quizzes");

router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/p:pId", async (req, res) => {
  try {
    const quizzes = await Quiz.find({ parentId: req.params.pId });
    res.json(quizzes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const quiz = new Quiz({
    _id: req.body._id,
    title: req.body.title,
    body: req.body.body,
    length: req.body.length,
    parentId: req.body.parentId,
  });
  try {
    const savedQuiz = await quiz.save();
    res.json(savedQuiz);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:quizId", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    res.json(quiz);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:quizId", async (req, res) => {
  try {
    const deletedQuiz = await Quiz.deleteOne({ _id: req.params.quizId });
    res.json(deletedQuiz);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
