const boxes = document.getElementById("boxes");
const controls = document.querySelectorAll("button");

const input = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function clickHandlerCreate() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

function clickHandlerDestroy() {
  boxes.innerHTML = "";
}

controls[0].addEventListener("click", clickHandlerCreate);
controls[1].addEventListener("click", clickHandlerDestroy);
