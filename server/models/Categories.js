const mongoose = require("mongoose");

const CatSchema = mongoose.Schema({
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
  number: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("cats", CatSchema);
