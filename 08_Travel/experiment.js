const hikeExp = document.querySelector(".hike-exp");
const slide = document.querySelector(".hike");

window.addEventListener("scroll", scrollReveal);

function scrollReveal() {
  const hikePos = hikeExp.getBoundingClientRect();
  const hikePosTop = hikePos.top;
  const windowHeight = window.innerHeight / 1.5;

  if (hikePosTop < windowHeight) {
    hikeExp.style.color = "red";
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// let options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0,
//};
let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(slideAnim, options);
observer.observe(slide);

function slideAnim(entries) {
  entries.forEach((entry) => {
    console.log(entry);

    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time

    if (entry.isIntersecting) {
      entries.style.background = "white";
    }
  });
}
