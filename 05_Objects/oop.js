class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains("fadeOut-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fadeOut-active");
    } else {
      this.selector.style.opacity = 0;
      this.selector.classList.add("fadeOut-active");
    }
    this.selector.style.transition = `all ${time}s ease`;
  }
  move(time, toggle = false, { x = 0, y = 0 }) {
    // Object as parameter? Named parameters
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = `translate(0px, 0px)`;
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transform = `translate(${x}px, ${y}px)`;
      this.selector.classList.add("move-active");
    }
    this.selector.style.transition = `all ${time}s ease`;
  }
}

const intro = new Animator("h1");
const buttonAnim = new Animator("button");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // need to use arrow because we can't set callback with paramether
  intro.fadeOut(10, true);
  intro.move(5, true, { x: 100, y: 200 });
  buttonAnim.move(3, true, { y: 20, x: 300 });
});
