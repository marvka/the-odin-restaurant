import createElement from "./dom-manip";

function loadInitialPage() {
  const content = document.getElementById("content");
  const header = createElement("header");
  const title = createElement("h1", "The Odin Restaurant", ["id", "title"]);
  const nav = createElement("nav");
  const ahome = createElement("a", "Home");
  const aMenu = createElement("a", "Menu");
  const aContact = createElement("a", "Contact");
  const main = createElement("main");
  const section = createElement("section", null, ["id", "about"]);
  const footer = createElement("footer");
  footer.innerHTML =
    'Crafted by <a href="https://github.com/marvka">marvka</a> for <a href="https://www.theodinproject.com/">The Odin Project</a>';
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

  header.appendChild(title);
  nav.appendChild(ahome);
  nav.appendChild(aMenu);
  nav.appendChild(aContact);
  header.appendChild(nav);
  main.appendChild(section);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
}

export default loadInitialPage;
