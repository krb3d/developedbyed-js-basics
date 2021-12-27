console.log(this); // Window

function sayThis() {
  console.log(this); // Window
}
sayThis();

const serhii = {
  name: "Serhii",
  methodExplicit: function () {
    console.log("method1");
  },
  sayUserThis() {
    console.log(this);
  },
};

serhii.sayUserThis(); // Object {name: 'Serhii', methodExplicit: ƒ, sayUserThis: ƒ}

// 'this' set when function get invoked!
const user = {
  name: "User",
};

const admin = {
  name: "Admin",
};

user.say = sayThis;
admin.say = sayThis;

user.say(); // Object {name: 'User', say: ƒ}
admin.say(); // Object {name: 'Admin', say: ƒ}

const list = document.querySelectorAll("li");
list.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this); // <li>
  });
});

const dev = {
  name: "dev",
  videos: ["html", "js", "css", "react"],
  greet() {
    let self = this;
    console.log(`Hello there ${self.name}.`);
    // add Function
    const getVideos = function () {
      console.log(`You currently have ${self.videos.length} videos`);
      // console.log(`You currently have ${this.videos.length} videos`); // Uncaught TypeError: Cannot read properties of undefined (reading 'length')
    };
    getVideos();
  },
};
dev.greet();

// ! This is different for arrow functions:
const devWithArrow = {
  name: "devWithArrow",
  videos: ["html", "js", "css", "react"],
  greet() {
    console.log(`Hello there ${this.name}.`);
    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`); // !!!
    };
    getVideos();
  },
  greetToWindow: () => {
    console.log(`Hello there ${this}.`); // !!! Because of arrow function
  },
};
devWithArrow.greet(); // Hello there devWithArrow.
devWithArrow.greetToWindow(); // Hello there [object Window].

const iter = {
  videos: ["html", "js"],
  loopAnonymous() {
    this.videos.forEach(function (vid) {
      console.log(this);
    });
  },
  loopArrow() {
    this.videos.forEach((vid) => {
      console.log(this);
    });
  },
};
iter.loopAnonymous(); // Window, Window, Window, Window
iter.loopArrow(); // Object iter, Object iter, Object iter, Object iter,
