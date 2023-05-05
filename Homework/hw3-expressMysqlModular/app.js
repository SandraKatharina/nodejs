const db = require("./db");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("hello, hello");
});

app.get("/badway", function (req, res) {
  db.getFiveCitiesBad(res);
});

app.get("/goodway", function (req, res) {
  db.getFiveCities(function (cities) {
    res.json(cities);
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
