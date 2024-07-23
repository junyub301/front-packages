"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-ssh";
exports.ids = ["vendor-chunks/is-ssh"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Dependencies\nvar protocols = __webpack_require__(/*! protocols */ \"../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js\");\n\n/**\n * isSsh\n * Checks if an input value is a ssh url or not.\n *\n * @name isSsh\n * @function\n * @param {String|Array} input The input url or an array of protocols.\n * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.\n */\nfunction isSsh(input) {\n\n    if (Array.isArray(input)) {\n        return input.indexOf(\"ssh\") !== -1 || input.indexOf(\"rsync\") !== -1;\n    }\n\n    if (typeof input !== \"string\") {\n        return false;\n    }\n\n    var prots = protocols(input);\n    input = input.substring(input.indexOf(\"://\") + 3);\n    if (isSsh(prots)) {\n        return true;\n    }\n\n    // TODO This probably could be improved :)\n    var urlPortPattern = new RegExp('\\.([a-zA-Z\\\\d]+):(\\\\d+)\\/');\n    return !input.match(urlPortPattern) && input.indexOf(\"@\") < input.indexOf(\":\");\n}\n\nmodule.exports = isSsh;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaXMtc3NoLW5wbS0xLjQuMC1jNmQ3ZWVjMDg3LTEwYzAuemlwL25vZGVfbW9kdWxlcy9pcy1zc2gvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsNEhBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3R1ZHkvZG9jcy8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pcy1zc2gtbnBtLTEuNC4wLWM2ZDdlZWMwODctMTBjMC56aXAvbm9kZV9tb2R1bGVzL2lzLXNzaC9saWIvaW5kZXguanM/MjhlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzXG52YXIgcHJvdG9jb2xzID0gcmVxdWlyZShcInByb3RvY29sc1wiKTtcblxuLyoqXG4gKiBpc1NzaFxuICogQ2hlY2tzIGlmIGFuIGlucHV0IHZhbHVlIGlzIGEgc3NoIHVybCBvciBub3QuXG4gKlxuICogQG5hbWUgaXNTc2hcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGlucHV0IFRoZSBpbnB1dCB1cmwgb3IgYW4gYXJyYXkgb2YgcHJvdG9jb2xzLlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnB1dCBpcyBhIHNzaCB1cmwsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1NzaChpbnB1dCkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5pbmRleE9mKFwic3NoXCIpICE9PSAtMSB8fCBpbnB1dC5pbmRleE9mKFwicnN5bmNcIikgIT09IC0xO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwcm90cyA9IHByb3RvY29scyhpbnB1dCk7XG4gICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcoaW5wdXQuaW5kZXhPZihcIjovL1wiKSArIDMpO1xuICAgIGlmIChpc1NzaChwcm90cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBUaGlzIHByb2JhYmx5IGNvdWxkIGJlIGltcHJvdmVkIDopXG4gICAgdmFyIHVybFBvcnRQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXFwuKFthLXpBLVpcXFxcZF0rKTooXFxcXGQrKVxcLycpO1xuICAgIHJldHVybiAhaW5wdXQubWF0Y2godXJsUG9ydFBhdHRlcm4pICYmIGlucHV0LmluZGV4T2YoXCJAXCIpIDwgaW5wdXQuaW5kZXhPZihcIjpcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTc2g7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js\n");

/***/ })

};
;