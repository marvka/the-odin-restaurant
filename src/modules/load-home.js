import { createElement, createHeader, createFooter } from "./dom-manip";

export function loadHome() {
  const content = document.querySelector("div#content");
  content.innerHTML = "";
  const main = createElement("main");
  const section = createElement("section", null, ["id", "about"]);
  let p = createElement(
    "p",
    "We cook up the finest divs, the spiciest scripts and the juiciest layouts!"
  );
  section.appendChild(p);
  p = createElement("p");
  p.innerHTML =
    'For more delicacies, please check out <a href="https://www.theodinproject.com/">The Odin Project</a>.';
  section.appendChild(p);
  p = createElement(
    "p",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam error provident molestiae quae tempore."
  );
  section.appendChild(p);
  main.appendChild(section);

  content.appendChild(createHeader());
  content.appendChild(main);
  content.appendChild(createFooter());
}
