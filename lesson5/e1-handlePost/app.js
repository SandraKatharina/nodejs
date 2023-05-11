const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  console.log("YAY !");
  res.json({
    status: "OK",
    message: "Hello, hello",
  });
});

app.post("/", function (req, res) {
  console.log("YAY, its a post");
  console.log(req.body);
  res.json({
    status: "Okay",
    message: "hello there",
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
