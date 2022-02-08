const items = ["banana", "chocolate noodle", "apple", "cheese"];
const apple_const = items[2];

const [banana, noodle, apple, cheese] = items;
const [ban, noo, ...rest] = items;

console.log(rest); // ["apple", "cheese"]

const newItems = [...items, "more stuff"];

// for objects
const user = {
  name: "Serhii",
  photos: [1, 2, 3, 4],
  age: 35,
  analytics: {
    subscribers: 25000,
    videos: 250,
  },
};

const photos = user.photos;
console.log(photos);

const { age, analytics } = user;
console.log(analytics);
