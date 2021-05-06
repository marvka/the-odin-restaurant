class Meal {
  constructor(name, description, imgSrc, imgAlt) {
    this._name = name;
    this._description = description;
    this._imgSrc = imgSrc;
    this._imgAlt = imgAlt;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get imgSrc() {
    return this._imgSrc;
  }

  get imgAlt() {
    return this._imgAlt;
  }
}
export const meals = [];

meals.push(
  new Meal(
    "Burger",
    "Made with housemade buns and fresh vegetables.",
    "assets/burger.jpg",
    "An image of a burger"
  ),
  new Meal(
    "Fish and Chips",
    "Nicely fried chips, nicely fried fish. Can't go wrong with it.",
    "assets/fish-and-chips.jpg",
    "An image of fish and chips"
  ),
  new Meal(
    "Pizza",
    "Who doesn't love a good Pizza?",
    "assets/pizza.jpg",
    "An image of a pizza"
  ),
  new Meal(
    "Stir Fry",
    "A delicious stir fry made from fresh local produce, served with steaming rice",
    "assets/stir-fry.jpg",
    "An image of a stir fry"
  )
);
