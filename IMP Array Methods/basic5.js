// fill method
// value, start ,end

// const newarr = new Array(10).fill(-1);
// console.log(newarr);
const myArray = ["item1", "item2", "item3"];

// splice method
// start , delete , insert

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert
// myArray.splice(1, 0,'inserted item');

// insert and delete
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("delted item", deletedItem);
console.log(myArray);
