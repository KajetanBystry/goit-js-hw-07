const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addIngredients(){
  const ulAdd = document.querySelector("#ingredients");
ingredients.forEach(element => {
  const addEl = document.createElement("li");
  addEl.textContent = element;
  addEl.classList.add("item");
  ulAdd.append(addEl);
})
}

addIngredients()