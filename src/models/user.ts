import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new mongoose.Schema({
  uuid: String,
  real_name: String,
  user_name: String,
  avatar_url: String,
  about_me: String,
  nationality: String,
  target_language: String,
  cards: {
    user_cards: [],
    user_favorite: [],
  },
  save_new_card_to_deck: Boolean, //bool? (graemes mistake)
  ui_language: String,
  dark_mode: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
