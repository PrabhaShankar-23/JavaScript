function outer() {
  var a = 10;

  inner();
  function inner() {
    console.log(a);
  }
}

outer();
