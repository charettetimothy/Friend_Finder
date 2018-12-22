// DATA
// Below data will hold all of our users data.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
var potentialMatches = [{
    name: "Ahmed",
    photo: "#",
    id: 22,
  },
  {
    name: "Abid",
    photo: "#",
    id: 15,
  },
  {
    name: "Tim",
    photo: "#",
    id: 3,
  },
  {
    name: "Jim",
    photo: "#",
    id: 4,
  },
  {
    name: "Bob",
    photo: "#",
    id: 5,
  },
  {
    name: "Larry",
    photo: "#",
    id: 6,
  },
  {
    name: "Mo",
    photo: "#",
    id: 7,
  },
  {
    name: "Curley",
    photo: "#",
    id: 8,
  },
  {
    name: "Harry",
    photo: "#",
    id: 9,
  },
  {
    name: "Jerry",
    photo: "favicon.png",
    id: 10,
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = potentialMatches;