const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

function submitHandler(event) {
  event.preventDefault();

  const data = {
    email: event.target.email.value.trim(),
    password: event.target.password.value.trim(),
  };

  if (event.target.email.value === "" || event.target.password.value === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(data);
  }

  form.reset();
}

form.addEventListener("submit", submitHandler);
