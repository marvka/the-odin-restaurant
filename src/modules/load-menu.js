import { createElement, createHeader, createFooter } from "./dom-manip";
import { meals } from "./meals";

function createImage(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.classList.add("menu-item");
  return image;
}

function createMealBlock(itemName, itemDescription, imageSrc, imageAlt) {
  const li = createElement("li");
  const image = createImage(imageSrc, imageAlt);

  const descriptionDiv = createElement("div", 0, [
    "class",
    "menu-item-description",
  ]);
  const title = createElement("h4", itemName);
  const description = createElement("p", itemDescription);

  descriptionDiv.appendChild(title);
  descriptionDiv.appendChild(description);

  li.appendChild(image);
  li.appendChild(descriptionDiv);

  return li;
}

export function loadMenu() {
  const content = document.querySelector("div#content");
  content.innerHTML = "";
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
