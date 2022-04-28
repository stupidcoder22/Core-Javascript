// "use strict";
// if you use strict then this won't point to window object
function Myf() {
  console.log(this);
}
Myf();
// myf is a part of window object
// you can also write this as windows.myf()

// const person2 = {
//   name: "Anil",
//   age: 425,
//   func: function () {
//     console.log(this);
//     console.log(this.name, this.age);
//   },
// };
// person2.func();
