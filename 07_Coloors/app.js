const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");

function generateHex() {
  return chroma.random();
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const randomColor = generateHex();
    const hexText = div.querySelector("h2");

    hexText.innerText = randomColor;
    div.style.background = randomColor;
  });
}

randomColors();
