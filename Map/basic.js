//Map is itertable
//store data in ordered function
//Store key value pair like objects
//duplicate keys not allowed

//difference between maps and objects
// objects can only have string or symbol as key
// in map you can

const person = new Map();
person.set("firstname", "Prateek");
person.set("lastname", "singh");
person.set("age", 12);
person.set(1, "one");

for (const [key, val] of person) {
  console.log(key, val);
}

// const a = { name: "prateek", age: 12 };
// for (const aa of a) {
//   console.log(a);
// we can't apply for of in object, we can use it for array and string
// }

// for (const key in a) {
// we can use forin for object
//   console.log(a[key]);
// }

const newmap = new Map([
  ["name", "dd"],
  ["age", 23],
]);

console.log(newmap);
