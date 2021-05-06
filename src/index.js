import { loadContact } from "./modules/load-contact";
import { loadHome } from "./modules/load-home";
import { loadMenu } from "./modules/load-menu";

function highlightActiveTab() {
  // adds a class of "active-tab" to the header tab with the given ID
  console.log(this);
  loadPage(this.id);
  for (const tab of document.querySelectorAll(".tab")) {
    tab.classList.remove("active-tab");
    if (tab.id === this.id) {
      tab.classList.add("active-tab");
    }
  }
}

function addEventListeners() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", highlightActiveTab);
    console.log("EventListener added");
  });
}

function loadPage(page) {
  document.querySelector("#content").innerHTML = "";
  switch (page) {
    case "home":
      loadHome();
      addEventListeners();
      break;

    case "menu":
      loadMenu();
      addEventListeners();
      break;

    case "contact":
      loadContact();
      addEventListeners();
      break;
  }
}

loadPage("home");
