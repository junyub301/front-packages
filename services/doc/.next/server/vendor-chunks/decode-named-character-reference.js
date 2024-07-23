"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/decode-named-character-reference";
exports.ids = ["vendor-chunks/decode-named-character-reference"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/decode-named-character-reference-npm-1.0.2-db17a755fd-10c0.zip/node_modules/decode-named-character-reference/index.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/decode-named-character-reference-npm-1.0.2-db17a755fd-10c0.zip/node_modules/decode-named-character-reference/index.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNamedCharacterReference: () => (/* binding */ decodeNamedCharacterReference)\n/* harmony export */ });\n/* harmony import */ var character_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! character-entities */ \"../../../../.yarn/berry/cache/character-entities-npm-2.0.2-b5ef4d8fe2-10c0.zip/node_modules/character-entities/index.js\");\n\n\nconst own = {}.hasOwnProperty\n\n/**\n * Decode a single character reference (without the `&` or `;`).\n * You probably only need this when you’re building parsers yourself that follow\n * different rules compared to HTML.\n * This is optimized to be tiny in browsers.\n *\n * @param {string} value\n *   `notin` (named), `#123` (deci), `#x123` (hexa).\n * @returns {string|false}\n *   Decoded reference.\n */\nfunction decodeNamedCharacterReference(value) {\n  return own.call(character_entities__WEBPACK_IMPORTED_MODULE_0__.characterEntities, value) ? character_entities__WEBPACK_IMPORTED_MODULE_0__.characterEntities[value] : false\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UtbnBtLTEuMC4yLWRiMTdhNzU1ZmQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EOztBQUVwRCxjQUFjOztBQUVkO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGtCQUFrQixpRUFBaUIsV0FBVyxpRUFBaUI7QUFDL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3R1ZHkvZG9jcy8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZS1ucG0tMS4wLjItZGIxN2E3NTVmZC0xMGMwLnppcC9ub2RlX21vZHVsZXMvZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UvaW5kZXguanM/NWM5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NoYXJhY3RlckVudGl0aWVzfSBmcm9tICdjaGFyYWN0ZXItZW50aXRpZXMnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogRGVjb2RlIGEgc2luZ2xlIGNoYXJhY3RlciByZWZlcmVuY2UgKHdpdGhvdXQgdGhlIGAmYCBvciBgO2ApLlxuICogWW91IHByb2JhYmx5IG9ubHkgbmVlZCB0aGlzIHdoZW4geW914oCZcmUgYnVpbGRpbmcgcGFyc2VycyB5b3Vyc2VsZiB0aGF0IGZvbGxvd1xuICogZGlmZmVyZW50IHJ1bGVzIGNvbXBhcmVkIHRvIEhUTUwuXG4gKiBUaGlzIGlzIG9wdGltaXplZCB0byBiZSB0aW55IGluIGJyb3dzZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBgbm90aW5gIChuYW1lZCksIGAjMTIzYCAoZGVjaSksIGAjeDEyM2AgKGhleGEpLlxuICogQHJldHVybnMge3N0cmluZ3xmYWxzZX1cbiAqICAgRGVjb2RlZCByZWZlcmVuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gb3duLmNhbGwoY2hhcmFjdGVyRW50aXRpZXMsIHZhbHVlKSA/IGNoYXJhY3RlckVudGl0aWVzW3ZhbHVlXSA6IGZhbHNlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/decode-named-character-reference-npm-1.0.2-db17a755fd-10c0.zip/node_modules/decode-named-character-reference/index.js\n");

/***/ })

};
;