//hoisting
hello();

// it will in case of function declaration
function hello() {
  console.log("hello");
}
// it won't work if we use function expression and arrow function
// const hello = () => {
//   console.log("hello");
// };
console.log(a);
var a = 34;
console.log(a);
