import express from "express";
const app = express();
const foodController = require("../controllers/food");
const userController = require("../controllers/user");

app.get("/api/foods", foodController.getFoods);

app.get("/api/foods/:idOrName", foodController.getFood);

app.patch("/api/foods/:idOrName", foodController.patchFood);

app.delete("/api/foods/:idOrName", foodController.deleteFood);

app.post("/api/foods", foodController.postFood);

app.get("/api/users", userController.getUsers);

app.post("/api/users", userController.postUser);

module.exports = app;
