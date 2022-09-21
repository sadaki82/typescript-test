import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  tag: String,
  flashcards: [],
});

const Tag = mongoose.model("Tag", TagSchema);

module.exports = Tag;
