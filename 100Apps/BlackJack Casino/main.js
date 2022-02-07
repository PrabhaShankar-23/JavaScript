// In begining we checked via short message if this file is connected to the index file by this small message.
// let message = "😁👍 Keep Rocking!";
// console.log(message);

let card1 = 0;
let card2 = 0;
let Card_3 = 0;

let sum = card1 + card2;
let message = "";
let hasblackjack = false;
let isalive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#card-el");

function startGame() {
  card1 = Math.ceil(Math.random() * 10 + 1);
  card2 = Math.ceil(Math.random() * 10 + 1);
  if (sum <= 20) {
    message = "Do you want to draw New card?";
    messageEl.textContent = message;

    sumEl.textContent = "sum:" + (card1 + card2);
    cardsEl.textContent = "cards:" + card1 + "*" + card2;
  } else if (sum === 21) {
    message = "Got BlackJack  cheers!";

    messageEl.textContent = message;
    sumEl.textContent = card1 + card2;
    cardsEl.textContent += card1 + "**" + card2 + "--";
    hasblackjack = true;
  } else {
    message = " You are out of the game!";
    isalive = false;
  }
}

function newCard() {
  if (isalive) {
    Card_3 = Math.ceil(Math.random() * 10 + 1);
    sum = card1 + card2 + Card_3;
  }
}
