// let count = 0;
// function counter() {
//   let txt = "hello";

//   for (let i = 0; i < txt.length; i++) {
//     txt.charAt(i) === " " ? count : count++;
//   }
// }

// counter();
// console.log(count);

const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

console.log(getCharacters("ST"));

let list = getCharacters("LA");
console.log(list);
console.log(list.length);

for (let i = 0; i < list.length; i++) {}

const houses = [
  {
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];

let houseNo = [...new Set(houses)];
console.log(houseNo);
