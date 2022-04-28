class Createuser {
  constructor(name, age) {
    console.log("constructor called");
    this.name = name;
    this.age = age;
  }

  about() {
    return ` my name is ${this.name} and my age is ${this.age}`;
  }
  is18() {
    return this.age > 18 ? true : false;
  }
  canSing() {
    return "you can sing baby";
  }
}

const user1 = new Createuser("Prateek", 34);
console.log(Object.getPrototypeOf(user1));
console.log(user1.about());
console.log(user1.is18());
console.log(user1.canSing());
