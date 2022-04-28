//constructor function
function Createuser(name, age) {
  this.name = name;
  this.age = age;
}
//create {}
//return {}
//make a connection between object and prototype in proto

Createuser.prototype.about = function () {
  console.log(this.name, this.age);
};

Createuser.prototype.sing = function () {
  return "lalala";
};

const user1 = new Createuser("terminal", 34);
console.log(user1.sing());
console.log(user1.about());
console.log(user1);
