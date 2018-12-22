// DATA
// Below data will hold all of our users data.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
var potentialMatches = [{
    name: "Ahmed",
    photo: "favicon.png",
    id: 10,
  },
  {
    name: "Abid",
    photo: "favicon.png",
    id: 15,
  },
  {
    name: "Tim",
    photo: "favicon.png",
    id: 20,
  },
  {
    name: "Jim",
    photo: "favicon.png",
    id: 25,
  },
  {
    name: "Bob",
    photo: "favicon.png",
    id: 30,
  },
  {
    name: "Larry",
    photo: "favicon.png",
    id: 35,
  },
  {
    name: "Mo",
    photo: "favicon.png",
    id: 40,
  },
  {
    name: "Curley",
    photo: "favicon.png",
    id: 45,
  },
  {
    name: "Harry",
    photo: "favicon.png",
    id: 50,
  },
  {
    name: "Jerry",
    photo: "favicon.png",
    id: 55,
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = potentialMatches;