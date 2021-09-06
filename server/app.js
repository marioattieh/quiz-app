const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const catRoute = require("./routes/Categories");
const quizRoute = require("./routes/Quizzes");

app.use(cors());
app.use(bodyParser.json());

app.use("/Categories", catRoute);
app.use("/Quizzes", quizRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, () => {
  console.log("Hola");
});

app.listen(5000);
