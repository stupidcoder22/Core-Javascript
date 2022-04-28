const ob = {
  key1: "value1",
  key2: "value2",
};

// const ob2 = { ...ob }; first way
//2nd way
const ob2 = Object.assign({}, ob);
ob.key3 = "value3";
console.log(ob);
console.log(ob2);
