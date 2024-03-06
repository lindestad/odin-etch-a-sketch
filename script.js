const PIXEL_WIDTH = 20;
const PIXEL_HEIGHT = 20;
const GAP = 1;
const SKETCH_WIDTH = 600;

const sketchContainer = document.getElementById("sketch-container");
sketchContainer.style.width = SKETCH_WIDTH + 'px';
sketchContainer.style.height = SKETCH_WIDTH + 'px';

function createPixel() {
  const pixel = document.createElement("div");
  pixel.style.width = PIXEL_WIDTH + "px";
  pixel.style.height = PIXEL_HEIGHT + "px";
  pixel.style.backgroundColor = "red";
  pixel.style.margin = GAP + 'px';
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

function initializeSketchScreen(container, nPixelsPerRow) {
  for (let y = 0; y < nPixelsPerRow; y++) {
    let pixelRow = document.createElement("div");
    pixelRow.className = 'pixel-row'
    pixelRow.style.width = SKETCH_WIDTH + 'px';
    for (let x = 0; x < nPixelsPerRow; x++) {
      pixelRow.appendChild(createPixel());
    }
    container.appendChild(pixelRow);
  }
  return;
}

function calculatePixelSize(containerWidth, gap) {

    return;
}

initializeSketchScreen(sketchContainer, 16);
