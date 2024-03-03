const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = () => {
  const size = (text.style.fontSize = `${range.value}px`);
  console.log(size);
};

range.addEventListener("input", changeFontSize);
