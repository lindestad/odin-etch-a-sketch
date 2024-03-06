const PIXEL_WIDTH = 20;
const PIXEL_HEIGHT = 20;
const GAP = 2;
const SKETCH_WIDTH = 600;

const sketchContainer = document.getElementById("sketch-container");
sketchContainer.style.width = SKETCH_WIDTH + "px";
sketchContainer.style.height = SKETCH_WIDTH + "px";

function createPixel(width = 20) {
  const pixel = document.createElement("div");
  pixel.style.width = width + "px";
  pixel.style.height = width + "px";
  pixel.style.backgroundColor = "red";
  pixel.style.margin = GAP + "px";
  pixel.className = "pixel";
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "blue";
  });
  pixel.hoverCount = 0;
  pixel.addEventListener("mouseout", () => {
    // pixel.style.backgroundColor = "orange";
    if (pixel.hoverCount < 10) {
      if (pixel.hoverCount === 0) {
        // set RGB value
        let randomRGB = Math.floor(Math.random() * 255);
        // hsl(hue, saturation, lightness)
        pixel.style.backgroundColor = "hsl(" + randomRGB + ", 100%, 50%)";
        pixel.RGBvalue = randomRGB;
      } else {
        // use stored RGB value, darken pixel
        let hslString =
          "hsl(" +
          pixel.RGBvalue +
          ", 100%, " +
          (50 - pixel.hoverCount * 5) +
          "%)";
        pixel.style.backgroundColor = hslString;
      }
      pixel.hoverCount++;
    } else {
      pixel.style.backgroundColor = "black";
    }
  });
  return pixel;
}

function calculatePixelSize(containerWidth, nPixelsPerRow, gap = 1) {
  const pixelWidth = Math.floor(containerWidth / nPixelsPerRow) - gap * 2;
  return pixelWidth;
}

function initializeSketchScreen(container, nPixelsPerRow) {
  container.replaceChildren();
  for (let y = 0; y < nPixelsPerRow; y++) {
    let pixelRow = document.createElement("div");
    pixelRow.className = "pixel-row";
    pixelRow.style.width = SKETCH_WIDTH + "px";
    for (let x = 0; x < nPixelsPerRow; x++) {
      pixelRow.appendChild(
        createPixel(calculatePixelSize(SKETCH_WIDTH, nPixelsPerRow, GAP))
      );
    }
    container.appendChild(pixelRow);
  }
  return;
}

initializeSketchScreen(sketchContainer, 22);

const slider = document.getElementById("myRange");
slider.oninput = function () {
  initializeSketchScreen(sketchContainer, this.value);
};
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};
