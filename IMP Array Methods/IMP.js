// const numbers = [2, 4, 6, 11, 10];
// const res = numbers.every((numbers) => numbers % 2 === 0);
// console.log(res);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];

const res = userCart.every((item) => {
  return item.price > 10000;
});
console.log(res);
