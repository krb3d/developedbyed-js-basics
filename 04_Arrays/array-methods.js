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
