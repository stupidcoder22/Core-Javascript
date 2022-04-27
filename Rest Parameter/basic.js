// function add(a, b, ...c) {
//   console.log(a, b, c);
// }

// add(1, 3, 423, 2, 42, 23, 25, 2);

function add(...c) {
  var total = 0;
  for (const num of c) {
    total = total + num;
  }
  console.log(total);
}

add(3, 4, 5, 6, 7, 8, 9);
