// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on user-data.
var userData = require("../data/friends");
// ROUTING
module.exports = function(app) {
  // API GET Requests
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.post("/data/friends", function(req, res) {
    res.json(userData);
    console.log(req.body)
    userData.push(req.body)
  });
  app.get("/data/friends", function(req, res) {
    res.json(userData);
  });
  
}
