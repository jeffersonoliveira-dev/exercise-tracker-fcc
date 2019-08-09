const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  api = require("./routes/api/exercise.js"),
  keys = require("./db/Keys.js");
mongoose = require("mongoose");

mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("mongodb connected");
});

const app = express();
let port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const server = app.listen(port, () => {
  console.log("Listening on port " + port);
});
