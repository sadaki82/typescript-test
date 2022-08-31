const express = require("express");
const app = express();

const setupServer = () => {
  app.use("/", (req, res) => {
    res.send("hello");
  });

  return app;
};

module.exports = { setupServer };
