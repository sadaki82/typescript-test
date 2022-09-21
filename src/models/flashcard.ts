import mongoose from "mongoose";
// const moment = require("moment-timezone");
// const dateTokyo = moment.tz(Date.now(), "ASIA/Tokyo");

const FlashcardSchema = new mongoose.Schema({
  target_word: String,
  example_sentence: String,
  reading: String,
  card_language: String,
  Eng_meaning: [],
  created_by: String,
  created_timestamp: String, //string
  picture_url: String,
  flagged_inappropriate: Boolean,
  public: Boolean,
  haters: [],
  likers: [],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  flagging_users: [],
});

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports = Flashcard;
