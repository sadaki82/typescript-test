const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
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
  // calories: {
  //   type: Number,
  //   default: 0,
  //   validate(value) {
  //     if (value < 0) throw new Error("マイナス");
  //   },
  // },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
