const letters = ["a", "b", "c"];

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

for (let val of letters) {
  console.log(val);
}

// ES 6
// Array.entries() returns an iterator
// don't confuse this with Object.entries(), which returns an array of key-value pairs.
for (let [index, val] of letters.entries()) {
  console.log(`${val} at ${index}`);
}

// only for arrays, can't break
letters.forEach(function (val, index) {
  console.log(`${val} at ${index}`);
  // break; // error
});

const user = {
  name: "Serhii",
  age: 25,
  greet: function () {
    console.log("Hello there! ");
  },
};

for (let x in user) {
  console.log(x); // property name
  console.log(user[x]); // value
}

let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}

do {
  console.log(j);
  j++;
} while (j < 3);
