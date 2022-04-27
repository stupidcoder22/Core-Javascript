const band = {
  name: "Prateek",
  sirname: "Singh",
  age: 34,
  city: "thane",
  weather: "summer",
};

// const name = band.name;
// const sirname = band.sirname;
// const age = band.age;

// console.log(name, sirname, age);

// using object destructuring
// const { name, sirname, age } = band;
//you can also change name of variable
const { name: nm, sirname, age: a, ...remain } = band;
console.log(nm, sirname, a, remain);
