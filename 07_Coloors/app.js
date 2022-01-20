const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");

const colorsStorage = [];

sliders.forEach((slider) => {
  slider.addEventListener("input", hslControls);
});

colorDivs.forEach((div, index) => {
  div.addEventListener("change", () => {
    updateTextUi(index);
  });
});

function generateHex() {
  return chroma.random();
}

function checkTextContrast(color, textElement) {
  textElement.style.color = "white";

  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    textElement.style.color = "black";
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
    colorsStorage[index] = randomColor;

    const hexText = div.querySelector("h2");

    hexText.innerText = randomColor;
    div.style.background = randomColor;

    // Initial Colorize Sliders
    const sliders = div.querySelectorAll(".sliders input");
    const hue = sliders[0];
    const brightnes = sliders[1];
    const saturation = sliders[2];

    colorizeSliders(randomColor, hue, brightnes, saturation);
  });

  [0, 1, 2].forEach((i) => updateTextUi(i));
  resetInputs();
}

function hslControls(event) {
  const target = event.target;
  const index =
    target.getAttribute("data-hue") ||
    target.getAttribute("data-bright") ||
    target.getAttribute("data-saturation");

  const colorDiv = colorDivs[index];

  let sliderAll = target.parentElement.querySelectorAll("input[type='range']");
  const hueSlider = sliderAll[0];
  const brightnesSlider = sliderAll[1];
  const saturationSlider = sliderAll[2];

  const oldColor = colorsStorage[index];

  const newColor = chroma(oldColor)
    .set("hsl.s", saturationSlider.value)
    .set("hsl.h", hueSlider.value)
    .set("hsl.l", brightnesSlider.value);

  colorDiv.style.background = newColor;
  colorizeSliders(newColor, hueSlider, brightnesSlider, saturationSlider);
}

function updateTextUi(index) {
  const colorDiv = colorDivs[index];

  const color = chroma(colorDiv.style.backgroundColor);

  const colorH2 = colorDiv.querySelector("h2");
  colorH2.innerText = color;
  checkTextContrast(color, colorH2);

  const icons = colorDiv.querySelectorAll(".controls button");
  icons.forEach((element) => {
    checkTextContrast(color, element);
  });
}

function resetInputs() {
  const sliders = document.querySelectorAll('.sliders  input[type="range"]');
  sliders.forEach((slider, i) => {
    const sliderIndex =
      slider.getAttribute("data-hue") ||
      slider.getAttribute("data-bright") ||
      slider.getAttribute("data-saturation");

    const colorChroma = chroma(colorsStorage[sliderIndex]);

    if (slider.name === "hue") {
      slider.value = Math.floor(colorChroma.get("hsl.h"));
    }
    if (slider.name === "saturation") {
      slider.value = colorChroma.get("hsl.s");
    }
    if (slider.name === "brightnes") {
      slider.value = colorChroma.get("hsl.l");
    }
  });
}

randomColors();
