// DATA
// Below data will hold all of our users data.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
var potentialMatches = [{
    name: "Mary",
    photo: "beauty.jpg",
    id: 10,
  },
  {
    name: "Abid",
    photo: "entrepreneur.jpg",
    id: 15,
  },
  {
    name: "Sarah",
    photo: "fashion.jpg",
    id: 20,
  },
  {
    name: "Lisa",
    photo: "fashion1.jpg",
    id: 25,
  },
  {
    name: "Bob",
    photo: "hat.jpg",
    id: 30,
  },
  {
    name: "Clarissa",
    photo: "hijab.jpg",
    id: 35,
  },
  {
    name: "Mo",
    photo: "man.jpg",
    id: 40,
  },
  {
    name: "Curley",
    photo: "man2.jpg",
    id: 45,
  },
  {
    name: "Marissa",
    photo: "model.jpg",
    id: 50,
  },
  {
    name: "Jerry",
    photo: "suit.jpg",
    id: 55,
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = potentialMatches;