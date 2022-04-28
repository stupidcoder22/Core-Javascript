const empMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },

  sing: function () {
    return "lala lala lala";
  },
};

function employee(firstName, lastName, email, age, address) {
  const emp = Object.create(empMethod);
  emp.firstName = firstName;
  emp.lastName = lastName;
  emp.email = email;
  emp.age = age;
  return emp;
}

const emp1 = employee("Anil", "Singh", "Anil@gmail.com", 34, "Thane");
console.log(emp1);
const msg = emp1.about();
console.log(msg);
console.log(emp1.sing());
const emp2 = employee("Prateek", "Singh", "Prateek@gmail.com", 24, "Mumbai");
