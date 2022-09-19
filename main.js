const btnChange = document.querySelector(".btnChange");
const btnReset = document.querySelector(".btnReset");
const heading1 = document.querySelector(".section1");
const heading = document.querySelector(".heading");
const rgbText = document.querySelector(".rgbText");
const times = document.querySelector(".times");
const body = document.body;

function generateNum() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  let rgb1 = generateNum();
  let rgb2 = generateNum();
  let rgb3 = generateNum();

  let theColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  document.body.style.background = theColor;
  heading1.style.color = "white";
  heading.textContent = `Color has been changed`;
  times.textContent++;
  rgbText.textContent = theColor;
}

function btnResett() {
  heading.textContent = `Change your color here!`;
  times.textContent = 0;
  body.style.background = "#ffffff ";
  heading1.style.color = "#000000 ";
  rgbText.textContent = "This will show the rgb";
}
btnChange.addEventListener("click", generateColor);
btnReset.addEventListener("click", btnResett);
