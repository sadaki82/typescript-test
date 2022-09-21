import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  tag: String,
  flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" }],
});

const Tag = mongoose.model("Tag", TagSchema);

module.exports = Tag;
