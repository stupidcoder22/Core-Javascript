const obj1 = {
  name: "prateek",
  age: "34",
};
//__proto__, [[prototype]]
const obj2 = Object.create(obj1);
obj2.hair = "black";
console.log(obj2.name);
console.log(obj2);
