// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// string and array are iterable
// unique items only (no duplicates allowed)
const num = new Set([1, 34, 23, 34]);
console.log(num);

// set we use to make something unique like array or string eg. id
const eg = [1, 2, 3, 2, 4, 5, 6, 5];
const unique = new Set(eg);
console.log(unique);

//there is no length method in Set
// to find length of set we will do this
let length = 0;
for (const uni of unique) {
  length++;
}
console.log(length);

// const items = ['item1','item2', 'item3'];
