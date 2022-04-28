//this doesn't work for arrow function even bind  call won't work
// it always refers to global object

const user = {
  name: "Ajay",
  age: 33,
  about: () => {
    console.log(this);
    console.log(this.name, this.age);
  },
};
user.about();
