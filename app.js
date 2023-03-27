const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const e = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const secondName = req.body.secondName;
  const email = req.body.email;
  console.log(firstName, secondName, email);
});

app.listen(3000, function () {
  console.log("HELLO AMIGO");
});
