const express = require("express");
const app = express();
const userController = require("../controllers/user");
const flashcardController = require("../controllers/flashcard");

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUser);
app.post("/api/users", userController.postUser);
app.delete("/api/users/:id", userController.deleteUser);

app.get("/api/flashcards", flashcardController.getFlashcards);
app.get("/api/flashcards/:id", flashcardController.getFlashcard);
app.post("/api/flashcards", flashcardController.postFlashcard);
app.delete("/api/flashcards/:id", flashcardController.deleteFlashcard);

module.exports = app;
