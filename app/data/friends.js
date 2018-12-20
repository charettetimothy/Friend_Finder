// ===============================================================================
// DATA
// Below data will hold all of our users data.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
var userData = [
    {
      customerName: "Ahmed",
      image: "#",
      compatibilityID: 5,
    },
    {
      customerName: "Abid",
      image: "#",
      compatibilityID: 8,
    },
    {
      customerName: "Tim",
      image: "#",
      compatibilityID: 7,
    }
  ];

  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;