// Here we are checking how to write better code.

const radius = [2, 3, 4, 5, 6];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    // output[i] = Math.PI * radius[i] * radius[i];
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

//  Calculating circumference

const circumference = function (radius) {
  const output2 = [];
  for (let i = 0; i < radius.length; i++) {
    // output[i] = Math.PI * radius[i] * radius[i];

    output2.push(2 * Math.PI * radius[i]);
  }
  return output2;
};

console.log(circumference(radius));

// calculating diameter

const diameter = function (radius) {
  const output2 = [];
  for (let i = 0; i < radius.length; i++) {
    // output[i] = Math.PI * radius[i] * radius[i];

    output2.push(2 * radius[i]);
  }
  return output2;
};

console.log(diameter(radius));
