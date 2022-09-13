const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  target_word: String,
  context: String,
  reading: String,
  english_definition: [],
  image: String,
  parts_of_speech: String,
});

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports = Flashcard;
