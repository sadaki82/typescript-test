const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: String,
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
