const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener("blur", verification);

function verification(event) {
  const maxLength = Number(inputValue.dataset.length);

  const currentLength = event.currentTarget.value.length;

  inputValue.classList.remove("valid");
  inputValue.classList.add("invalid");

  if (currentLength === maxLength) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
}
