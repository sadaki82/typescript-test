const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  target_word: String,
  example_sentence: String,
  reading: String,
  card_language: String,
  Eng_meaning: [],
  created_by: String,
  created_timestamp: String,
  picture_url: String,
  flagged_inappropriate: Boolean,
  public: Boolean,
  haters: [],
  likers: [],
  hashtags: [],
  flagging_users: [],
});

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports = Flashcard;
