const user2 = {
  name: "Ajay",
  age: 33,
  about: function () {
    console.log(this);
    console.log(this.name, this.age);
  },
};
// don't do this mistake
// const d = user2.about;
const d = user2.about.bind(user2);
d();
