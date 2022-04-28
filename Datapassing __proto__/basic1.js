const empMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function employee(firstName, lastName, email, age, address) {
  const emp = {};
  emp.firstName = firstName;
  emp.lastName = lastName;
  emp.email = email;
  emp.age = age;
  emp.address = address;
  emp.about = empMethod.about;
  emp.is18 = empMethod.is18;

  return emp;
}

const emp1 = employee("Anil", "Singh", "Anil@gmail.com", 34, "Thane");
const msg = emp1.about();
console.log(msg);
const emp2 = employee("Prateek", "Singh", "Prateek@gmail.com", 24, "Mumbai");
