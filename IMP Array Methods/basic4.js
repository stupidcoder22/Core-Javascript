// some method

const numbers = [3, 5, 11, 8];
// kya ek bhi number esa hai jo even hai
// true
const ans = numbers.some((num) => {
  return num % 2 === 0;
});
// console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
  { productId: 3, productName: "macbook", price: 25000 },
];

const res = userCart.some((item) => item.price > 25000);
console.log(res);
