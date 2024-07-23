"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-space";
exports.ids = ["vendor-chunks/micromark-factory-space"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/micromark-factory-space-npm-1.1.0-30229d1b5d-10c0.zip/node_modules/micromark-factory-space/dev/index.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/micromark-factory-space-npm-1.1.0-30229d1b5d-10c0.zip/node_modules/micromark-factory-space/dev/index.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorySpace: () => (/* binding */ factorySpace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"../../../../.yarn/berry/cache/micromark-util-character-npm-1.2.0-b42e3441af-10c0.zip/node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   spaces in markdown are often optional, in which case this factory can be\n *     used and `ok` will be switched to whether spaces were found or not\n * *   one line ending or space can be detected with `markdownSpace(code)` right\n *     before using `factorySpace`\n *\n * ###### Examples\n *\n * Where `␉` represents a tab (plus how much it expands) and `␠` represents a\n * single space.\n *\n * ```markdown\n * ␉\n * ␠␠␠␠\n * ␉␠\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {TokenType} type\n *   Type (`' \\t'`).\n * @param {number | undefined} [max=Infinity]\n *   Max (exclusive).\n * @returns\n *   Start state.\n */\nfunction factorySpace(effects, ok, type, max) {\n  const limit = max ? max - 1 : Number.POSITIVE_INFINITY\n  let size = 0\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      effects.enter(type)\n      return prefix(code)\n    }\n\n    return ok(code)\n  }\n\n  /** @type {State} */\n  function prefix(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {\n      effects.consume(code)\n      return prefix\n    }\n\n    effects.exit(type)\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UtbnBtLTEuMS4wLTMwMjI5ZDFiNWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSwwQ0FBMEM7QUFDdkQ7O0FBRXNEOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxRQUFRLHVFQUFhO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBLFFBQVEsdUVBQWE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN0dWR5L2RvY3MvLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UtbnBtLTEuMS4wLTMwMjI5ZDFiNWQtMTBjMC56aXAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2Rldi9pbmRleC5qcz9kNWNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7bWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuXG4vLyBUbyBkbzogaW1wbGVtZW50IGBzcGFjZU9yVGFiYCwgYHNwYWNlT3JUYWJNaW5NYXhgLCBgc3BhY2VPclRhYldpdGhPcHRpb25zYC5cblxuLyoqXG4gKiBQYXJzZSBzcGFjZXMgYW5kIHRhYnMuXG4gKlxuICogVGhlcmUgaXMgbm8gYG5va2AgcGFyYW1ldGVyOlxuICpcbiAqICogICBzcGFjZXMgaW4gbWFya2Rvd24gYXJlIG9mdGVuIG9wdGlvbmFsLCBpbiB3aGljaCBjYXNlIHRoaXMgZmFjdG9yeSBjYW4gYmVcbiAqICAgICB1c2VkIGFuZCBgb2tgIHdpbGwgYmUgc3dpdGNoZWQgdG8gd2hldGhlciBzcGFjZXMgd2VyZSBmb3VuZCBvciBub3RcbiAqICogICBvbmUgbGluZSBlbmRpbmcgb3Igc3BhY2UgY2FuIGJlIGRldGVjdGVkIHdpdGggYG1hcmtkb3duU3BhY2UoY29kZSlgIHJpZ2h0XG4gKiAgICAgYmVmb3JlIHVzaW5nIGBmYWN0b3J5U3BhY2VgXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogV2hlcmUgYOKQiWAgcmVwcmVzZW50cyBhIHRhYiAocGx1cyBob3cgbXVjaCBpdCBleHBhbmRzKSBhbmQgYOKQoGAgcmVwcmVzZW50cyBhXG4gKiBzaW5nbGUgc3BhY2UuXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIOKQiVxuICog4pCg4pCg4pCg4pCgXG4gKiDikInikKBcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSAoYCcgXFx0J2ApLlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFttYXg9SW5maW5pdHldXG4gKiAgIE1heCAoZXhjbHVzaXZlKS5cbiAqIEByZXR1cm5zXG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeVNwYWNlKGVmZmVjdHMsIG9rLCB0eXBlLCBtYXgpIHtcbiAgY29uc3QgbGltaXQgPSBtYXggPyBtYXggLSAxIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gIGxldCBzaXplID0gMFxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgcmV0dXJuIHByZWZpeChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtTdGF0ZX0gKi9cbiAgZnVuY3Rpb24gcHJlZml4KGNvZGUpIHtcbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSAmJiBzaXplKysgPCBsaW1pdCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/micromark-factory-space-npm-1.1.0-30229d1b5d-10c0.zip/node_modules/micromark-factory-space/dev/index.js\n");

/***/ })

};
;