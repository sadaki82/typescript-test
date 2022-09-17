const express = require("express");
const app = express();
const userController = require("../controllers/user");
const flashcardController = require("../controllers/flashcard");
const userstocardsController = require("../controllers/users_to_cards");

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUser);
app.post("/api/users", userController.postUser);
app.patch("/api/users/:id", userController.patchUser);
app.delete("/api/users/:id", userController.deleteUser);

app.get("/api/flashcards", flashcardController.getFlashcards);
app.get("/api/flashcards/:id", flashcardController.getFlashcard);
app.post("/api/flashcards", flashcardController.postFlashcard);
app.patch("/api/flashcards/:id", flashcardController.patcFlashcard);
app.delete("/api/flashcards/:id", flashcardController.deleteFlashcard);

app.get("/api/userstocards", userstocardsController.getUsersToCards);
app.patch("/api/userstocards/:id", userstocardsController.patchUserToCardById);
app.patch("/api/userstocards/", userstocardsController.patchUserToCard);
// app.patch("/api/userstocardsuid/:uid", userstocardsController.patchUserToCardByUid);
app.post("/api/userstocards", userstocardsController.postUsersToCards);
app.delete("/api/userstocards/:id", userstocardsController.deleteUsersToCards);

app.get("/api/cardflashjoin/:id", userstocardsController.getCardSchedule);
app.get(
  "/api/cardflashjoinuid/:uid",
  userstocardsController.getCardScheduleByUid
);

module.exports = app;
