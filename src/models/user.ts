import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new mongoose.Schema({
  user_name: String,
  user_email: String,
  user_password: String,
  user_avatar: String,
  target_language: String,
  cards: {
    user_cards: [],
    user_favorite: [],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
