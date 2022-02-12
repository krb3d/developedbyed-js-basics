// Sync
function otherFunction() {
  console.log("02");
  console.log("03");
}

console.log("01");
otherFunction();
console.log("04");

// Async
console.log("21");
setTimeout(() => {
  console.log("33");
}, 2000);
console.log("22");

// callback
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("now we have data!");
    callback({ userEmail: email });
  }, 3000);
}

loginUser("a@b.com", "asdf", (response) => {
  console.log(response);
});

const button = document.querySelector("button");
const header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      header.innerText = data?.slip?.advice;
    });
});
