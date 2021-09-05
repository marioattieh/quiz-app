const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const app = express();

const catRoute = require("./routes/Categories");

app.use(bodyParser.json());

app.use("/Categories", catRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

mongoose.connect(process.env.DB_CONN, () => {
  console.log("Hola");
});

app.listen(5000);
