import mongoose, { Schema, Document } from "mongoose";

// export interface IFood extends Document {
//   name: string;
// }

const FoodSchema: Schema = new mongoose.Schema({
  name: String,
  category: String,
  distributor: String,
  url: String,
  price: String,
  evaluation: String,
  material: String,
  nutrition: String,
  description: String,
  img: String,
  imgfilename: String,
  cards: { user_cards: Array, user_favarite: Array },
});

// const Food = mongoose.model("Food", FoodSchema);

// module.exports = Food;

// const Food = mongoose.model<IFood>("Food", FoodSchema);

// module.exports = Food;

// const mongoose = require("mongoose");

// const FoodSchema = new mongoose.Schema({
//   id: Number,
//   name: {
//     type: String,
//     required: true,
//   },
//   category: String,
//   distributor: String,z
//   url: String,
//   price: String,
//   evaluation: String,
//   material: String,
//   nutrition: String,
//   description: String,
//   img: String,
//   imgfilename: String,
//   cards: { user_cards: Array, user_favarite: Array },
//   // calories: {
//   //   type: Number,
//   //   default: 0,
//   //   validate(value) {
//   //     if (value < 0) throw new Error("マイナス");
//   //   },
//   // },
// });

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
