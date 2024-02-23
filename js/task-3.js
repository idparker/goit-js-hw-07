const input = document.querySelector("input");
let output = document.querySelector("#name-output");

function inputHandler(event) {
  const inputValueTrim = event.target.value.trim();

  if (inputValueTrim == "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputValueTrim;
  }
}

input.addEventListener("input", inputHandler);
