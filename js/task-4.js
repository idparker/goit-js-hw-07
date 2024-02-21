const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

function submitHandler(event) {
  event.preventDefault();

  const data = {
    email: event.target.email.value,
    password: event.target.password.value,
  };
  console.log(data);

  let isEmpty = false;

  inputs.forEach((input) => {
    if (input.value === "") {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert("All form fields must be filled in");
  } else {
    form.reset();
  }
}

document.addEventListener("submit", submitHandler);
