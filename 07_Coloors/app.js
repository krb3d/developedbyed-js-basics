const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");

function generateHex() {
  return chroma.random();
}

function checkTextContrast(color, text) {
  text.style.color = "lightgray";

  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "darkslategray";
  }
}

function colorizeSliders(color, hue, brightnes, saturation) {
  // Scale colors
  const chromaColor = chroma(color);

  const noSaturation = chromaColor.set("hsl.s", 0);
  const fullSaturation = chromaColor.set("hsl.s", 1);
  const scaleSaturation = chroma.scale([
    noSaturation,
    chromaColor,
    fullSaturation,
  ]);

  const midBrightnes = chromaColor.set("hsl.l", 0.5);
  const scaleBrightnes = chroma.scale(["black", midBrightnes, "white"]);

  // Update Input Colors
  saturation.style.backgroundImage = `linear-gradient(to right, ${scaleSaturation(
    0
  )}, ${scaleSaturation(0.5)}, ${scaleSaturation(1)})`;

  brightnes.style.backgroundImage = `linear-gradient(to right, ${scaleBrightnes(
    0
  )}, ${scaleBrightnes(0.5)}, ${scaleBrightnes(1)})`;

  hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75), rgb(204,204,75), rgb(75,204,75), rgb(75,204,204), rgb(75,75,204), rgb(204,75,204), rgb(204,75,75)`;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const randomColor = generateHex();
    const hexText = div.querySelector("h2");

    hexText.innerText = randomColor;
    div.style.background = randomColor;

    // Check for contrast
    checkTextContrast(randomColor, hexText);

    // Initial Colorize Sliders
    const chromaColor = chroma(randomColor);
    const sliders = div.querySelectorAll(".sliders input");
    const hue = sliders[0];
    const brightnes = sliders[1];
    const saturation = sliders[2];

    colorizeSliders(randomColor, hue, brightnes, saturation);
  });
}

randomColors();
