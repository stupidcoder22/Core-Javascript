const key = "email";
let data = { name: "prateek", age: 34, arr: [1, 23, 4] };
data.gender = "Male";
data[key] = "Prateek@gmail.com";

//using for-in loop
for (const key in data) {
  console.log(data[key]);
}

//using Object.keys
console.log(Object.keys(data));
console.log(Array.isArray(Object.keys(data)));

//using for-of loop
for (const val of Object.keys(data)) {
  console.log(data[val]);
}
