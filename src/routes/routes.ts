const express = require("express");
const app = express();
const userController = require("../controllers/user");
const flashcardController = require("../controllers/flashcard");
const userstocardsController = require("../controllers/users_to_cards");
const tagsController = require("../controllers/tag");

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUser);
app.get("/api/usersuid/:uid", userController.getUserByUid);
app.post("/api/users", userController.postUser);
app.patch("/api/users/:uid", userController.patchUserByUid);
app.delete("/api/users/:id", userController.deleteUser);

app.get("/api/flashcards", flashcardController.getFlashcards);
app.get("/api/flashcards/:id", flashcardController.getFlashcard);
app.get("/api/flashcardsby/:uid", flashcardController.getFlashcardByCreate);
app.post("/api/flashcards", flashcardController.postFlashcard);
app.patch("/api/flashcards/:id", flashcardController.patchFlashcard);
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

app.get("/api/tags", tagsController.getTags);
app.get("/api/tags/:id", tagsController.getTag);
app.post("/api/tags", tagsController.postTags);
app.patch("/api/tags/:id", tagsController.patchTag);
app.delete("/api/tags/:id", tagsController.deleteTag);

module.exports = app;
