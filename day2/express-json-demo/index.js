const express = require("express");
const app = express();

const port = 3000;

helloCount = 0;
machenCount = 0;
thankyouCount = 0;
greatCount = 0;
happyCount = 0;

app.get("/hello", function (req, res) {
  helloCount++;
  return res.send(`hello, hello – has been visited ${helloCount} times`);
});

app.get("/machen", function (req, res) {
  machenCount++;
  return res.send(`machen, machen – has been visited ${machenCount} times`);
});

app.get("/thankyou", function (req, res) {
  thankyouCount++;
  return res.send(
    `thankyou, thankyou – has been visited ${thankyouCount} times`
  );
});

app.get("/great", function (req, res) {
  greatCount++;
  return res.send(`great, great – has been visited ${greatCount} times`);
});

app.get("/happy", function (req, res) {
  happyCount++;
  return res.send(`happy, happy – has been visited ${happyCount} times`);
});

app.get("/statistics", function (req, res) {
  return res.json({
    helloCount,
    machenCount,
    thankyouCount,
    greatCount,
    happyCount,
    // helloCount: helloCount,
    // machenCount: machenCount,
    // thankyouCount: thankyouCount,
    // greatCount: greatCount,
    // happyCount: happyCount,
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
