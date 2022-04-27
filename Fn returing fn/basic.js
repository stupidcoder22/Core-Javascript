// function returning function

function myfunc() {
  return function retfun() {
    console.log("return function");
  };
}

const fun = myfunc();
// fun();
console.log(fun());
