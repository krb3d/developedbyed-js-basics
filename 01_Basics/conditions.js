console.log(5 == 5);
console.log(5 != 4);
console.log(5 < 6);
console.log(5 > 4);

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 === 10); // true

const age = 25;
if (age) {
  console.log("truly"); // truly
}

if (0) {
  // nope
}

// FALSE, 0, "", null, undefined, NaN
// everything else - TRUE

const text = "aaa";

switch (text) {
  case "banana":
    console.log("bnn");
    break;
  case "aaa":
    console.log("ok");
    break;
  default:
    console.log("default");
    break;
}
