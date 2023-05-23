const db = require("../databases/db");
const urlUtilities = require("../services/urlUtilities");

function getCitiesWithLimitAndOffset(req, res) {
  let limit = 20;
  let offset = 0;

  if (req.query.limit) {
    limit = parseInt(req.query.limit);
  }
  if (req.query.offset) {
    offset = parseInt(req.query.offset);
  }

  db.getCitiesCount(function (citiesCount) {
    db.getCitiesWithLimitAndOffset(limit, offset, function (result) {
      const nextURL = urlUtilities.createNextURL(
        "cities",
        citiesCount,
        limit,
        offset
      );
      const prevURL = urlUtilities.createPreviousURL(
        "cities",
        citiesCount,
        limit,
        offset
      );

      const responseJSON = {
        count: citiesCount,
        next: nextURL,
        previous: prevURL,
        results: result,
      };
      res.json(responseJSON);
    });
  });
}

module.exports = {
  getCitiesWithLimitAndOffset,
};
