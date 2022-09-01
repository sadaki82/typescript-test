const PORT = process.env.PORT || 8000;
// const { setupServer } = require("./server");
// const app = setupServer();
const express = require("express");
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
  .catch((err) => console.log(err));

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

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
