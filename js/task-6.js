const boxes = document.getElementById("boxes");
const controls = document.querySelectorAll("button");

const input = document.querySelector("input");
input.value = 1;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const box = document.createElement("div");

  input.value = amount;

  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  boxes.append(box);
  input.value++;
}

function clickHandlerCreate() {
  const amount = Number(input.value);
  if (amount >= 1 && amount < 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

function clickHandlerDestroy() {
  boxes.innerHTML = "";
  input.value = 1;
}

controls[0].addEventListener("click", clickHandlerCreate);
controls[1].addEventListener("click", clickHandlerDestroy);
