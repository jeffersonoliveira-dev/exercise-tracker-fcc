const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  description: String,
  duration: Number,
  date: String
});

const Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;
