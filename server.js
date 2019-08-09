const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  api = require("./routes/api/exercise");

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

app.use("/api", api);

app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    errCode = 400;
    const keys = Object.keys(err.errors);
    errMessage = err.errors[key[0]].message;
  } else {
    errcode = err.status || 500;
    errMessage = err.message || "Internal Server Error";
  }
  res
    .status(errCode)
    .type("txt")
    .send(errMessage);
});
