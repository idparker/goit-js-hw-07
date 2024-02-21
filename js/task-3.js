const input = document.querySelector("input");
let value = document.querySelector("#name-output");

function inputHandler(event) {
  const inputValueTrim = event.target.value.trim();

  if (inputValueTrim !== "") {
    value.textContent = event.target.value;
  } else {
    value.textContent = "Anonymous";
  }

  console.log(value.textContent);
}

document.addEventListener("input", inputHandler);
