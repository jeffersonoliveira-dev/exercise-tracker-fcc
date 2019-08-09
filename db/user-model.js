const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = "./exercise-model";

const userSchema = new Schema({
  username: String,
  count: Number,
  log: [Exercise]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
