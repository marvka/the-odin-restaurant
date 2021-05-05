export function createElement(elementName, elementContent, ...attributePairs) {
  // Creates an HTML element with elementContent and x attributes
  // Takes in additional attributes as [name,value] pairs
  const element = document.createElement(elementName);
  if (elementContent) element.textContent = elementContent;
  for (let attribute of attributePairs) {
    if (Array.isArray(attribute)) {
      const attributeName = attribute[0];
      const attributeValue = attribute[1];
      element.setAttribute(attributeName, attributeValue);
    }
  }
  return element;
}

export function createImage(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.classList.add("menu-item");
  return image;
}

export function createMealBlock(itemName, itemDescription, imageSrc, imageAlt) {
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

export function createHeader() {
  const header = createElement("header");
  const title = createElement("h1", "The Odin Restaurant", ["id", "title"]);
  const nav = createElement("nav");
  const aHome = createElement("a", "Home", ["class", "active-tab"]);
  const aMenu = createElement("a", "Menu");
  const aContact = createElement("a", "Contact");

  const footer = createElement("footer");
  footer.innerHTML =
    'Crafted by <a href="https://github.com/marvka">marvka</a> for <a href="https://www.theodinproject.com/">The Odin Project</a>';
  header.appendChild(title);
  nav.appendChild(aHome);
  nav.appendChild(aMenu);
  nav.appendChild(aContact);
  header.appendChild(nav);
  return header;
}

export function createFooter() {
  const footer = createElement("footer");
  footer.innerHTML =
    'Crafted by <a href="https://github.com/marvka">marvka</a> for <a href="https://www.theodinproject.com/">The Odin Project</a>';
  return footer;
}
