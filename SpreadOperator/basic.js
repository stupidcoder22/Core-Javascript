// sperad operator

const array1 = [1, 23, 343, 43, 4312];
const array2 = ["prateek", "singh", 23, 12];

const newarray = [...array1, ...array2];
const ar = [..."Prateek"];
console.log(ar);

//spread operator in Object
const obj1 = {
  one: "data1",
  two: "data2",
};

const ob2 = {
  three: "data3",
  four: "data4",
};
const newObject = { ...obj1, ...ob2 };

const newobj = { ..."Prateek" };
console.log(newobj);
