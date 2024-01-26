//
const routeNotFound = (req, res) =>
  res
    .status(400)
    .json({ message: `Sorry No route: ${req.url} found. Check the url again` });

module.exports = routeNotFound;
