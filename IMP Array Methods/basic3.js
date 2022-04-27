//find

// const arr = ["meat", "cat", "dat", "rat", "pig", "leopard", "jaguar"];

// function islength3(data) {
//   return data.length === 7;
// }
// const res = arr.find(islength3);
// console.log(res);

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];

const res = users.find((user) => {
  return user.userId === 4;
});
console.log(res);
