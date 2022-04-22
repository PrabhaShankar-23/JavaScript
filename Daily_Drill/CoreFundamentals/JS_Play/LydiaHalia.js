function scopeofVariable() {
  let value;
  console.log(value);
  value = 10;
}

scopeofVariable();

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

console.log(mouse[bird.size]);
console.log([bird.size]);
console.log(mouse.bird.size);
