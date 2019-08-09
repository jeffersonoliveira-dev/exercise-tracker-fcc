const express = require("express");
const router = express.Router();
const User = require("../../db/user-model");

router.get("/", (req, res) => {
  console.log(req.query);
  User.findById(req.query.userId, (err, user) => {
    res.send(user);
  });
});

module.exports = router;
