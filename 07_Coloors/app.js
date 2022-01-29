const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
const popupCopyContainer = document.querySelector(".copy-container");

const lockBtn = document.querySelectorAll(".lock");
const adjustBtn = document.querySelectorAll(".adjust");
const adjustCloseBtn = document.querySelectorAll(".close-adjustment");

const sliderContainers = document.querySelectorAll(".sliders");

const colorsStorage = [];

// For local storage
let savedPaletts = [];

generateBtn.addEventListener("click", (event) => {
  randomColors();
});

sliders.forEach((slider) => {
  slider.addEventListener("input", hslControls);
});

colorDivs.forEach((div, index) => {
  div.addEventListener("change", () => {
    updateTextUi(index);
  });
});

currentHexes.forEach((hex, index) => {
  hex.addEventListener("click", () => {
    copyToClipboard(hex);
    popupCopyToClipboard(hex);
  });
});

lockBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleLockClass(button, index);
  });
});

adjustBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleAdjustmentPanel(index);
  });
});

adjustCloseBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    closeAdjustmentPanel(index);
  });
});

popupCopyContainer.addEventListener("transitionend", () => {
  const popupBox = popupCopyContainer.children[0];
  popupCopyContainer.classList.remove("active");
  popupBox.classList.remove("active");
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
    const locked = colorDivs[index].classList.contains("locked");
    if (locked) {
      return;
    }

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

  colorDivs.forEach((div, i) => {
    updateTextUi(i);
  });

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

function copyToClipboard(hex) {
  const proxy = document.createElement("textarea");
  proxy.value = hex.innerText;
  document.body.appendChild(proxy);
  proxy.select();
  //document.execCommand("copy"); // Obsolete

  const selection = window.getSelection();
  navigator.clipboard.writeText(selection.toString());

  document.body.removeChild(proxy);
}

function popupCopyToClipboard(hex) {
  const popupBox = popupCopyContainer.children[0];
  popupCopyContainer.classList.add("active");
  popupBox.classList.add("active");
}

function toggleLockClass(button, index) {
  colorDivs[index].classList.toggle("locked");

  const iconTag = lockBtn[index].querySelector("i");

  iconTag.classList.toggle("fa-lock-open");
  iconTag.classList.toggle("fa-lock");
}

function toggleAdjustmentPanel(index) {
  sliderContainers[index].classList.toggle("active");
}
function closeAdjustmentPanel(index) {
  sliderContainers[index].classList.remove("active");
}

// Implement Save to palette and LOCAL STORAGE STUFF
const saveBtn = document.querySelector(".save");
const submitSave = document.querySelector(".submit-save");
const closeSaveBtn = document.querySelector(".close-save");

const saveContainer = document.querySelector(".save-container");
const saveInput = document.querySelector(".save-container input");

const libraryContainer = document.querySelector(".library-container");
const libraryBtn = document.querySelector(".library");
const closeLibraryBtn = document.querySelector(".close-library");

// event listeners
saveBtn.addEventListener("click", openPalette);
function openPalette(event) {
  const popup = saveContainer.children[0];
  saveContainer.classList.add("active");
  popup.classList.add("active");
}

closeSaveBtn.addEventListener("click", closePalette);
function closePalette(event) {
  const popup = saveContainer.children[0];
  saveContainer.classList.remove("active");
  popup.classList.remove("active");
}

submitSave.addEventListener("click", savePalette);
function savePalette(event) {
  const popup = saveContainer.children[0];
  saveContainer.classList.remove("active");
  popup.classList.remove("active");

  const name = saveInput.value;
  const colors = [];
  currentHexes.forEach((hex) => {
    colors.push(hex.innerText);
  });

  let palleteNr = savedPaletts.length;
  const paletteObj = { name, colors, nr: palleteNr };
  savedPaletts.push(paletteObj);

  saveToLocal(paletteObj);

  saveInput.value = "";

  // Generate the palette for the library
  const palette = document.createElement("div");
  palette.classList.add("custom-palette");

  const title = document.createElement("h4");
  title.innerText = paletteObj.name;

  const preview = document.createElement("div");
  preview.classList.add("small-preview");

  paletteObj.colors.forEach((color) => {
    const smallDiv = document.createElement("div");
    smallDiv.style.backgroundColor = color;
    preview.appendChild(smallDiv);
  });
  const paletteBtn = document.createElement("button");
  paletteBtn.classList.add("pick-palette-btn");
  paletteBtn.classList.add(paletteObj.nr);
  paletteBtn.innerText = "Select";

  paletteBtn.addEventListener("click", (e) => {
    closeLibrary();
    const paletteIndex = e.target.classList[1]; // weird just-a-number class set in savePalette()
    savedPaletts[paletteIndex].colors.forEach((color, index) => {
      colorsStorage[index] = color;
      colorDivs[index].style.background = color;
      updateTextUi(index);
    });
  });

  // Append to library
  palette.appendChild(title);
  palette.appendChild(preview);
  palette.appendChild(paletteBtn);

  libraryContainer.children[0].appendChild(palette);
}

libraryBtn.addEventListener("click", openLibrary);
function openLibrary(event) {
  const popup = libraryContainer.children[0];
  libraryContainer.classList.add("active");
  popup.classList.add("active");
}

closeLibraryBtn.addEventListener("click", closeLibrary);
function closeLibrary(event) {
  const popup = libraryContainer.children[0];
  libraryContainer.classList.remove("active");
  popup.classList.remove("active");
}

function saveToLocal(palleteObj) {
  let localPalletes = JSON.parse(localStorage.getItem("palletes"));
  if (!localPalletes) {
    localPalletes = [];
  }

  localPalletes.push(palleteObj);
  localStorage.setItem("palletes", JSON.stringify(localPalletes));
}

randomColors();
