const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const app = express();
var port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("index");
});
