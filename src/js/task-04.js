let counter = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("span");

decrementBtn.addEventListener("click", onClickDec);
incrementBtn.addEventListener("click", onClickInc);

function onClickDec(evt) {
  counter -= 1;
  value.textContent = counter;
}

function onClickInc(evt) {
  counter += 1;
  value.textContent = counter;
}
