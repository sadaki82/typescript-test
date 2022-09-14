const PORT = process.env.PORT || 8000;
import express from "express";
const app = express();
require("dotenv").config();

// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
app.use(bodyParser.json()); // application/json

// const cors = require("cors");
import cors from "cors";
app.use(cors());

const mongoose = require("mongoose");
const Router = require("../routes/routes");

app.use(Router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("データ接続成功"))
  .catch((err: string) => console.log(err));

(async () => {
  try {
    console.log("Running migrations...");
    app.listen(PORT, () => {
      console.log(`server is listening @ http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();
