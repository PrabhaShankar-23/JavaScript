// Here we using the DRY principle for implementing the same login in better manner.

const radius = [2, 3, 4, 5, 6, 7, 8, 9];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return Math.PI * radius * 2;
};

const diameter = function (radius) {
  return radius * 2;
};

// Here we have separated the logic part and we are repeating very less part of the code.

const calculate = function (radius, logic) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));
