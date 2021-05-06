/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load-contact */ \"./src/modules/load-contact.js\");\n/* harmony import */ var _modules_load_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load-home */ \"./src/modules/load-home.js\");\n/* harmony import */ var _modules_load_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load-menu */ \"./src/modules/load-menu.js\");\n\n\n\n\nfunction highlightActiveTab() {\n  // adds a class of \"active-tab\" to the header tab with the given ID\n  console.log(this);\n  loadPage(this.id);\n  for (const tab of document.querySelectorAll(\".tab\")) {\n    tab.classList.remove(\"active-tab\");\n    if (tab.id === this.id) {\n      tab.classList.add(\"active-tab\");\n    }\n  }\n}\n\nfunction addEventListeners() {\n  const tabs = document.querySelectorAll(\".tab\");\n  tabs.forEach((tab) => {\n    tab.addEventListener(\"click\", highlightActiveTab);\n    console.log(\"EventListener added\");\n  });\n}\n\nfunction loadPage(page) {\n  document.querySelector(\"#content\").innerHTML = \"\";\n  switch (page) {\n    case \"home\":\n      (0,_modules_load_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n      addEventListeners();\n      break;\n\n    case \"menu\":\n      (0,_modules_load_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n      addEventListeners();\n      break;\n\n    case \"contact\":\n      (0,_modules_load_contact__WEBPACK_IMPORTED_MODULE_0__.loadContact)();\n      addEventListeners();\n      break;\n  }\n}\n\nloadPage(\"home\");\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom-manip.js":
/*!**********************************!*\
  !*** ./src/modules/dom-manip.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createMealBlock\": () => (/* binding */ createMealBlock),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createForm\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createElement(elementName, elementContent, ...attributePairs) {\n  // Creates an HTML element with elementContent and x attributes\n  // Takes in additional attributes as [name,value] pairs\n  const element = document.createElement(elementName);\n  if (elementContent) element.textContent = elementContent;\n  for (let attribute of attributePairs) {\n    if (Array.isArray(attribute)) {\n      const attributeName = attribute[0];\n      const attributeValue = attribute[1];\n      element.setAttribute(attributeName, attributeValue);\n    }\n  }\n  return element;\n}\n\nfunction createImage(src, alt) {\n  const image = document.createElement(\"img\");\n  image.src = src;\n  image.alt = alt;\n  image.classList.add(\"menu-item\");\n  return image;\n}\n\nfunction createMealBlock(itemName, itemDescription, imageSrc, imageAlt) {\n  const li = createElement(\"li\");\n  const image = createImage(imageSrc, imageAlt);\n\n  const descriptionDiv = createElement(\"div\", 0, [\n    \"class\",\n    \"menu-item-description\",\n  ]);\n  const title = createElement(\"h4\", itemName);\n  const description = createElement(\"p\", itemDescription);\n\n  descriptionDiv.appendChild(title);\n  descriptionDiv.appendChild(description);\n\n  li.appendChild(image);\n  li.appendChild(descriptionDiv);\n\n  return li;\n}\n\nfunction createHeader() {\n  const header = createElement(\"header\");\n  const title = createElement(\"h1\", \"The Odin Restaurant\", [\"id\", \"title\"]);\n  const nav = createElement(\"nav\");\n  const aHome = createElement(\"a\", \"Home\", [\"id\", \"home\"], [\"class\", \"tab\"]);\n  const aMenu = createElement(\"a\", \"Menu\", [\"id\", \"menu\"], [\"class\", \"tab\"]);\n  const aContact = createElement(\n    \"a\",\n    \"Contact\",\n    [\"id\", \"contact\"],\n    [\"class\", \"tab\"]\n  );\n\n  const footer = createElement(\"footer\");\n  footer.innerHTML =\n    'Crafted by <a href=\"https://github.com/marvka\">marvka</a> for <a href=\"https://www.theodinproject.com/\">The Odin Project</a>';\n  header.appendChild(title);\n  nav.appendChild(aHome);\n  nav.appendChild(aMenu);\n  nav.appendChild(aContact);\n  header.appendChild(nav);\n  return header;\n}\n\nfunction createFooter() {\n  const footer = createElement(\"footer\");\n  footer.innerHTML =\n    'Crafted by <a href=\"https://github.com/marvka\">marvka</a> for <a href=\"https://www.theodinproject.com/\">The Odin Project</a>';\n  return footer;\n}\n\nfunction createForm() {\n  const form = createElement(\"form\", null, [\"id\", \"contact-form\"]);\n  form.appendChild(createElement(\"label\", \"Name:\", [\"for\", \"name\"]));\n  form.appendChild(\n    createElement(\n      \"input\",\n      0,\n      [\"type\", \"text\"],\n      [\"id\", \"name\"],\n      [\"name\", \"name\"]\n    )\n  );\n\n  form.appendChild(createElement(\"label\", \"Email:\", [\"for\", \"email\"]));\n  form.appendChild(\n    createElement(\n      \"input\",\n      0,\n      [\"type\", \"text\"],\n      [\"id\", \"email\"],\n      [\"name\", \"email\"]\n    )\n  );\n\n  form.appendChild(createElement(\"label\", \"Message:\", [\"for\", \"message\"]));\n  form.appendChild(\n    createElement(\"textarea\", 0, [\"id\", \"message\"], [\"name\", \"message\"])\n  );\n\n  form.appendChild(\n    createElement(\"input\", 0, [\"type\", \"submit\"], [\"value\", \"Send message\"])\n  );\n  return form;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/dom-manip.js?");

/***/ }),

