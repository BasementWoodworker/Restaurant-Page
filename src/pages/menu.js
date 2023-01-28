import createElementWithClassAndContent from "../create-element-custom-function.js";

const mealImages = require.context("../assets/meal-images", false, /\.jpg$/).keys();

function mealFactory(name, price, weight, ingridients, description) {
  return {
    name,
    price,
    weight,
    ingridients,
    description
  };
};

function mealArrayToDOM(mealArray) {
  const meals = createElementWithClassAndContent("div", "meals", "");
  mealArray.forEach(mealObject => meals.append(mealToDOM(mealObject)));
  return meals;
}

function mealToDOM(mealObject) {
  const wrapper = createElementWithClassAndContent("div", "meal-container-wrapper", "");
  const mealContainer = createElementWithClassAndContent("div", "meal-container", "");
  const mealImg = createElementWithClassAndContent("img","meal-image","");
  mealImg.src = mealImages.find(image => image === `./${mealObject.name}.jpg`)
  mealContainer.append(
    mealImg,
    createElementWithClassAndContent("div", "meal-name", mealObject.name),
    createElementWithClassAndContent("div", "meal-weight", `${mealObject.weight}g`),
    createElementWithClassAndContent("div", "meal-price", `\$${mealObject.price}`),
    createElementWithClassAndContent("div", "meal-spacer", ""),
    createElementWithClassAndContent("div", "meal-ingridients", `Ingridients: ${mealObject.ingridients}`),
    createElementWithClassAndContent("div", "meal-description", mealObject.description)
  );
  wrapper.appendChild(mealContainer);
  return wrapper;
}

const smallPlates = [
  mealFactory("MARINATED MUSHROOMS", 10, 190, "olive oil, tomato pulp, sherry vinegar", "Tender mushrooms soaked in a delectable mixture of extra virgin olive oil and vinegar flavored with garlic, shallots, fresh herbs and Italian seasonings."),
  mealFactory("BONE MARROW", 17, 350, "braised escargot, parsley breadcrumb, greens", "Classic gourmet dish with origins extending as far back as France in the 1600s."),
  mealFactory("FRENCH GREEN BEANS", 16, 290, "grated foie gras, almond-shallot vinaigrette", "Simple and elegant French green beans are the perfect side dish for just about any meal."),
  mealFactory("ANCHOVY TOAST", 8, 140, "parsley butter, country bread", "Deliciuous anchovy toast appetizer.")
];
const sharedPlates = [
  mealFactory("CURED SALMON", 16, 390, "beet & oranges", "Firm and silky fish."),
  mealFactory("RABBIT RILLETTE", 15, 310, "tomato confit, olives", "Tender rabbit leg, cooked in an aromatic mixture of stock and fat."),
  mealFactory("PORK RILLETTE", 11, 340, "rosemary, sweet & sour carrot", "Pork shoulder slow-cooked in an aromatic mixture of stock and fat."),
  mealFactory("PORK BELLY", 17, 380, "braised & roasted, apple", "Fresh pork belly, succulent and richly flavorful."),
  mealFactory("BEEF TARTARE", 17, 430, "capers, shallots, pastured eggs", "Nearly raw beef served with egg yolk.")
];
const desserts = [
  mealFactory("RASPBERRY TART", 11, 110, "raspberries, pistachio pastry cream, shortbread", "Classic French patisserie."),
  mealFactory("CHEESECAKE", 9, 90, "passion fruit, moscovado sugar crust", "Creamy, rich, and smooth dessert."),
  mealFactory("HELEN PEAR", 7, 80, "poached pear, chocolate sauce, almond parfait, candied almond", "Poached pears dipped in chocolate ganache.")
];

function fill(main) {
  main.replaceChildren();
  const menuContainer = createElementWithClassAndContent("div", "menu-container", "");
  menuContainer.append(
    createElementWithClassAndContent("div", "menu-heading", "SMALL PLATES"),
    createElementWithClassAndContent("div", "menu-spacer", ""),
    mealArrayToDOM(smallPlates)
  );
  menuContainer.append(
    createElementWithClassAndContent("div", "menu-heading", "SHARED PLATES"),
    createElementWithClassAndContent("div", "menu-spacer", ""),
    mealArrayToDOM(sharedPlates)
  )
  menuContainer.append(
    createElementWithClassAndContent("div", "menu-heading", "DESSERTS"),
    createElementWithClassAndContent("div", "menu-spacer", ""),
    mealArrayToDOM(desserts)
  )
  main.appendChild(menuContainer);
};

export default { fill };