import {
  createElement,
  createHeader,
  createFooter,
  createForm,
} from "./dom-manip";

export function loadContact() {
  const content = document.querySelector("div#content");

  const main = createElement("main");
  main.appendChild(createForm());

  content.appendChild(createHeader());
  content.appendChild(main);
  content.appendChild(createFooter());
}
