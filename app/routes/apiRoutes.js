// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on user-data (ie. potentialMatches).
var potentialMatches = require("../data/friends");
// ROUTING
// req.body is the new guy information get is from client to server and response is what servers sends back to the client!!!!!!!!!!!
// 
module.exports = function (app) {
  app.post("/data/friends", function (req, res) {
    var surveyScore = 0;
    //loops through theNewGuy score. req.body is the stuff that got sent to the server from the survey.
    // then turns the string of numbers into an integer and stores in a variable.
    for (var i = 0; i < req.body.scores.length; i++) {
      var number = parseInt(req.body.scores[i])
      surveyScore += number
    }
    // loop through potentialMatches and compares to the new guy.
    var bestMatch = {};
    var roundedScore = Math.round((surveyScore/5)*5)
    // console.log(surveyScore)
    console.log(roundedScore)
    for (var i = 0; i < potentialMatches.length; i++) {
      // make sure we are getting the data we want from potentialMatches...
      // console.log(potentialMatches[i].id)
      if (potentialMatches[i].id === roundedScore) {
        bestMatch.name = potentialMatches[i].name
        bestMatch.photo = potentialMatches[i].photo
        // 
      }
    }
    // make sure we are getting the score from theNewGuy
    // console.log(roundedScore)
    res.json(bestMatch);
  });
  // API GET Requests
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/data/friends", function (req, res) {
    res.json(potentialMatches);
  });
}