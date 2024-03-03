const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  //   const email = form.elements[0].value;
  //   const password = form.elements[1].value;

  const { email, password } = event.currentTarget.elements;

  if (!email || !password) {
    alert("Give some info about yourself!");
  }

  const info = {
    email: email.value,
    password: password.value,
  };

  console.log(info);

  form.reset();
}
