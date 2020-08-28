module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51vM");


/***/ }),

/***/ "51vM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./hooks/useToggle.ts


const useToggle = (initialValue = false) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(initialValue);

  const toggle = ev => {
    ev.preventDefault();
    setIsOpen(value => !value);
  };

  return [isOpen, toggle];
};

/* harmony default export */ var hooks_useToggle = (useToggle);
// EXTERNAL MODULE: ./logic/pokemonInfo.ts
var pokemonInfo = __webpack_require__("vNnh");

// CONCATENATED MODULE: ./logic/getPokemon.ts


const getPokemon = async name => {
  const allPokemons = await Object(pokemonInfo["a" /* default */])();
  const pokemon = allPokemons.find(item => item.name === name);
  return pokemon;
};

/* harmony default export */ var logic_getPokemon = (getPokemon);
// EXTERNAL MODULE: ./logic/pokemonCards.ts
var logic_pokemonCards = __webpack_require__("JZCg");

// CONCATENATED MODULE: ./pages/pokemon/[name].tsx
var __jsx = external_react_default.a.createElement;





const toggleStyle = {
  width: 15,
  display: 'block',
  float: 'left'
};
const estilo = {
  color: '#ff0'
};

const PokemonPage = ({
  pokemon
}) => {
  const [showInfo, toggleInfo] = hooks_useToggle(true);
  const [showStats, toggleStats] = hooks_useToggle(true);
  const text = `Pokemon ${pokemon.name}`;

  const goBack = ev => {
    ev.preventDefault();
    window.history.back();
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", null, text)), __jsx("main", null, __jsx("h1", {
    style: estilo
  }, text), __jsx("p", null, `#${pokemon.id}`), __jsx("img", {
    src: pokemon.imageURL,
    alt: pokemon.name
  }), __jsx("h2", null, __jsx("a", {
    href: "",
    onClick: toggleInfo
  }, __jsx("strong", {
    style: toggleStyle
  }, showInfo ? '-' : '+'), __jsx("div", null, "Info"))), showInfo ? __jsx("dl", null, __jsx("dt", null, "Height:"), __jsx("dd", null, pokemon.height), __jsx("dt", null, "Weight:"), __jsx("dd", null, pokemon.weight), __jsx("dt", null, "Types:"), __jsx("dd", null, pokemon.types.reduce((types, item) => `${types} ${item}`, ''))) : null, __jsx("h2", null, __jsx("a", {
    href: "",
    onClick: toggleStats
  }, __jsx("strong", {
    style: toggleStyle
  }, showStats ? '-' : '+'), __jsx("div", null, "Stats"))), showStats ? __jsx("dl", null, Object.keys(pokemon.stats).map(key => __jsx(external_react_default.a.Fragment, {
    key: key
  }, __jsx("dt", null, `${key}:`), __jsx("dd", null, pokemon.stats[key])))) : null, __jsx("div", {
    style: {
      width: '100%',
      clear: 'both',
      paddingTop: 20
    }
  }, __jsx("a", {
    href: "/",
    onClick: goBack
  }, "Back"))));
};

const getStaticProps = async ({
  params
}) => {
  const pokemon = await logic_getPokemon(`${params.name}`);
  return {
    props: {
      pokemon
    }
  };
};
const getStaticPaths = async () => {
  const pokemonCards = await Object(logic_pokemonCards["a" /* default */])();
  return {
    paths: pokemonCards.map(card => ({
      params: {
        name: card.name
      }
    })),
    fallback: false
  };
};
/* harmony default export */ var _name_ = __webpack_exports__["default"] = (PokemonPage);

/***/ }),

/***/ "JZCg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pokemonInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vNnh");


const getPokemonCards = async () => {
  const allData = await Object(_pokemonInfo__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
  return allData.map(item => {
    const {
      id,
      name,
      types,
      imageURL
    } = item;
    return {
      id,
      name,
      types,
      imageURL
    };
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getPokemonCards);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vNnh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const jsonPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data/pokemon.json');
let myPokemons;

const getAllPokemons = async () => {
  if (!myPokemons) {
    const pokemonsJSON = await fs__WEBPACK_IMPORTED_MODULE_0___default.a.promises.readFile(jsonPath, 'utf8');
    myPokemons = JSON.parse(pokemonsJSON);
  }

  return myPokemons;
};

/* harmony default export */ __webpack_exports__["a"] = (getAllPokemons);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });