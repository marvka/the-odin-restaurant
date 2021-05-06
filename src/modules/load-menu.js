import {
  createElement,
  createHeader,
  createFooter,
  createMealBlock,
} from "./dom-manip";
import { meals } from "./meals";

export function loadMenu() {
  const content = document.querySelector("div#content");
  const main = createElement("main");
  const section = createElement("section", null, ["id", "menu"]);
  const list = createElement("ul");

  for (const meal of meals) {
    list.appendChild(
      createMealBlock(meal.name, meal.description, meal.imgSrc, meal.imgAlt)
    );
  }

  section.appendChild(list);
  main.appendChild(section);
  content.appendChild(createHeader());
  content.appendChild(main);
  content.appendChild(createFooter());
}
