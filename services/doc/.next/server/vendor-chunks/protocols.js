"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/protocols";
exports.ids = ["vendor-chunks/protocols"];
exports.modules = {

/***/ "../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

eval("\n\n/**\n * protocols\n * Returns the protocols of an input url.\n *\n * @name protocols\n * @function\n * @param {String|URL} input The input url (string or `URL` instance)\n * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.\n * @return {Array|String} The array of protocols or the specified protocol.\n */\nmodule.exports = function protocols(input, first) {\n\n    if (first === true) {\n        first = 0;\n    }\n\n    var prots = \"\";\n    if (typeof input === \"string\") {\n        try {\n            prots = new URL(input).protocol;\n        } catch (e) {}\n    } else if (input && input.constructor === URL) {\n        prots = input.protocol;\n    }\n\n    var splits = prots.split(/\\:|\\+/).filter(Boolean);\n\n    if (typeof first === \"number\") {\n        return splits[first];\n    }\n\n    return splits;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvcHJvdG9jb2xzLW5wbS0yLjAuMS1lMmJjNzRkMWMxLTEwYzAuemlwL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLGdCQUFnQjtBQUMzQixZQUFZLGNBQWM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3R1ZHkvZG9jcy8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9wcm90b2NvbHMtbnBtLTIuMC4xLWUyYmM3NGQxYzEtMTBjMC56aXAvbm9kZV9tb2R1bGVzL3Byb3RvY29scy9saWIvaW5kZXguanM/NWMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBwcm90b2NvbHNcbiAqIFJldHVybnMgdGhlIHByb3RvY29scyBvZiBhbiBpbnB1dCB1cmwuXG4gKlxuICogQG5hbWUgcHJvdG9jb2xzXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfFVSTH0gaW5wdXQgVGhlIGlucHV0IHVybCAoc3RyaW5nIG9yIGBVUkxgIGluc3RhbmNlKVxuICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZmlyc3QgSWYgYHRydWVgLCB0aGUgZmlyc3QgcHJvdG9jb2wgd2lsbCBiZSByZXR1cm5lZC4gSWYgbnVtYmVyLCBpdCB3aWxsIHJlcHJlc2VudCB0aGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgcHJvdG9jb2xzIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl8U3RyaW5nfSBUaGUgYXJyYXkgb2YgcHJvdG9jb2xzIG9yIHRoZSBzcGVjaWZpZWQgcHJvdG9jb2wuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJvdG9jb2xzKGlucHV0LCBmaXJzdCkge1xuXG4gICAgaWYgKGZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZpcnN0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgcHJvdHMgPSBcIlwiO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb3RzID0gbmV3IFVSTChpbnB1dCkucHJvdG9jb2w7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSBlbHNlIGlmIChpbnB1dCAmJiBpbnB1dC5jb25zdHJ1Y3RvciA9PT0gVVJMKSB7XG4gICAgICAgIHByb3RzID0gaW5wdXQucHJvdG9jb2w7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0cyA9IHByb3RzLnNwbGl0KC9cXDp8XFwrLykuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gc3BsaXRzW2ZpcnN0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js\n");

/***/ })

};
;