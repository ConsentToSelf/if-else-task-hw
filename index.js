// // first
// let a = 0 || "string";
// // "string"
// let a2 = 1 && "string";
// // "string"
// let a3 = null || 25;
// // 25
// let a4 = null && 25;
// // null
// let a5 = null || 0 || 35;
// // 35
// let a6 = null && 0 && 35;
// // null

// // second
// value = 12 + 14 + "12";
// // 2612
// 3 + 2 - "1";
// // 4
// "3" + 2 - 1;
// // 31
// true + 2 + "10" + 1;
// // 3101
// undefined + 2;
// // NaN
// null + 5;
// // 5
// true + undefined;
// // NaN

// // third
// let showImg = "hidden";
// if (showImg === "hidden") {
//   showImg = "visible";
// } else {
//   showImg = "hidden";
// }

// // fourth
// let num = 1;
// if (num === 0) {
//   num = 1;
// } else if (num < 0) {
//   num = "less then zero";
// } else if (num > 0) {
//   num *= 10;
// }

// // five
// let car = {
//   name: "Lexus",
//   age: 10,
//   create: 2008,
//   needRepair: false,
// };
// if (car.age > 5) {
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }

// six
let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "",
};

if (isNaN(item.discount) && isNaN(item.price)) {
  let priceWithDiscount =
    (parseInt(item.price) - parseInt(item.discount)) / 100;
  item["priceWithDiscount"] = parseInt(item.price) * priceWithDiscount;
} else {
  item.price;
}

// seven
let product = {
  name: "Яблоко",
  price: "0$",
};
let min = 10;

let max = 20;

let parseIntPrice = parseInt(product.price);
if (parseIntPrice >= min || parseIntPrice === max) {
  console.log(product.name);
} else {
  console.log("товаров не найдено");
}
