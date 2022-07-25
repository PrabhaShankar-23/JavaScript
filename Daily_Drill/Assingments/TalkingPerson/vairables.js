function myFunction() {

    // prompt will ask the user to enter the result.
  let person = prompt("Please enter input to judge shouting, Whispering or neither");
  if (person != null) {
   
    let userAction = '';

    // this function will test out the input made by the user to be all in capitals or not.
    // if all the input will be in capitals then this can be said to be shouting.
    function isUpperCase(myString) { 
       return (myString == myString.toUpperCase()); 
       }; 

    // Again lowecase check will return true for lower case which will result in whispering.   
    function isLowerCase(myString) { 
       return (myString == myString.toLowerCase()); 
         }; 

    //  Here this result is like 2 step transfer from the ternary operator which we can say either it shouting or whispering or neither.
    isUpperCase(person) ? (userAction = 'Shouting') : 
    (isLowerCase(person) ? (userAction = 'whispering') 
    : (userAction = 'Neither'));

    // I have consoled the result as well as put the result in page.
    console.log("The person is ", userAction);

     document.getElementById("demo").innerHTML =
    "Hey hey hey..... " + userAction  ;
  }
} 