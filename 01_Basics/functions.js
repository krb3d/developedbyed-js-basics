function greet(name, age = 25) {
  console.log(`Welcome to our site ${name}, age ${age}`);
}

function signUp() {
  var text = prompt("What is your name?");
  greet(text);
}

log.console("Rest of code");
signUp();
