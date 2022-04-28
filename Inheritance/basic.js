class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = 12;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  isSupercute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name} is running at speed of ${this.speed}`;
  }
}
const tommy = new Dog("Tommy", 2, 34);
tommy.eat();
console.log(tommy.run());
