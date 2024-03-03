const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");

const markup = ingredients.map((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");

  return elem;
});

ingredientsList.append(...markup);
