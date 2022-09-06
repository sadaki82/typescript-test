import mongoose, { Schema, Document } from "mongoose";

const UserSchema: Schema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
