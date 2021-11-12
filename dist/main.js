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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// export default function loadPage() {\n//   console.log('loadPage running');\n//   const content = document.querySelector('#content');\n//   content.appendChild(createNavbar());\n// }\n\nconst loadPage = () => {\n  const content = document.querySelector('#content');\n  content.appendChild(createNavbar());\n  content.appendChild(createHero());\n  content.appendChild(createIntro());\n  content.appendChild(createFoodDisplay());\n  content.appendChild(createFooter());\n}\n\nconst createNavbar = () => {\n  const navbar = document.createElement('nav');\n  navbar.classList.add('navbar');\n  const navbarBrand = document.createElement('div');\n  navbarBrand.classList.add('navbar-brand');\n  const navbarBrandItem = document.createElement('div');\n  navbarBrandItem.classList.add('navbar-item');\n  navbarBrandItem.innerHTML = 'Good Eats Co.';\n  \n  navbar.appendChild(navbarBrand);\n  navbarBrand.appendChild(navbarBrandItem);\n  return navbar;\n}\n\nconst createHero = () => {\n  const hero = document.createElement('section');\n  hero.classList.add('hero', 'is-primary');\n  const heroBody = document.createElement('div');\n  heroBody.classList.add('hero-body', 'has-text-centered');\n  const heroTitle = document.createElement('h1');\n  heroTitle.classList.add('title', 'is-1');\n  heroTitle.innerHTML = 'Good Eats Co.';\n  const heroSubtitle = document.createElement('h2');\n  heroSubtitle.classList.add('subtitle', 'is-3');\n  heroSubtitle.innerHTML = '(Definitely up to code)';\n\n  hero.appendChild(heroBody);\n  heroBody.appendChild(heroTitle);\n  heroBody.appendChild(heroSubtitle);\n  return hero;\n}\n\nconst createIntro = () => {\n  const introSection = document.createElement('section');\n  introSection.classList.add('section', 'container');\n  const introText = document.createElement('p');\n  introText.innerHTML = 'Hello and welcome to my new Greek restaurant! We are very good at cooking and hope that you are not. Come eat our authentic foods!';\n  introSection.appendChild(introText);\n  return introSection;\n}\n\nconst createFoodDisplay = () => {\n  const foodDisplay = document.createElement('div');\n  foodDisplay.classList.add('container');\n  const foodDisplaySection = document.createElement('section');\n  foodDisplaySection.classList.add('food', 'tile', 'is-ancestor');\n  \n  foodDisplay.appendChild(foodDisplaySection);\n  foodDisplaySection.appendChild(createFoodItem('/src/souvlaki-meal.jpg'));\n  foodDisplaySection.appendChild(createFoodItem('/src/pastitsio.jpg'));\n  foodDisplaySection.appendChild(createFoodItem('/src/gyro.jpg'));\n  return foodDisplay;\n}\n\nconst createFoodItem = (picture) => {\n  const parentTile = document.createElement('div');\n  parentTile.classList.add('tile', 'is-parent', 'is-4');\n  const childTile = document.createElement('div');\n  childTile.classList.add('tile', 'is-child', 'box');\n  const foodImageContainer = document.createElement('figure');\n  foodImageContainer.classList.add('image');\n  const foodImage = document.createElement('img');\n  foodImage.src = picture;\n\n  parentTile.appendChild(childTile);\n  childTile.appendChild(foodImageContainer);\n  foodImageContainer.appendChild(foodImage);\n  return parentTile;\n}\n\nconst createFooter = () => {\n  const footerContainer = document.createElement('div');\n  footerContainer.classList.add('container');\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n  const footerContent = document.createElement('div');\n  footerContent.classList.add('content', 'has-text-centered');\n  const footerText = document.createElement('p');\n  footerText.innerHTML = '&copy; 2019 Good Eats Co.';\n  const footerTextName = document.createElement('p');\n  footerTextName.innerHTML = 'Created by: <a href=\"https://www.github.com/harmolipi\" target=\"_blank\">@harmolipi</a>';\n  \n  footerContainer.appendChild(footer);\n  footer.appendChild(footerContent);\n  footerContent.appendChild(footerText);\n  footerContent.appendChild(footerTextName);\n  return footerContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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