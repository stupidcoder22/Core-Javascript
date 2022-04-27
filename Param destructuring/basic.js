const person = {
  name: "prateek",
  age: 34,
};

function detail({ name, age }) {
  console.log(name);
  console.log(age);
}

detail(person);
