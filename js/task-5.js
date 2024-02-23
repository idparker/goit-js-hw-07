const body = document.querySelector("body");
const btn = document.querySelector("button");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function clickHandler() {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = color.textContent;
}

btn.addEventListener("click", clickHandler);