/***/ "./src/modules/load-contact.js":
/*!*************************************!*\
  !*** ./src/modules/load-contact.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ \"./src/modules/dom-manip.js\");\n\n\nfunction loadContact() {\n  const content = document.querySelector(\"div#content\");\n\n  const main = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"main\");\n  main.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createForm)());\n\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  content.appendChild(main);\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/load-contact.js?");

/***/ }),

/***/ "./src/modules/load-home.js":
/*!**********************************!*\
  !*** ./src/modules/load-home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ \"./src/modules/dom-manip.js\");\n\n\nfunction loadHome() {\n  const content = document.querySelector(\"div#content\");\n  const main = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"main\");\n  const section = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"section\", null, [\"id\", \"about\"]);\n  let p = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n    \"p\",\n    \"We cook up the finest divs, the spiciest scripts and the juiciest layouts!\"\n  );\n  section.appendChild(p);\n  p = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\");\n  p.innerHTML =\n    'For more delicacies, please check out <a href=\"https://www.theodinproject.com/\">The Odin Project</a>.';\n  section.appendChild(p);\n  p = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n    \"p\",\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam error provident molestiae quae tempore.\"\n  );\n  section.appendChild(p);\n  main.appendChild(section);\n\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  document.getElementById(\"home\").classList.add(\"active-tab\");\n  content.appendChild(main);\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/load-home.js?");

/***/ }),

/***/ "./src/modules/load-menu.js":
/*!**********************************!*\
  !*** ./src/modules/load-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ \"./src/modules/dom-manip.js\");\n/* harmony import */ var _meals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meals */ \"./src/modules/meals.js\");\n\n\n\nfunction loadMenu() {\n  const content = document.querySelector(\"div#content\");\n  const main = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"main\");\n  const section = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"section\", null, [\"id\", \"menu\"]);\n  const list = (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\");\n\n  for (const meal of _meals__WEBPACK_IMPORTED_MODULE_1__.meals) {\n    list.appendChild(\n      (0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createMealBlock)(meal.name, meal.description, meal.imgSrc, meal.imgAlt)\n    );\n  }\n\n  section.appendChild(list);\n  main.appendChild(section);\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n  content.appendChild(main);\n  content.appendChild((0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/load-menu.js?");

/***/ }),

/***/ "./src/modules/meals.js":
/*!******************************!*\
  !*** ./src/modules/meals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meals\": () => (/* binding */ meals)\n/* harmony export */ });\nclass Meal {\n  constructor(name, description, imgSrc, imgAlt) {\n    this._name = name;\n    this._description = description;\n    this._imgSrc = imgSrc;\n    this._imgAlt = imgAlt;\n  }\n\n  get name() {\n    return this._name;\n  }\n\n  get description() {\n    return this._description;\n  }\n\n  get imgSrc() {\n    return this._imgSrc;\n  }\n\n  get imgAlt() {\n    return this._imgAlt;\n  }\n}\nconst meals = [];\n\nmeals.push(\n  new Meal(\n    \"Burger\",\n    \"Made with housemade buns and fresh vegetables.\",\n    \"assets/burger.jpg\",\n    \"An image of a burger\"\n  ),\n  new Meal(\n    \"Fish and Chips\",\n    \"Nicely fried chips, nicely fried fish. Can't go wrong with it.\",\n    \"assets/fish-and-chips.jpg\",\n    \"An image of fish and chips\"\n  ),\n  new Meal(\n    \"Pizza\",\n    \"Who doesn't love a good Pizza?\",\n    \"assets/pizza.jpg\",\n    \"An image of a pizza\"\n  ),\n  new Meal(\n    \"Stir Fry\",\n    \"A delicious stir fry made from fresh local produce, served with steaming rice\",\n    \"assets/stir-fry.jpg\",\n    \"An image of a stir fry\"\n  )\n);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/meals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;