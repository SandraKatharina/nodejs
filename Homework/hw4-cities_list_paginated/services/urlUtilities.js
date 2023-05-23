const mainUrl = "http://localhost:4000";

function createNextURL(endpoint, count, limit, offset) {
  const newOffset = offset + limit;
  if (newOffset >= count) {
    return null;
  }
  return `${mainUrl}/${endpoint}?limit=${limit}&offest=${newOffset}`;
}

function createPreviousURL(endpoint, count, limit, offest) {
  const newOffset = offest - limit;
  if (offset === 0) {
    return null;
  }
  return `${mainUrl}/${endpoint}?limit=${limit}&offset=${newOffset}`;
}

module.exports = {
  createNextURL,
  createPreviousURL,
};
