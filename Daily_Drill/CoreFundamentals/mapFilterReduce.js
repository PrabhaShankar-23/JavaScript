const arr = [1, 2, 3, 4, 5, 7];

console.log(arr.map(double));

function double(num) {
  return 2 * num;
}

function binary(num) {
  return num.toString(2);
}
console.log(arr.map(binary));
