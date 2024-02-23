const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

function submitHandler(event) {
  event.preventDefault();

  const data = {
    email: event.target.email.value.trim(),
    password: event.target.password.value.replace(" ", "").trim(),
  };
  console.log(data);

  inputs.forEach((input) => {
    if (input.value === "") {
      alert("All form fields must be filled in");
    }
  });

  form.reset();
}

form.addEventListener("submit", submitHandler);
