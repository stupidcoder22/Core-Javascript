//foreach
//map
//filter
//reduce
// const numbers = [34, 12, 1523, 433, 76];
//foreach

// function mulby2(number, index) {
//   console.log("index is : ", index);
//   console.log("number multiplied is : ", number * 3);
// }

// for (let i = 0; i < numbers.length; i++) {
//   mulby2(numbers[i], i);
// }
// numbers.forEach(mulby2);

// const users = [
//   { name: "harshil", age: 23 },
//   { name: "manoj", age: 13 },
//   { name: "shamil", age: 43 },
//   { name: "neeraj", age: 33 },
// ];

// users.forEach(({ name }, index) => {
//   console.log(name);
// });

// Map function
// const numbers = [34, 12, 1523, 433, 76];

// const newarray = numbers.map((item) => {
//   return item * item;
// });
// console.log(newarray);

// const users = [
//   { name: "harshil", age: 23 },
//   { name: "manoj", age: 13 },
//   { name: "shamil", age: 43 },
//   { name: "neeraj", age: 33 },
// ];

// const newname = users.map(({ name }) => {
//   return name;
// });

// console.log(newname);

//filter
// const numbers = [34, 12, 1523, 433, 76];
// function even(number) {
//   return number % 2 === 0;
// }
// const result = numbers.filter(even);
// console.log(result);

//reduce method
const num = [1, 3, 4, 7, 9];
//aim : sum of all numbers in array
const sum = num.reduce((accu, curr) => {
  return accu + curr;
});
// console.log(sum);
// accu    curr    return
// 1        3        4
// 4        4        8
// 8        7        15
// 15        9        124

const usercart = [
  { id: 1, name: "prateek", price: 23 },
  { id: 2, name: "prateek", price: 43 },
  { id: 3, name: "prateek", price: 63 },
  { id: 4, name: "prateek", price: 83 },
];

const totalprice = usercart.reduce((a, b) => {
  return a + b.price;
}, 0);
console.log("total : ", totalprice);
