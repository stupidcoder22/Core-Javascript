// let and const are block scope and var is function scope
{
  const d = 23;
  console.log(d);
}
console.log(d);

// if i access const and let outside the block i will get the error but this is not the case of var
