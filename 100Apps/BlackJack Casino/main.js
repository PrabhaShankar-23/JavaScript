// In begining we checked via short message if this file is connected to the index file by this small message.
// let message = "😁👍 Keep Rocking!";
// console.log(message);

let card1 = 10;
let card2 = 12;
let sum = card1 + card2;
let message = "";
let hasblackjack = false;
let isalive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
sumEl.textContent += card1 + card2;
let cardsEl = document.querySelector("#card-el");
cardsEl.textContent = card1 + "**" + card2;
function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw New card?";
  } else if (sum === 21) {
    message = "Got BlackJack  cheers!";
    hasblackjack = true;
  } else {
    message = " You are out of the game!";
    isalive = false;
  }
  messageEl.textContent = message;
}
