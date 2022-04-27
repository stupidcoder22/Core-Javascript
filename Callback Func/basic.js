// callback Function

function callbackfn(a) {
  console.log(a(2, 3));
  console.log("hello");
}

callbackfn(sum);

function sum(a, b) {
  return a + b;
}
