// document.getElementById("count-el").innerHTML = 5;

// let count = 0;

// we will first take count of variable
// Then that count variable will be initialized with this count app
let count = 0;

// listen for clicks on counter button
// increment the count variable when this button is clicked!
// Reflect this change in variable through html to reflect in the browser ultimately.

function increment() {
count += 1;
document.getElementById("count-el").innerHTML = count;
// console.log("The thumps up button was clicked!")
}

function save (){

    console.log(count);
}

