const db = require("./services/db");

const express = require("express");
const cors = require("cors");
const app = express();

const port = 4000;
app.use(cors());

app.get("/", function (req, res) {
  res.send("hallo, hallo");
});

app.get("/getCitiesOfTheWorld", function (req, res) {
  let limit = req.query.limit;
  if (limit <= 0 || !limit) {
    limit = 20;
  }

  let offset = req.query.offset;
  if (offset <= 0 || !offset) {
    offset = 0;
  }
  db.getCitiesWithLimitAndOffset(limit, offset, function (result) {
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
