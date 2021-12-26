const audios = ["whale sounds", "deer noises"];

// ==== MAP - return callback result for every element

// just clone:
const newAudios = audios.map(function (a) {
  return a;
});
newAudios[0] = "bird songs";
console.log(audios, newAudios); // ['whale sounds', 'deer noises'] ['bird songs', 'deer noises']

const undefinedAudios = audios.map(function (a) {}); // [undefined, undefined] doesn't return = undefined
console.log(undefinedAudios);

audios.push("deer dances");

// ==== FIND - return first
const searchDeers = audios.find(function (a) {
  return a.includes("deer");
});
console.log(searchDeers); // deer noises

// ==== FILTER - return first
const allDeers = audios.filter(function (a) {
  return a.includes("deer");
});
console.log(allDeers); // ['deer noises', 'deer dances']

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "God of War", rating: 8 },
  { title: "Tetris", rating: 7 },
  { title: "Snake", rating: 6 },
  { title: "WWE 2k20", rating: 5 },
];

// ==== SOME and EVERY
const allMiddle = games.every(function (g) {
  return g.rating > 6;
});
console.log(allMiddle); // false

const atLeastOneHigh = games.some(function (g) {
  return g.rating > 8;
});
console.log(atLeastOneHigh); // true

// Arrow functions
function SayHoNamed() {
  console.log("Ho!");
}

const sayHoAnonymous = function () {
  console.log("Ho!");
};

const sayHoArrow = () => {
  console.log("Ho!");
};

SayHoNamed();
sayHoAnonymous();
sayHoArrow();

const audioArrow = audios.map((a) => a.split("a"));
console.log(audioArrow); // [['wh', 'le sounds'], ['deer noises'], ['deer d', 'nces']]

// ==== SORT
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

items.sort();
console.log(items); // ['Apple', 'Banana', 'Mango', 'Orange']

ratings.sort();
console.log("ratings: ", ratings); // [10, 2, 22, 4, 45.6, 56, 80, 92] - alphabeticaly, as strings

var sorted = ratings.sort((a, b) => a - b);
console.log("sorted: ", sorted); // [2, 4, 10, 22, 45.6, 56, 80, 92] - negative go before positive
// sort modify original array too:
console.log("ratings: ", ratings);

// works for objects too
games.sort((a, b) => a.rating - b.rating);
console.log("games: ", games);

// ==== Spread operator
const descGames = [...games];
descGames.sort((a, b) => b.rating - a.rating);
console.log("games: ", games);
console.log("descGames: ", descGames);

const longString = "longstring";
const letters1 = longString.split(""); // ['l', 'o', 'n', 'g', 's', 't', 'r', 'i', 'n', 'g']
const letters2 = [...longString]; // ['l', 'o', 'n', 'g', 's', 't', 'r', 'i', 'n', 'g']

const concatenation1 = audios.concat(letters1); //  ['whale sounds', 'deer noises', 'deer dances', 'l', 'o', 'n', 'g', 's', 't', 'r', 'i', 'n', 'g']
const concatenation2 = [...audios, ...letters1]; //  ['whale sounds', 'deer noises', 'deer dances', 'l', 'o', 'n', 'g', 's', 't', 'r', 'i', 'n', 'g']
const concatenation3 = ["snail squeeze", "worm warming", ...audios]; // ['snail squeeze', 'worm warming', 'whale sounds', 'deer noises', 'deer dances']
