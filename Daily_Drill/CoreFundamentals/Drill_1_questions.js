/* ======================== 1============================ */
console.log(!!"0");
console.log(!!0);
console.log(!![]);
console.log(!!false);
console.log(!!NaN);
console.log(!!"");
console.log(!!false);

/* ======================== 2============================ */
// (function () {
//   return function () {
//     console.log("Hi");
//   };
// })()();

/* ======================== 3============================ */
// console.log(a);
// var a = 4;
// console.log(a);

/* ========================4 ============================ */
// console.log(b);
// let b = 4;
// console.log(b);

/* ========================5 ============================ */
// console.log(c);
// const c = 4;
// console.log(c);

/* ========================6 ============================ */
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

/* ======================== 7============================ */
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
/* ======================== 8============================ */
// for (const i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
/* Note here it is not even giving any kind of results.*/

/* ========================9 ============================ */

// for (i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

/* ======================== 10============================ */

// console.log(2 + 3 + "4");
// console.log("2" + 3 + 4);
// console.log(2 + "3" + 4);

/* ======================== 11============================ */
// "use strict";
// a = 4;
// console.log(a);
/*The purpose of "use strict" is to indicate that the code should be executed in "strict mode".*/
/* ======================== 12============================ */

// const a;
// a = 4;
// console.log(a);
/* ======================== 13============================ */
// let i;
// let j;
// console.log(i == j);
/* ========================14 ============================ */

// a = { count: 1, value: 2 };
// b = { count: 1, value: 2 };
// a_keys = Object.keys(a).toString();
// b_keys = Object.keys(b).toString();
// console.log(a_keys == b_keys);

/* ======================== 15============================ */
// a = { count: 1, value: 2 };
// b = { count: 1, value: 3 };
// a_keys = Object.keys(a).toString();
// b_keys = Object.keys(b).toString();
// console.log(a_keys == b_keys);

/* ========================16 ============================ */

// a = { count: 1, value: 2 };
// b = { value: 2, count: 1 };
// a_keys = Object.keys(a).toString();
// b_keys = Object.keys(b).toString();
// console.log(a_keys == b_keys);

/* ========================17============================ */
// console.log(Infinity == Infinity);

/* ========================18============================ */
// console.log(true == 3);

/* ========================19============================ */
// const o = console.log;
// o("Hello");
/* ========================20============================ */
// function abc({ name: { first, last }, marks }) {
//   console.log(first + last + "--->" + marks);
// }
// obj = {
//   name: {
//     first: "john",
//     last: "mark",
//   },
//   marks: 100,
// };
// abc(obj);

/* Note here there is no space between the first & last part of name*/
/* ======================== 21============================ */

// const planets = ["Mercury", "Venus", "Mars"];
// planets.fill("Earth");
// planets.push("Pluto");
// console.log(planets);
// planets.pop();
// planets.shift();
// planets.unshift("hero");
// console.log(planets);
/* ======================== 22============================ */

// obj1 = { a: 1 };
// obj2 = { a: 2, b: 2 };
// obj3 = { c: 3 };

// obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);
// obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj4);

/* ======================== 23============================ */

/* ======================== 24============================ */

/* ======================== 25============================ */
