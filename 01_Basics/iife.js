// IIFE - Immediately Invoked Function Expression

function hello() {
  console.log("hi");
}

hello();

(function how() {
  console.log("how are you?");
})();

// Helps to be sure that library doesn't create any global variables
