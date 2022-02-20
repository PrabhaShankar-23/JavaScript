let num1 = 8;
let num2 = 8;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

function multiply() {
  console.log("Its working");
  let multi = 0;
  multi = num1 * num2;
  document.getElementById("result").innerHTML = multi;
}

function add() {
  console.log("Its working add");
  let add1 = 0;
  add1 = num1 + num2;
  document.getElementById("result").innerHTML = add1;
}

function subtract() {
  console.log("Its working -sub");
  let sub1 = 0;
  sub1 = num1 - num2;
  document.getElementById("result").innerHTML = sub1;
}

function divide() {
  console.log("Its working div");
  let div1 = 0;
  div1 = num1 / num2;
  document.getElementById("result").innerHTML = div1;
}
