/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/GeraCPF.js":
/*!********************************!*\
  !*** ./src/modules/GeraCPF.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeraCPF)
/* harmony export */ });
/* harmony import */ var _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidaCPF */ "./src/modules/ValidaCPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var GeraCPF = /*#__PURE__*/function () {
  function GeraCPF() {
    _classCallCheck(this, GeraCPF);
  }

  _createClass(GeraCPF, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
      return String(Math.floor(Math.random() * (max - min) + min));
    }
  }, {
    key: "formatado",
    value: function formatado(cpf) {
      return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfSemDigito = this.rand();
      var digito1 = _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__["default"].geraDigito(cpfSemDigito);
      var digito2 = _ValidaCPF__WEBPACK_IMPORTED_MODULE_0__["default"].geraDigito(cpfSemDigito + digito1);
      var novoCPF = cpfSemDigito + digito1 + digito2;
      return this.formatado(novoCPF);
    }
  }]);

  return GeraCPF;
}();



/***/ }),

/***/ "./src/modules/ValidaCPF.js":
/*!**********************************!*\
  !*** ./src/modules/ValidaCPF.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ValidaCPF = /*#__PURE__*/function () {
  function ValidaCPF(cpfEnviado) {
    _classCallCheck(this, ValidaCPF);

    //* Setando o valor do cpfLimp
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  } //* Checkando se é sequência


  _createClass(ValidaCPF, [{
    key: "\xE9Sequencia",
    value: function éSequencia() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      //? Gerando novo CPF
      var cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      var digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      var digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  }, {
    key: "valida",
    value: function valida() {
      // Validando oCPF
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.éSequencia()) return false; // if (!this.geraNovaCpf()) return false;

      this.geraNovoCpf();
      return this.novoCPF === this.cpfLimpo;
    }
  }], [{
    key: "geraDigito",
    value: function geraDigito(cpfSemDigitos) {
      // Gerando Digitos
      var total = 0;
      var reverso = cpfSemDigitos.length + 1;

      var _iterator = _createForOfIteratorHelper(cpfSemDigitos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var stringN = _step.value;
          total += reverso * Number(stringN);
          reverso--;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var digito = 11 - total % 11;
      return digito <= 9 ? String(digito) : '0';
    }
  }]);

  return ValidaCPF;
}();


var validaCPF = new ValidaCPF('705.484.450-52');
console.log('Cheguei até aqui :D');

/***/ }),

/***/ "./src/assets/sass/style.scss":
/*!************************************!*\
  !*** ./src/assets/sass/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_GeraCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GeraCPF */ "./src/modules/GeraCPF.js");
/* harmony import */ var _assets_sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sass/style.scss */ "./src/assets/sass/style.scss");



(function () {
  var gera = new _modules_GeraCPF__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var cpfGerado = document.querySelector('.cpfGerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map