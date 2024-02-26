const items = document.querySelectorAll(".item");

console.log(`Number: ${items.length}`);

items.forEach((items) => {
  console.log(`Categoty: ${items.querySelector("h2").textContent}`);
  console.log(`Elements: ${items.querySelectorAll("li").length}`);
});
