let myname = {
  firstname: "Prabha Shanker",
  lastname: "Mishra",
};

let printname = function () {
  console.log(this.firstname + " " + this.lastname);
};

let printmyname = printname(myname);
console.log(printmyname);
