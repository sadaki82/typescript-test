const PORT = process.env.PORT || 8000;
import express, { Request, Response } from "express";

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // application/json
require("dotenv").config();

const mongoose = require("mongoose");
const foodRouter = require("../routes/routes");

app.use(foodRouter);

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
