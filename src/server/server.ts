import express from "express";
const foodRouter = require("../routes/routes");
const app = express();

app.use(foodRouter);

const setupServer = () => {
  app.use(foodRouter);
  return app;
};

module.exports = { setupServer };
