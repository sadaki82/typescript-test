const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // application/json
require("dotenv").config();

const mongoose = require("mongoose");
const foodRouter = require("../routes/routes");

app.use(foodRouter);

mongoose
  .connect(
    "mongodb+srv://spark3xxx:p2lduhsq@cluster0.2sawy.mongodb.net/food?retryWrites=true&w=majority"
  )
  .then(() => console.log("データ接続成功"))
  .catch((err) => console.log(err));

const setupServer = () => {
  app.use("/", (req, res) => {
    res.send("hello");
  });
  // app.use(foodRouter);

  return app;
};

module.exports = { setupServer };
