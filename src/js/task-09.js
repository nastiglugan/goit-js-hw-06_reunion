function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
const widget = document.querySelector("body");

colorBtn.addEventListener("click", onClick);

function onClick() {
  widget.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
