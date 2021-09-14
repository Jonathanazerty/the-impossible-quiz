/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("(function () {\r\n    document.getElementById('guess-form').addEventListener(\"submit\", compareUserGuess);\r\n    function compareUserGuess(event) {\r\n        event.preventDefault();\r\n        var correctAnswer = rightAnswer();\r\n        var input = document.getElementById('guess').value;\r\n        if (correctAnswer == input) {\r\n            alert(\"Awesome! Your answer: \" + input + \" was correct 👏🏿 👏🏻. You can be named many things, stupid not being one of them. On to the next question\");\r\n        }\r\n        else {\r\n            alert(\"Bummer... You guessed \" + input + \". and that's wrong 🤦🏽 🤦🏼! Please try again !\");\r\n        }\r\n    }\r\n    function rightAnswer() {\r\n        var correctAnswer = 'CSS';\r\n        return correctAnswer;\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://the-impossible-quiz/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;