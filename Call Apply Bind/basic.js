//call apply bind

function person(hobby, singer) {
  console.log(this.name, this.age, hobby, singer);
}

//call
const user1 = {
  name: "prateek",
  age: 3,
};

const user2 = {
  name: "Ajay",
  age: 33,
};

// user1.about.call(user2);
// user2.about();

//apply
// person.apply(user1, ["hii", "nohii"]);

//bind
const newf = person.bind(user1, "hello", "arijit");
newf();
