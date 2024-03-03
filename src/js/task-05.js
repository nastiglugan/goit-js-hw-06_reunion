const inputValue = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

inputValue.addEventListener("input", onInput);

function onInput(event) {
  spanValue.textContent = event.currentTarget.value || "Anonymous";
}
