import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const UserSchema = new mongoose.Schema({
//   uuid: String,
//   real_name: String,
//   user_name: String,
//   avatar_url: String,
//   about_me: String,
//   nationality: String,
//   target_language: String,
//   cards: {
//     user_cards: [],
//     user_favorite: [],
//   },
//   save_new_card_to_deck: String,
//   ui_language: String,
// });

// const User = mongoose.model("User", UserSchema);
// module.exports = User;

const UserToCardsSchema = new mongoose.Schema({
  uid: String,
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flashcard_id: { type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" },
  interval: Number,
  efactor: Number,
  repetition: Number,
  due_date: String,
  counter: Number,
});

// const UserToCardsSchema = new mongoose.Schema({
//   user_id: { type: "ObjectId", ref: "Users" },
// });

const User_To_Cards = mongoose.model("User_To_Cards", UserToCardsSchema);

module.exports = User_To_Cards;
