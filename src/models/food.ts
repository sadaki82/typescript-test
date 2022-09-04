import IFood from "../interfaces/food";

import mongoose, { Schema } from "mongoose";

const FoodSchema: Schema = new mongoose.Schema({
  name: String,
});

// const Food = mongoose.model("Food", FoodSchema);

// module.exports = Food;

export default mongoose.model<IFood>("Food", FoodSchema);
