(self["webpackChunkexamples"] = self["webpackChunkexamples"] || []).push([["foo"],{

/***/ "./src/foo.js":
/*!********************!*\
  !*** ./src/foo.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.e(/*! import() */ "src_bar_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bar */ "./src/bar.js"));

console.log(bar);
console.log("foo");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/foo.js"));
/******/ }
]);