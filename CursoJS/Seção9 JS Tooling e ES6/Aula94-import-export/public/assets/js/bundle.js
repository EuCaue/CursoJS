/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (/* binding */ helloWorld),
/* harmony export */   "diretoExport": () => (/* binding */ diretoExport),
/* harmony export */   "helloWorld": () => (/* binding */ helloWorld),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome2": () => (/* binding */ sobrenome),
/* harmony export */   "soma": () => (/* binding */ soma)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = 'Halry';
var sobrenome = 'Henry';
var idade = 18; //? Senão estiver exportando a variável, ele fica privada para o modulo dela.

var cpf = '123.123.123-45'; //? export default, é a propriedade que sempre será exportada por padrão
//? e não precisa usar o mesmo nome para importar e nem chaves
//! Somente um padrão por modulo é permitido
//! export default function helloWorld() { 
//!   console.log('Olá mundo, valor default');
//! }

function helloWorld() {
  console.log('Olá mundo, valor default');
} // Exportando diretamente a variável/objeto/função/classe

var diretoExport = 'Exportando diretamente';

function soma(x, y) {
  return x + y;
} // Exportando as variáveis para outros arquivos...
//* Exportando sobrenome, com outro nome de variável 
//* Exportando um conjunto de variaveis, tendo uma como default


 // Exportando diretamente

var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
// 1
// 2
// 3
// Importanto do modulo1 as variáveis dele
//* import as, serve para importa a variável com outro nome para o seu .js
//* Caso já exista uma com aquele nome de variável 
//? Importando todas as variaveis que existem
//? como objeto com todas dentro dela
 //? Importando variável por variável do arquivo 

 //? Importando o valor padrão do modulo um
//? para valores padrão não precisa de nome especifico, e nem de chaves
//? Pode tambem importar os valores + default 


var nome = 'Caue'; // Utilizando a classe importada

var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa('Alvaro', 'Soares');
console.log(" Nome1: ".concat(nome, "\n Nome2: ").concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, "\n Sobrenome: ").concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome2, "\n Idade: ").concat(_modulo1__WEBPACK_IMPORTED_MODULE_0__.idade, "\n"));
console.log("P1: ".concat(p1.nome, " ").concat(p1.sobrenome));
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(5, 5));
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map