function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy");

input.addEventListener("input", getNumber);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let number = 0;
let size = 30;

function getNumber(event) {
  return (number = event.currentTarget.value);
}

const getInputNumber = (event) => {
  inputValue = event.currentTarget.value;
};

function createBoxes(number) {
  for (let i = 0; i < number; i += 1) {
    let markup = `<div class = "box"></div>`;
    boxes.insertAdjacentHTML("beforeend", markup);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
// createBtn.addEventListener("submit", createBoxes);

// function createBoxes(numbers) {
//   console.log("rrrr");
//   // let markup = `<div class="box"></div>`;
//   // console.log(markup);

//   // for (let i = 0; i <= numbers; i += 1) {
//   //   boxes.insertAdjacentHTML("beforeend", markup);
//   //   // markup.style.backgroundColor = getRandomHexColor();
//   //   // markup.style.width = "30px";
//   // }
// }
