sayHelo();
// call before declaration possible because of "hoisting" - https://www.w3schools.com/js/js_hoisting.asp
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// 'var' can be used like:
thisIsoistedVar = "hoisted!";
console.log(thisIsoistedVar);
var thisIsoistedVar; // Declare

// but same for 'let' will throw:
/*
    carName = "Volvo";
    console.log(carName);
    let carName;
    // Variables defined with let and const are hoisted to the top of the block, but not initialized.
 */

function sayHelo() {
  console.log("Hello!");
}

// >>> Do not use var
