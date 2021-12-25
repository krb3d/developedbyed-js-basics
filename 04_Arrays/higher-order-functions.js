const videos = ["how to js", "top 5 transformers"];
videos.push("new line video");
console.log(videos);

// Higher order function take function as a paramether
function repeater(fn) {
  fn();
  fn();
  fn();
}

function sayHello() {
  console.log("Hello there!");
}

repeater(sayHello);
repeater(function () {
  console.log("anonymous function in high order function");
});

// Callback - function which would be called later:
videos.forEach(function (vid) {
  console.log(vid);
});
