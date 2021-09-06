const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  length: {
    type: Number,
    required: true,
  },
  parentId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("quiz", QuizSchema);
