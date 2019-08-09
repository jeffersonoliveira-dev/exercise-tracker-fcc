const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  description: String,
  duration: Number,
  _id: String,
  date: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
