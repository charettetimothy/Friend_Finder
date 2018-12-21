// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on user-data.
var userData = require("../data/friends");
// ROUTING
// req is the new guy information get is from client to server and response is what servers sends back to the client!!!!!!!!!!!!!!!!!!!!!!!!!!!
module.exports = function (app) {
  // API GET Requests
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.post("/data/friends", function (req, res) {
    var newScore = 0;
    // this loops through scores of the new guys scores. req.body is the stuff that got sent to the server from the survey.
    for (var i = 0; i < req.body.scores.length; i++) {
      var number = parseInt(req.body.scores[i])
      newScore += number
    }
    // loop through all other friends and compare to the new guy.!!!!!!!!!!!!!!!!!!!!!!!!!
    // userData is everything
    var bestMatch = {};
    for (var i = 0; i < userData.length; i++) {
      console.log(userData[i].id)
      if (userData[i].id === newScore) {
        bestMatch.name = userData[i].name
        bestMatch.photo = userData[i].photo
      }
    }
    console.log(newScore)
    res.json(bestMatch);
  });

  app.get("/data/friends", function (req, res) {
    res.json(userData);
  });
}