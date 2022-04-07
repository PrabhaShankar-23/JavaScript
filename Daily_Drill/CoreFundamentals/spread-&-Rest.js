/*Yes it is only one operator but it has two names. It depends on how you use these operators. And that’s the most confusing part. When you will call this spread and when you will call this rest.*/

// (…) we call this operator rest operator inside function parameters.

/* ======================== ============================ */

function add(a, b) {
  let sum = a + b;
  console.log(sum);
}

add(2, 7);
/* ======================== more parameters than arguments============================ */

function dd(a, b) {
  let sum = a + b;
  console.log(sum + " more parameters than arguments");
}

dd(2);

/* ======================== more arguments than parameters============================ */

function cdd(a, b) {
  let sum = a + b;
  console.log(sum + " more arguments than parameters");
}

cdd(2, 7, 4, 5, 6, 7);

/* =============================== Rest operator used============================ */

function final(...gotit) {
  let sum = 0;
  for (let i = 0; i < gotit.length; i++) {
    // sum = gotit[i] + sum;
    sum += gotit[i];
  }
  return sum;
}

console.log(final(2, 3, 9, 7, 5, 3));

/* ======================Rest operator used with one parameter ======================= */
function final(a, ...gotit) {
  let sum = a;
  for (let i = 0; i < gotit.length; i++) {
    // sum = gotit[i] + sum;
    sum += gotit[i];
  }
  return sum;
}

console.log(final(2, 3, 9, 7, 5, 3));

// But, use rest operator as the last parameter, otherwise it will throw an error.
// error : Rest parameter must be last formal parameter

/* ========================== spread operator  ======================= */
// (…) we call this operator spread operator while working with arrays, objects, sets etc. It is used to ‘spread’ the elements of the array one by one, which means you can work on the whole iterable in different scenario.

// ✅As function arguments,

function final(a, ...gotit) {
  let sum = a;
  for (let i = 0; i < gotit.length; i++) {
    // sum = gotit[i] + sum;
    sum += gotit[i];
  }
  return sum;
}

let arr = [2, 3, 9, 7, 5, 3];
console.log(final(...arr));

/* ======================== on built in functions  ====================== */
console.log(Math.max(...arr));

/* ===================== Combining multiple arrays inside a new array===================== */
let arr2 = [1, 2, 3, 4, 5, 6];

let arr3 = [...arr, ...arr2];
console.log(arr3);
/* ===================== copy an object to another object too.===================== */

let obj = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj, ...obj2 };
console.log(obj3);
/* ===================== 😍 getting individual elements of an array only once using spread operator.===================== */

let arr4 = [1, 1, 1, 2, 2, 3, 3, 4];
console.log(new Set(arr4));
let newset = [...new Set(arr4)];
console.log(newset);
/* =====================It is really confusing when you would call an (…) this as spread and rest. We call this rest when we call parameters of any number in a function. Other than that it is spread operator. 🔥Together they help to travel an iterable. And that is the similarity of these two. ===================== */

/* ===================== ===================== */
