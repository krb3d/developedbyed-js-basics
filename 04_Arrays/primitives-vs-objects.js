// primitives vs objects

const stringConst = "one";
// stringConst = "two"; // doesn't work, constant

const nums = ["one", "two"];
nums[0] = "zero"; // fine
nums.push("three"); // fine too
// stringArr = ["four"]; // doesn't work, constant
console.log(nums); // ['zero', 'two', 'three']

let bank = 250;
let newBank = bank;
bank = 100;
console.log(bank, newBank); // 100 250

let newNums = nums;
newNums[1] = "TWO";
console.log(nums, newNums); // ['zero', 'TWO', 'three'] ['zero', 'TWO', 'three']

const tweet = {
  name: "krb3d",
  count: 0,
  age: 3,
};

const newTweet = tweet;
newTweet.age = 6;
console.log(tweet, newTweet); // {name: 'adolf', count: 0, age: 6} {name: 'adolf', count: 0, age: 6}
