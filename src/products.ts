import Product from "./models/Product";

export const product: Product[] = [
  {
    name: "pre-workout",
    price: 59.99,
  },
  {
    name: "wrist-wraps",
    price: 11.99,
  },
  {
    name: "liquid-chalk",
    price: 9.99,
  },
];

export const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let sum = 0;
  arrayOfProducts.forEach((item) => {
    sum = item.price + sum;
  });
  let avg = sum / arrayOfProducts.length;
  return avg;
};
