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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _script_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/game.js */ \"./src/script/game.js\");\n\r\n\r\n\r\n\r\n\r\nconst game = new _script_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\ngame.start();\r\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/index.js?");

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/script/ui.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this._ui = new _ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n\r\n    start() {\r\n        this._ui.loadInitialPage();\r\n\r\n        const playersScore = { human: 0, computer: 0 };\r\n\r\n        document.querySelector(\".moves-buttons-section\").addEventListener(\"click\", (event) => {\r\n                if (event.target.classList.contains(\"move-button\")) {\r\n                    const playersMove = this.getPlayersMove(event.target);\r\n                    const roundWinner = this.checkRoundWinner(playersMove);\r\n\r\n                    this.updatePlayersScore(roundWinner, playersScore);\r\n                    this._ui.displayRoundResult(roundWinner, playersMove);\r\n                    this._ui.displayPlayersMove(playersMove);\r\n                    this._ui.displayPlayersScore(playersScore);\r\n\r\n                    const finalWinner = this.checkFinalWinner(playersScore);\r\n\r\n                    if (finalWinner) {\r\n                        this._ui.displayFinalResult(finalWinner);\r\n                        document.getElementById(\"restart-button\").addEventListener(\"click\", this.restart.bind(this));\r\n                    }\r\n                }\r\n            });\r\n    }\r\n\r\n    getPlayersMove(target) {\r\n        const human = parseInt(target.dataset[\"move\"]);\r\n        const computer = Math.floor(Math.random() * 3);\r\n        return { human, computer };\r\n    }\r\n\r\n    checkRoundWinner(playersMove) {\r\n        if (playersMove.human === playersMove.computer) {\r\n            return 0;\r\n        } else if (\r\n            (playersMove.human === 0 && playersMove.computer === 2) ||\r\n            (playersMove.human === 1 && playersMove.computer === 0) ||\r\n            (playersMove.human === 2 && playersMove.computer === 1)\r\n        ) {\r\n            return 1;\r\n        }\r\n        return 2;\r\n    }\r\n\r\n    updatePlayersScore(roundWinner, playersScore) {\r\n        if (roundWinner === 1) {\r\n            playersScore.human++;\r\n        } else if (roundWinner === 2) {\r\n            playersScore.computer++;\r\n        }\r\n    }\r\n\r\n    checkFinalWinner(playersScore) {\r\n        if (playersScore.human === 5 || playersScore.computer === 5) {\r\n            return playersScore.human > playersScore.computer ? 1 : 2;\r\n        }\r\n        return null;\r\n    }\r\n\r\n    restart() {\r\n        this.start();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://rock-paper-scissors/./src/script/game.js?");

/***/ }),

/***/ "./src/script/ui.js":
/*!**************************!*\
  !*** ./src/script/ui.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n\r\n\r\nclass UI {\r\n    constructor() {\r\n        this._mainElem = document.querySelector(\".main\");\r\n        this._moves = [\r\n            { move: \"rock\", emoji: \"🪨\" },\r\n            { move: \"paper\", emoji: \"📃\" },\r\n            { move: \"scissors\", emoji: \"✂️\" },\r\n        ];\r\n    }\r\n\r\n    loadInitialPage() {\r\n        this._mainElem.innerHTML = `\r\n            <div class=\"round-result-section\">\r\n                <p id=\"round-result-who-won\">Select any one from below</p>\r\n                <p id=\"round-result-who-beats\">First to score 5 points wins the game</p>\r\n            </div>\r\n            <div class=\"players-score-and-move-section\">\r\n                <div class=\"human-score-and-move-inner-section\">\r\n                    <p class=\"player-move human-move\">❔</p>\r\n                    <p class=\"player-score human-score\">You: 0</p>\r\n                </div>\r\n                <div class=\"computer-score-and-move-inner-section\">\r\n                    <p class=\"player-move computer-move\">❔</p>\r\n                    <p class=\"player-score computer-score\">Computer: 0</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"moves-buttons-section\">\r\n                <button class=\"move-button\" data-move=\"0\">🪨</button>\r\n                <button class=\"move-button\" data-move=\"1\">📃</button>\r\n                <button class=\"move-button\" data-move=\"2\">✂️</button>\r\n            </div>\r\n        `;\r\n    }\r\n\r\n    displayPlayersMove(playersMove) {\r\n        document.querySelector(\".human-move\").innerText = this._moves[playersMove.human].emoji;\r\n        document.querySelector(\".computer-move\").innerText = this._moves[playersMove.computer].emoji;\r\n    }\r\n\r\n    displayPlayersScore(playersScore) {\r\n        document.querySelector(\".human-score\").innerText = `You: ${playersScore.human}`;\r\n        document.querySelector(\".computer-score\").innerText = `Computer: ${playersScore.computer}`;\r\n    }\r\n\r\n    displayRoundResult(result, playersMove) {\r\n        let roundResult = \"Draw!!!\";\r\n        let moveBeatsMove = this._moves[playersMove.human].move + \" and \" + this._moves[playersMove.computer].move;\r\n\r\n        if (result === 1) {\r\n            roundResult = \"You win!!!\";\r\n            moveBeatsMove = this._moves[playersMove.human].move + \" beats \" + this._moves[playersMove.computer].move;\r\n        } else if (result === 2) {\r\n            roundResult = \"You lost!!!\";\r\n            moveBeatsMove = this._moves[playersMove.computer].move + \" beats \" + this._moves[playersMove.human].move;\r\n        } \r\n\r\n        document.querySelector(\"#round-result-who-won\").innerText = roundResult;\r\n        document.querySelector(\"#round-result-who-beats\").innerText = moveBeatsMove;\r\n    }\r\n\r\n    displayFinalResult(finalWinner) {\r\n        const resultText = finalWinner === 1 ? \"You Win!!!\" : \"You Lose!!!\";\r\n\r\n        const resultBox = document.createElement(\"div\");\r\n\r\n        resultBox.classList.add(\"final-result-dialog-box-container\");\r\n\r\n        resultBox.innerHTML = `\r\n            <div class=\"final-result-dialog-box\">\r\n                <h2>${resultText}</h2>\r\n                <button id=\"restart-button\">restart</button> \r\n            </div>\r\n        `;\r\n\r\n        this._mainElem.appendChild(resultBox);\r\n    }\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./src/script/ui.js?");

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