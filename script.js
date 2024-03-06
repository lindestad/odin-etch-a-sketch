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

let pixelsWide = 16;
let pixelsTall = 16;

sketchContainer.style.width =
  pixelsWide * PIXEL_WIDTH + (pixelsWide - 1) * GAP + "px";

for (let y = 0; y < pixelsWide; y++) {
  for (let x = 0; x < pixelsWide; x++) {
    sketchContainer.appendChild(createPixel());
  }
}
