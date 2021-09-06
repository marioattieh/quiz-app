require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const catRoute = require("./routes/Categories");
const quizRoute = require("./routes/Quizzes");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/Categories", catRoute);
app.use("/Quizzes", quizRoute);

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, () => {
  console.log("DB connected");
});

app.listen(5000);
