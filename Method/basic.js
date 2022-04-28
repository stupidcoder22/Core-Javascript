function personinfo() {
  console.log(`Your name is ${this.name} and age is ${this.age}`);
}
const person1 = {
  name: "Prateek",
  age: 45,
  func: personinfo,
};

const person2 = {
  name: "Anil",
  age: 425,
  func: personinfo,
};
person1.func();
person2.func();
