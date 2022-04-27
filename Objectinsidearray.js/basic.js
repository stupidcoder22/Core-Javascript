const users = [
  {
    userID: 1,
    name: "prateek",
    gender: "Male",
  },
  { userID: 2, name: "Radhika", gender: "Female" },
  { userID: 3, name: "Suraj", gender: "Male" },
];

// for (const userdata of users) {
//   console.log(userdata.userID);
//   console.log(userdata.name);
//   console.log(userdata.gender);
// }

//nested destructuring
const [{ name }, , { gender }] = users;
console.log(name);
console.log(gender);
