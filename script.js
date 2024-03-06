const PIXEL_WIDTH = 20;
const PIXEL_HEIGHT = 20;
const GAP = 1;

const sketchContainer = document.getElementById("sketch-container");

function createPixel() {
  const pixel = document.createElement("div");
  pixel.style.width = PIXEL_WIDTH + "px";
  pixel.style.height = PIXEL_HEIGHT + "px";
  pixel.style.backgroundColor = "red";
  pixel.className = "pixel";
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "blue";
  });
  pixel.hoverCount = 0;
  pixel.addEventListener("mouseout",() => {
    if (pixel.hoverCount < 10) {
        pixel.hoverCount++;
    }
    pixel.style.backgroundColor = "orange";
    // hsl(hue, saturation, lightness)

  });
  return pixel;
}

let pixelsWide = 16;
let pixelsTall = 16;

sketchContainer.style.width =
  pixelsWide * PIXEL_WIDTH + (pixelsWide - 1) * GAP + "px";

for (let y = 0; y < pixelsWide; y++) {
  for (let x = 0; x < pixelsWide; x++) {
    sketchContainer.appendChild(createPixel());
  }
}
