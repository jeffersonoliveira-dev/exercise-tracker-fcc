const express = require("express");
const router = express.Router();
const User = require("../../db/user-model");
const Exercise = require("../../db/exercise-model");
date: String;
const app = express();
const log = require("./log");
const moment = require("moment");

router.post("/exercise/new-user", (req, res) => {
  // create user + generate ID and return
  let newUser = new User();
  newUser.username = req.body.username;
  console.log(newUser);
  newUser.count = 0;
  newUser.save();
  res.send(newUser);
});
router.post("/exercise/add", (req, res) => {
  // check ID then alocate all the user data [ duration, description, date
  User.findById(req.body.userId, (err, user) => {
    console.log(user);
    let newExercise = new Exercise();
    newExercise.description = req.body.description;
    newExercise.duration = req.body.duration;
    let date = new Date(req.body.date);
    newExercise.date = moment(date).format("ddd MMM D Y");
    newExercise.save();
    user.log = [...user.log, newExercise];
    user.count = user.count + 1;
    user.save();
    res.send(newExercise);
  });
});

router.use("/exercise/log", log);

module.exports = router;
