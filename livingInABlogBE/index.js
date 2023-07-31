const express = require("express");
const app = express();

const destinationService = require("./services/destinationService");

const port = 3000;

app.get("/api", function (req, res) {
  res.json("Welcome to the Living in a Blog API");
});

app.get("/api/destinations", function (req, res) {
  const result = destinationService.getAllDestinations();

  res.json(result);
});

app.get("api/destinations/:destinationId", function (req, res) {
  const id = Number(req.params.destinationId);

  const result = destinationService.getDestinationById(id);

  if (result) {
    res.json(result);
  } else {
    res.status(404);
    res.end();
  }
});

app.get("api/destinations/:destinationId", function (req, res) {
  const id = Number(req.params.destinationId);

  const result = destinationService.deleteDestinationbyId(id);

  if (result) {
    res.json({
      id: id,
      message: "Deleted successfully",
    });
  } else {
    res.status(404);
    res.end();
  }
});

app.listen(port, function () {
  console.log(`port listening on ${port}`);
});
