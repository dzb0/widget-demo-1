(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cleanslate/cleanslate.css":
/*!************************************************!*\
  !*** ./node_modules/cleanslate/cleanslate.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./cleanslate.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/cleanslate/cleanslate.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/cleanslate/cleanslate.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/cleanslate/cleanslate.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n* CleanSlate\n*   github.com/premasagar/cleanslate\n*\n*//*\n    An extreme CSS reset stylesheet, for normalising the styling of a container element and its children.\n\n    by Premasagar Rose\n        dharmafly.com\n\n    license\n        opensource.org/licenses/mit-license.php\n\n    **\n\n    v0.10.1\n\n*/\n\n/* == BLANKET RESET RULES == */\n\n/* HTML 4.01 */\n.cleanslate, .cleanslate h1, .cleanslate h2, .cleanslate h3, .cleanslate h4, .cleanslate h5, .cleanslate h6, .cleanslate p, .cleanslate td, .cleanslate dl, .cleanslate tr, .cleanslate dt, .cleanslate ol, .cleanslate form, .cleanslate select, .cleanslate option, .cleanslate pre, .cleanslate div, .cleanslate table,  .cleanslate th, .cleanslate tbody, .cleanslate tfoot, .cleanslate caption, .cleanslate thead, .cleanslate ul, .cleanslate li, .cleanslate address, .cleanslate blockquote, .cleanslate dd, .cleanslate fieldset, .cleanslate li, .cleanslate iframe, .cleanslate strong, .cleanslate legend, .cleanslate em, .cleanslate summary, .cleanslate cite, .cleanslate span, .cleanslate input, .cleanslate sup, .cleanslate label, .cleanslate dfn, .cleanslate object, .cleanslate big, .cleanslate q, .cleanslate samp, .cleanslate acronym, .cleanslate small, .cleanslate img, .cleanslate strike, .cleanslate code, .cleanslate sub, .cleanslate ins, .cleanslate textarea, .cleanslate button, .cleanslate var, .cleanslate a, .cleanslate abbr, .cleanslate applet, .cleanslate del, .cleanslate kbd, .cleanslate tt, .cleanslate b, .cleanslate i, .cleanslate hr,\n\n/* HTML5 - Sept 2013 taken from MDN https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list */\n.cleanslate article, .cleanslate aside, .cleanslate figure, .cleanslate figcaption, .cleanslate footer, .cleanslate header, .cleanslate menu, .cleanslate nav, .cleanslate section, .cleanslate time, .cleanslate mark, .cleanslate audio, .cleanslate video, .cleanslate abbr, .cleanslate address, .cleanslate area, .cleanslate blockquote, .cleanslate canvas, .cleanslate caption, .cleanslate cite, .cleanslate code, .cleanslate colgroup, .cleanslate col, .cleanslate datalist, .cleanslate fieldset, .cleanslate main, .cleanslate map, .cleanslate meta, .cleanslate optgroup, .cleanslate output, .cleanslate progress {\n    background-attachment:scroll !important;\n    background-color:transparent !important;\n    background-image:none !important; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don't know what that means, then you probably haven't used the pngfix script, and this comment may be ignored :) */\n    background-position:0 0 !important;\n    background-repeat:repeat !important;\n    border-color:black !important;\n    border-color:currentColor !important; /* `border-color` should match font color. Modern browsers (incl. IE9) allow the use of \"currentColor\" to match the current font 'color' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of 'black' is given before this rule. Guideline to support older browsers: if you haven't already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */\n    border-radius:0 !important;\n    border-style:none !important;\n    border-width:medium !important;\n    bottom:auto !important;\n    clear:none !important;\n    clip:auto !important;\n    color:inherit !important;\n    counter-increment:none !important;\n    counter-reset:none !important;\n    cursor:auto !important;\n    direction:inherit !important;\n    display:inline !important;\n    float:none !important;\n    font-family: inherit !important; /* As with other inherit values, this needs to be set on the root container element */\n    font-size: inherit !important;\n    font-style:inherit !important;\n    font-variant:normal !important;\n    font-weight:inherit !important;\n    height:auto !important;\n    left:auto !important;\n    letter-spacing:normal !important;\n    line-height:inherit !important;\n    list-style-type: inherit !important; /* Could set list-style-type to none */\n    list-style-position: outside !important;\n    list-style-image: none !important;\n    margin:0 !important;\n    max-height:none !important;\n    max-width:none !important;\n    min-height:0 !important;\n    min-width:0 !important;\n    opacity:1;\n    outline:invert none medium !important;\n    overflow:visible !important;\n    padding:0 !important;\n    position:static !important;\n    quotes: \"\" \"\" !important;\n    right:auto !important;\n    table-layout:auto !important;\n    text-align:inherit !important;\n    text-decoration:inherit !important;\n    text-indent:0 !important;\n    text-transform:none !important;\n    top:auto !important;\n    unicode-bidi:normal !important;\n    vertical-align:baseline !important;\n    visibility:inherit !important;\n    white-space:normal !important;\n    width:auto !important;\n    word-spacing:normal !important;\n    z-index:auto !important;\n\n    /* CSS3 */\n    /* Including all prefixes according to http://caniuse.com/ */\n    /* CSS Animations don't cascade, so don't require resetting */\n    -webkit-background-origin: padding-box !important;\n            background-origin: padding-box !important;\n    -webkit-background-clip: border-box !important;\n            background-clip: border-box !important;\n    -webkit-background-size: auto !important;\n       -moz-background-size: auto !important;\n            background-size: auto !important;\n    -webkit-border-image: none !important;\n       -moz-border-image: none !important;\n         -o-border-image: none !important;\n            border-image: none !important;\n    -webkit-border-radius:0 !important;\n       -moz-border-radius:0 !important;\n            border-radius: 0 !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    -webkit-box-sizing: content-box !important;\n       -moz-box-sizing: content-box !important;\n            box-sizing: content-box !important;\n    -webkit-column-count: auto !important;\n       -moz-column-count: auto !important;\n            column-count: auto !important;\n    -webkit-column-gap: normal !important;\n       -moz-column-gap: normal !important;\n            column-gap: normal !important;\n    -webkit-column-rule: medium none black !important;\n       -moz-column-rule: medium none black !important;\n            column-rule: medium none black !important;\n    -webkit-column-span: 1 !important;\n       -moz-column-span: 1 !important; /* doesn't exist yet but probably will */\n            column-span: 1 !important;\n    -webkit-column-width: auto !important;\n       -moz-column-width: auto !important;\n            column-width: auto !important;\n    font-feature-settings: normal !important;\n    overflow-x: visible !important;\n    overflow-y: visible !important;\n    -webkit-hyphens: manual !important;\n       -moz-hyphens: manual !important;\n            hyphens: manual !important;\n    -webkit-perspective: none !important;\n       -moz-perspective: none !important;\n        -ms-perspective: none !important;\n         -o-perspective: none !important;\n            perspective: none !important;\n    -webkit-perspective-origin: 50% 50% !important;\n       -moz-perspective-origin: 50% 50% !important;\n        -ms-perspective-origin: 50% 50% !important;\n         -o-perspective-origin: 50% 50% !important;\n            perspective-origin: 50% 50% !important;\n    -webkit-backface-visibility: visible !important;\n       -moz-backface-visibility: visible !important;\n        -ms-backface-visibility: visible !important;\n         -o-backface-visibility: visible !important;\n            backface-visibility: visible !important;\n    text-shadow: none !important;\n    -webkit-transition: all 0s ease 0s !important;\n            transition: all 0s ease 0s !important;\n    -webkit-transform: none !important;\n       -moz-transform: none !important;\n        -ms-transform: none !important;\n         -o-transform: none !important;\n            transform: none !important;\n    -webkit-transform-origin: 50% 50% !important;\n       -moz-transform-origin: 50% 50% !important;\n        -ms-transform-origin: 50% 50% !important;\n         -o-transform-origin: 50% 50% !important;\n            transform-origin: 50% 50% !important;\n    -webkit-transform-style: flat !important;\n       -moz-transform-style: flat !important;\n        -ms-transform-style: flat !important;\n         -o-transform-style: flat !important;\n            transform-style: flat !important;\n    word-break: normal !important;\n}\n\n/* == BLOCK-LEVEL == */\n/* Actually, some of these should be inline-block and other values, but block works fine (TODO: rigorously verify this) */\n/* HTML 4.01 */\n.cleanslate, .cleanslate h3, .cleanslate h5, .cleanslate p, .cleanslate h1, .cleanslate dl, .cleanslate dt, .cleanslate h6, .cleanslate ol, .cleanslate form, .cleanslate option, .cleanslate pre, .cleanslate div, .cleanslate h2, .cleanslate caption, .cleanslate h4, .cleanslate ul, .cleanslate address, .cleanslate blockquote, .cleanslate dd, .cleanslate fieldset, .cleanslate hr,\n\n/* HTML5 new elements */\n.cleanslate article, .cleanslate dialog, .cleanslate figure, .cleanslate footer, .cleanslate header, .cleanslate hgroup, .cleanslate menu, .cleanslate nav, .cleanslate section, .cleanslate audio, .cleanslate video, .cleanslate address, .cleanslate blockquote, .cleanslate colgroup, .cleanslate main, .cleanslate progress, .cleanslate summary {\n    display:block !important;\n}\n.cleanslate h1, .cleanslate h2, .cleanslate h3, .cleanslate h4, .cleanslate h5, .cleanslate h6 {\n    font-weight: bold !important;\n}\n.cleanslate h1 {\n    font-size: 2em !important;\n    padding: .67em 0 !important;\n}\n.cleanslate h2 {\n    font-size: 1.5em !important;\n    padding: .83em 0 !important;\n}\n.cleanslate h3 {\n    font-size: 1.17em !important;\n    padding: .83em 0 !important;\n}\n.cleanslate h4 {\n    font-size: 1em !important;\n}\n.cleanslate h5 {\n    font-size: .83em !important;\n}\n.cleanslate p {\n    margin: 1em 0 !important;\n}\n.cleanslate table {\n    display: table !important;\n}\n.cleanslate thead {\n    display: table-header-group !important;\n}\n.cleanslate tbody {\n    display: table-row-group !important;\n}\n.cleanslate tfoot {\n    display: table-footer-group !important;\n}\n.cleanslate tr {\n    display: table-row !important;\n}\n.cleanslate th, .cleanslate td {\n    display: table-cell !important;\n    padding: 2px !important;\n}\n\n/* == SPECIFIC ELEMENTS == */\n/* Some of these are browser defaults; some are just useful resets */\n.cleanslate ol, .cleanslate ul {\n    margin: 1em 0 !important;\n}\n.cleanslate ul li, .cleanslate ul ul li, .cleanslate ul ul ul li, .cleanslate ol li, .cleanslate ol ol li, .cleanslate ol ol ol li, .cleanslate ul ol ol li, .cleanslate ul ul ol li, .cleanslate ol ul ul li, .cleanslate ol ol ul li {\n    list-style-position: inside !important;\n    margin-top: .08em !important;\n}\n.cleanslate ol ol, .cleanslate ol ol ol, .cleanslate ul ul, .cleanslate ul ul ul, .cleanslate ol ul, .cleanslate ol ul ul, .cleanslate ol ol ul, .cleanslate ul ol, .cleanslate ul ol ol, .cleanslate ul ul ol {\n    padding-left: 40px !important;\n    margin: 0 !important;\n}\n/* helper for general navigation */\n.cleanslate nav ul, .cleanslate nav ol {\n    list-style-type:none !important;\n\n}\n.cleanslate ul, .cleanslate menu {\n    list-style-type:disc !important;\n}\n.cleanslate ol {\n    list-style-type:decimal !important;\n}\n.cleanslate ol ul, .cleanslate ul ul, .cleanslate menu ul, .cleanslate ol menu, .cleanslate ul menu, .cleanslate menu menu {\n    list-style-type:circle !important;\n}\n.cleanslate ol ol ul, .cleanslate ol ul ul, .cleanslate ol menu ul, .cleanslate ol ol menu, .cleanslate ol ul menu, .cleanslate ol menu menu, .cleanslate ul ol ul, .cleanslate ul ul ul, .cleanslate ul menu ul, .cleanslate ul ol menu, .cleanslate ul ul menu, .cleanslate ul menu menu, .cleanslate menu ol ul, .cleanslate menu ul ul, .cleanslate menu menu ul, .cleanslate menu ol menu, .cleanslate menu ul menu, .cleanslate menu menu menu {\n    list-style-type:square !important;\n}\n.cleanslate li {\n    display:list-item !important;\n    /* Fixes IE7 issue with positioning of nested bullets */\n    min-height:auto !important;\n    min-width:auto !important;\n    padding-left: 20px !important; /* replace -webkit-padding-start: 40px; */\n}\n.cleanslate strong {\n    font-weight:bold !important;\n}\n.cleanslate em {\n    font-style:italic !important;\n}\n.cleanslate kbd, .cleanslate samp, .cleanslate code, .cleanslate pre {\n  font-family:monospace !important;\n}\n.cleanslate a {\n    color: blue !important;\n    text-decoration: underline !important;\n}\n.cleanslate a:visited {\n    color: #529 !important;\n}\n.cleanslate a, .cleanslate a *, .cleanslate input[type=submit], .cleanslate input[type=button], .cleanslate input[type=radio], .cleanslate input[type=checkbox], .cleanslate select, .cleanslate button {\n    cursor:pointer !important;\n}\n.cleanslate button, .cleanslate input[type=submit] {\n    text-align: center !important;\n    padding: 2px 6px 3px !important;\n    border-radius: 4px !important;\n    text-decoration: none !important;\n    font-family: arial, helvetica, sans-serif !important;\n    font-size: small !important;\n    background: white !important;\n    -webkit-appearance: push-button !important;\n    color: buttontext !important;\n    border: 1px #a6a6a6 solid !important;\n    background: lightgrey !important; /* Old browsers */\n    background: rgb(255,255,255); /* Old browsers */\n    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(221,221,221,1) 100%, rgba(209,209,209,1) 100%, rgba(221,221,221,1) 100%) !important; /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(221,221,221,1)), color-stop(100%,rgba(209,209,209,1)), color-stop(100%,rgba(221,221,221,1))) !important; /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%) !important; /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%) !important; /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%) !important; /* IE10+ */\n    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%) !important; /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dddddd',GradientType=0 ) !important; /* IE6-9 */\n    -webkit-box-shadow: 1px 1px 0px #eee !important;\n       -moz-box-shadow: 1px 1px 0px #eee !important;\n         -o-box-shadow: 1px 1px 0px #eee !important;\n            box-shadow: 1px 1px 0px #eee !important;\n    outline: initial !important;\n}\n.cleanslate button:active, .cleanslate input[type=submit]:active, .cleanslate input[type=button]:active, .cleanslate button:active {\n\tbackground: rgb(59,103,158) !important; /* Old browsers */\n\tbackground: -moz-linear-gradient(top, rgba(59,103,158,1) 0%, rgba(43,136,217,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%) !important; /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(59,103,158,1)), color-stop(50%,rgba(43,136,217,1)), color-stop(51%,rgba(32,124,202,1)), color-stop(100%,rgba(125,185,232,1))) !important; /* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%) !important; /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%) !important; /* Opera 11.10+ */\n\tbackground: -ms-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%) !important; /* IE10+ */\n\tbackground: linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%) !important; /* W3C */\n\tborder-color: #5259b0 !important;\n}\n.cleanslate button {\n    padding: 1px 6px 2px 6px !important;\n    margin-right: 5px !important;\n}\n.cleanslate input[type=hidden] {\n    display:none !important;\n}\n/* restore form defaults */\n.cleanslate textarea {\n    -webkit-appearance: textarea !important;\n    background: white !important;\n    padding: 2px !important;\n    margin-left: 4px !important;\n    word-wrap: break-word !important;\n    white-space: pre-wrap !important;\n    font-size: 11px !important;\n    font-family: arial, helvetica, sans-serif !important;\n    line-height: 13px !important;\n    resize: both !important;\n}\n.cleanslate select, .cleanslate textarea, .cleanslate input {\n    border:1px solid #ccc !important;\n}\n.cleanslate select {\n    font-size: 11px !important;\n    font-family: helvetica, arial, sans-serif !important;\n    display: inline-block;\n}\n.cleanslate textarea:focus, .cleanslate input:focus {\n    outline: auto 5px -webkit-focus-ring-color !important;\n    outline: initial !important;\n}\n.cleanslate input[type=text] {\n    background: white !important;\n    padding: 1px !important;\n    font-family: initial !important;\n    font-size: small !important;\n}\n.cleanslate input[type=checkbox], .cleanslate input[type=radio] {\n    border: 1px #2b2b2b solid !important;\n    border-radius: 4px !important;\n}\n.cleanslate input[type=checkbox], .cleanslate input[type=radio] {\n    outline: initial !important;\n}\n.cleanslate input[type=radio] {\n    margin: 2px 2px 3px 2px !important;\n}\n.cleanslate abbr[title], .cleanslate acronym[title], .cleanslate dfn[title] {\n    cursor:help !important;\n    border-bottom-width:1px !important;\n    border-bottom-style:dotted !important;\n}\n.cleanslate ins {\n    background-color:#ff9 !important;\n    color:black !important;\n}\n.cleanslate del {\n    text-decoration: line-through !important;\n}\n.cleanslate blockquote, .cleanslate q  {\n    quotes:none !important; /* HTML5 */\n}\n.cleanslate blockquote:before, .cleanslate blockquote:after, .cleanslate q:before, .cleanslate q:after, .cleanslate li:before, .cleanslate li:after  {\n    content:\"\" !important;\n}\n.cleanslate input, .cleanslate select {\n    vertical-align:middle !important;\n}\n\n.cleanslate table {\n    border-collapse:collapse !important;\n    border-spacing:0 !important;\n}\n.cleanslate hr {\n    display:block !important;\n    height:1px !important;\n    border:0 !important;\n    border-top:1px solid #ccc !important;\n    margin:1em 0 !important;\n}\n.cleanslate *[dir=rtl] {\n    direction: rtl !important;\n}\n.cleanslate mark {\n    background-color:#ff9 !important;\n    color:black !important;\n    font-style:italic !important;\n    font-weight:bold !important;\n}\n.cleanslate menu {\n    padding-left: 40px !important;\n    padding-top: 8px !important;\n}\n\n/* additional helpers */\n.cleanslate [hidden],\n.cleanslate template {\n    display: none !important;\n}\n.cleanslate abbr[title] {\n    border-bottom: 1px dotted !important;\n}\n.cleanslate sub, .cleanslate sup {\n    font-size: 75% !important;\n    line-height: 0 !important;\n    position: relative !important;\n    vertical-align: baseline !important;\n}\n.cleanslate sup {\n    top: -0.5em !important;\n}\n.cleanslate sub {\n    bottom: -0.25em !important;\n}\n.cleanslate img {\n    border: 0 !important;\n}\n.cleanslate figure {\n    margin: 0 !important;\n}\n.cleanslate textarea {\n    overflow: auto !important;\n    vertical-align: top !important;\n}\n\n/* == ROOT CONTAINER ELEMENT == */\n/* This contains default values for child elements to inherit  */\n.cleanslate {\n    font-size: medium !important;\n    line-height: 1 !important;\n    direction:ltr !important;\n    text-align: left !important; /* for IE, Opera */\n    text-align: start !important; /* recommended W3C Spec */\n    font-family: \"Times New Roman\", Times, serif !important; /* Override this with whatever font-family is required */\n    color: black !important;\n    font-style:normal !important;\n    font-weight:normal !important;\n    text-decoration:none !important;\n    list-style-type:disc !important;\n}\n\n.cleanslate pre {\n    white-space:pre !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/** Layout & Utilities **/\n.cleanslate .zb-container {\n  width: 15% !important;\n  padding-right: 15px !important;\n  padding-left: 15px !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  overflow-x: hidden !important;\n  overflow-y: hidden !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important;\n  position: fixed !important;\n  right: 0px !important;\n  top: 10% !important;\n  height: 20% !important;\n  z-index: 99999 !important;\n}\n\n.cleanslate .zb-container-review {\n  width: 15% !important;\n  padding-right: 15px !important;\n  padding-left: 15px !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  overflow-x: hidden !important;\n  overflow-y: hidden !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important;\n  position: fixed !important;\n  right: 0px !important;\n  top: 0px !important;\n  height: 20% !important;\n  z-index: 99999 !important;\n}\n\n.cleanslate .zb-h5 {\n  font-size: 1.25rem !important;\n  font-weight: 500 !important;\n  line-height: 1.2 !important;\n}\n\n.cleanslate .zb-text-muted {\n  color: #6c757d !important;\n}\n\n.cleanslate .zb-float-right {\n  float: right !important;\n}\n\n.cleanslate .zb-no-visibility {\n  visibility: hidden !important;\n}\n\n.cleanslate .zb-anchor {\n  color: #007bff !important;\n  text-decoration: none !important;\n  background-color: transparent !important;\n}\n\n.cleanslate .zb-cursor-util {\n  cursor: pointer !important;\n}\n\n/** Icons **/\n.cleanslate .zb-icon {\n  display: inline-block !important;\n  width: 1em !important;\n  height: 1em !important;\n  stroke-width: 0 !important;\n  stroke: currentColor !important;\n  fill: currentColor !important;\n}\n\n.cleanslate .zb-icon-camera {\n  height: 100% !important;\n  width: 1.0714285714285714em !important;\n  display: table-cell !important;\n  vertical-align: middle !important;\n  font-size: 40px !important;\n  color: rgb(43, 222, 115) !important;\n}\n\n/** Buttons **/\n.cleanslate .zb-container .zb-btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  padding: 0.5rem 0.5rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.3rem !important;\n  margin-top: -3px !important;\n  border: 1px solid transparent !important;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n\n.cleanslate .zb-container-review .zb-btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  padding: 0.5rem 0.5rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.3rem !important;\n  margin-top: -3px !important;\n  border: 1px solid transparent !important;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n\n.cleanslate .zb-btn:focus {\n  outline: 0 !important;\n}\n\n.cleanslate .zb-container .zb-btn-sm {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  padding: 0.25rem 0.75rem !important;\n  font-size: 0.5 rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.3rem !important;\n  border: 1px solid #ffffff !important;\n  margin-right: 10px !important;\n  margin-top: 0px !important;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n\n.cleanslate .zb-review-container .zb-btn-sm {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  user-select: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  padding: 0.25rem 0.75rem !important;\n  font-size: 0.5 rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0.3rem !important;\n  border: 1px solid #ffffff !important;\n  margin-right: 10px !important;\n  margin-top: 0px !important;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n\n.cleanslate .zb-container .zb-btn-dark {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  color: #ffffff !important;\n}\n\n.cleanslate .zb-review-container .zb-btn-dark {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  color: #ffffff !important;\n}\n\n.cleanslate .zb-btn-success {\n  background-color: rgb(43, 222, 115) !important;\n  border: none !important;\n  color: #ffffff !important;\n  padding: 0.375rem 0.75rem !important;\n  font-size: 1rem !important;\n  border-radius: 0.25rem !important;\n}\n\n.cleanslate .zb-btn-position {\n  position: absolute !important;\n  right: 0px !important;\n  top: 5px !important;\n  border-radius: 0px !important;\n}\n\n.cleanslate .zb-btn-active {\n  background-color: rgb(43, 222, 115) !important;\n}\n\n/** Card **/\n.cleanslate .zb-card {\n  position: relative !important;\n  display: flex !important;\n  display: -ms-flexbox !important;\n  flex-direction: column !important;\n  -ms-flex-direction: column !important;\n  min-width: 0 !important;\n  word-wrap: break-word !important;\n  background-color: #fff !important;\n  background-clip: border-box !important;\n  border: 1px solid rgba(0, 0, 0, 0.125) !important;\n  border-radius: 0.25rem !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,\n    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px !important;\n}\n\n.cleanslate .zb-card-body {\n  flex: 1 1 auto !important;\n  min-height: 1px !important;\n  padding: 1.25rem !important;\n}\n\n.cleanslate .zb-card-title {\n  margin-bottom: 0.75rem !important;\n}\n\n.cleanslate .zb-guest-form-card {\n  width: 18rem !important;\n  position: absolute !important;\n  top: 55px !important;\n  right: 5px !important;\n}\n\n/** Form **/\n.cleanslate .zb-form {\n  margin-top: 1.25rem !important;\n}\n\n.cleanslate .zb-form-group {\n  margin-bottom: 1rem !important;\n}\n\n.cleanslate .zb-form-label {\n  display: inline-block !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.cleanslate .zb-form-control {\n  display: block !important;\n  width: 90% !important;\n  height: calc(1em + 0.75rem + 2px) !important;\n  padding: 0.375rem 0.75rem !important;\n  font-size: 1rem !important;\n  font-weight: 400 !important;\n  line-height: 1.5 !important;\n  color: #495057 !important;\n  background-color: #fff !important;\n  background-clip: padding-box !important;\n  border: 1px solid #ced4da !important;\n  border-radius: 0.25rem !important;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n}\n\n.cleanslate .zb-form-text {\n  display: block !important;\n  margin-top: 1rem !important;\n  font-size: 80% !important;\n  font-weight: 400 !important;\n}\n\n/** Review container **/\n.cleanslate .zb-container .review-container {\n  width: 100% !important;\n  background-color: rgb(75, 81, 91) !important;\n  display: -webkit-inline-box !important;\n  display: inline-flexbox !important;\n  height: 3.5 !important;\n  right: 0px !important;\n  z-index: 120000 !important;\n  position: absolute !important;\n  right: 5px !important;\n  top: 5px !important;\n  padding: 0.5rem 0rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0rem !important;\n  top: 0px !important;\n  right: 0px !important;\n}\n\n.cleanslate .zb-container-review .review-container {\n  width: 100% !important;\n  background-color: rgb(75, 81, 91) !important;\n  display: -webkit-inline-box !important;\n  display: inline-flexbox !important;\n  height: 3.5 !important;\n  right: 0px !important;\n  z-index: 120000 !important;\n  position: absolute !important;\n  right: 5px !important;\n  top: 5px !important;\n  padding: 0.5rem 0rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.5 !important;\n  border-radius: 0rem !important;\n  top: 0px !important;\n  right: 0px !important;\n}\n\n@media only screen and (min-width: 1180px) and (max-width: 1300px) {\n  .cleanslate .zb-container {\n    width: 18% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 18% !important;\n  }\n}\n\n@media only screen and (min-width: 1120px) and (max-width: 1179px) {\n  .cleanslate .zb-container {\n    width: 19.6% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 19.6% !important;\n  }\n}\n\n@media only screen and (min-width: 1070px) and (max-width: 1119px) {\n  .cleanslate .zb-container  {\n    width: 20.2% !important;\n  }\n  .cleanslate .zb-container-review  {\n    width: 20.2% !important;\n  }\n}\n\n@media only screen and (min-width: 1020px) and (max-width: 1069px) {\n  .cleanslate .zb-container {\n    width: 21% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 21% !important;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1019px) {\n  .cleanslate .zb-container  {\n    width: 22.2% !important;\n  }\n  .cleanslate .zb-container-review  {\n    width: 22.2% !important;\n  }\n}\n\n@media only screen and (min-width: 910px) and (max-width: 979px) {\n  .cleanslate .zb-container  {\n    width: 24.2% !important;\n  }\n  .cleanslate .zb-container-review  {\n    width: 24.2% !important;\n  }\n}\n\n@media only screen and (min-width: 870px) and (max-width: 909px) {\n  .cleanslate .zb-container {\n    width: 27% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 27% !important;\n  }\n}\n\n@media only screen and (min-width: 800px) and (max-width: 869px) {\n  .cleanslate .zb-container {\n    width: 26.5% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 26.5% !important;\n  }\n}\n\n@media only screen and (min-width: 750px) and (max-width: 799px) {\n  .cleanslate .zb-container  {\n    width: 28% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 28% !important;\n  }\n}\n\n@media only screen and (min-width: 700px) and (max-width: 749px) {\n  .cleanslate .zb-container  {\n    width: 28% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 28% !important;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 699px) {\n  .cleanslate .zb-container {\n    width: 29% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 29% !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 679px) {\n  .cleanslate .zb-container {\n    width: 31% !important;\n  }\n  .cleanslate .zb-container-review {\n    width: 31% !important;\n  }\n}\n\n/** Snackbar **/\n.cleanslate #zb-snackbar {\n  visibility: visible !important;\n  min-width: 250px !important;\n  margin-left: -125px !important;\n  background-color: #333 !important;\n  color: #fff !important;\n  text-align: center !important; /* Centered text */\n  border-radius: 2px !important; /* Rounded borders */\n  padding: 16px !important; /* Padding */\n  position: fixed !important; /* Sit on top of the screen */\n  z-index: 1 !important; /* Add a z-index if needed */\n  left: 50% !important; /* Center the snackbar */\n  bottom: 10% !important;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 20s !important;\n  animation: fadein 0.5s, fadeout 0.5s 20s !important;\n}\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n/** Custom Spinner **/\n.cleanslate #zb-loading {\n  display: inline-block !important;\n  width: 20px !important;\n  height: 20px !important;\n  border: 3px solid rgb(43, 222, 115) !important;\n  border-radius: 50% !important;\n  border-top-color: #fff !important;\n  animation: spin 1s ease-in-out infinite !important;\n  -webkit-animation: spin 1s ease-in-out infinite !important;\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n/** Switch **/\n.cleanslate .zb-switch {\n  position: relative !important;\n  height: 26px !important;\n  width: 120px !important;\n  background: rgba(0, 0, 0, 0.25) !important;\n  border-radius: 3px !important;\n  top: 6px !important;\n  left: 25px !important;\n}\n\n.cleanslate .zb-switch-input {\n  display: none !important;\n}\n\n.cleanslate .zb-switch-label {\n  position: relative !important;\n  z-index: 2 !important;\n  float: left !important;\n  width: 60px !important;\n  line-height: 26px !important;\n  font-size: 12px !important;\n  color: rgb(255, 255, 255) !important;\n  text-align: center !important;\n  cursor: pointer !important;\n}\n\n.cleanslate .zb-switch-label-off {\n  padding: 2px;\n}\n\n.cleanslate .zb-switch-label-on {\n  padding: 2px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact-habitat/dist/preact-habitat.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/preact-habitat/dist/preact-habitat.es.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");


/**
 * Removes `-` fron a string and capetalize the letter after
 * example: data-props-hello-world =>  dataPropsHelloWorld
 * Used for props passed from host DOM element
 * @param  {String} str string
 * @return {String} Capetalized string
 */
var camelcasize = function (str) {
  return str.replace(/-([a-z])/gi, function (all, letter) {
    return letter.toUpperCase();
  });
};

/**
 * [getExecutedScript internal widget to provide the currently executed script]
 * @param  {document} document [Browser document object]
 * @return {HTMLElement}     [script Element]
 */
var getExecutedScript = function () {
  return (
    document.currentScript ||
    (function () {
      var scripts = document.getElementsByTagName("script");
      return scripts[scripts.length - 1];
    })()
  );
};

/**
 * Get the props from a host element's data attributes
 * @param  {Element} tag The host element
 * @return {Object}  props object to be passed to the component
 */
var collectPropsFromElement = function (element, defaultProps) {
  if ( defaultProps === void 0 ) defaultProps = {};

  var attrs = element.attributes;

  var props = Object.assign({}, defaultProps);

  // collect from element
  Object.keys(attrs).forEach(function (key) {
    if (attrs.hasOwnProperty(key)) {
      var dataAttrName = attrs[key].name;
      if (!dataAttrName || typeof dataAttrName !== "string") {
        return false;
      }
      var propName = dataAttrName.split(/(data-props?-)/).pop() || '';
      propName = camelcasize(propName);
      if (dataAttrName !== propName) {
        var propValue = attrs[key].nodeValue;
        props[propName] = propValue;
      }
    }
  });

  // check for child script text/props or application/json
  [].forEach.call(element.getElementsByTagName('script'), function (scrp) {
    var propsObj = {};
    if(scrp.hasAttribute('type')) {
      if (
        scrp.getAttribute("type") !== "text/props" &&
        scrp.getAttribute("type") !== "application/json"
      )
        { return; }
      try {
        propsObj = JSON.parse(scrp.innerHTML);
      } catch(e) {
        throw new Error(e)
      }
      Object.assign(props, propsObj);
    }
  });  

  return props;
};

var getHabitatSelectorFromClient = function (currentScript) {
  var scriptTagAttrs = currentScript.attributes;
  var selector = null;
  // check for another props attached to the tag
  Object.keys(scriptTagAttrs).forEach(function (key) {
    if (scriptTagAttrs.hasOwnProperty(key)) {
      var dataAttrName = scriptTagAttrs[key].name;
      if (dataAttrName === 'data-mount-in') {
        selector = scriptTagAttrs[key].nodeValue;
      }
    }
  });
  return selector
};

/**
 * Return array of 0 or more elements that will host our widget
 * @param  {id} attrId the data widget id attribute the host should have
 * @param  {document} scope  Docuemnt object or DOM Element as a scope
 * @return {Array}        Array of matching habitats
 */
var widgetDOMHostElements = function (
  ref
) {
  var selector = ref.selector;
  var inline = ref.inline;
  var clientSpecified = ref.clientSpecified;

  var hostNodes = [];
  var currentScript = getExecutedScript();

  if (inline === true) {
    var parentNode = currentScript.parentNode;
    hostNodes.push(parentNode);
  }
  if (clientSpecified === true && !selector) {
    // user did not specify where to mount - get it from script tag attributes
    selector = getHabitatSelectorFromClient(currentScript);
  }
  if (selector) {
    [].forEach.call(document.querySelectorAll(selector), function (queriedTag) {
      hostNodes.push(queriedTag);
    });
  }
  return hostNodes;
};

/**
 * preact render function that will be queued if the DOM is not ready
 * and executed immeidatly if DOM is ready
 */
var preactRender = function (widget, hostElements, root, cleanRoot, defaultProps) {
  hostElements.forEach(function (elm) {
    var hostNode = elm;
    if (hostNode._habitat) {
      return; 
    }
    hostNode._habitat = true;
    var props = collectPropsFromElement(elm, defaultProps) || defaultProps;
    if(cleanRoot) {
      hostNode.innerHTML = "";
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(widget, props), hostNode, root);
  });
};

var habitat = function (Widget) {
  // Widget represents the Preact component we need to mount
  var widget = Widget;
  // preact root render helper
  var root = null;

  var render$$1 = function (
    ref
  ) {
    if ( ref === void 0 ) ref = {};
    var selector = ref.selector; if ( selector === void 0 ) selector = null;
    var inline = ref.inline; if ( inline === void 0 ) inline = false;
    var clean = ref.clean; if ( clean === void 0 ) clean = false;
    var clientSpecified = ref.clientSpecified; if ( clientSpecified === void 0 ) clientSpecified = false;
    var defaultProps = ref.defaultProps; if ( defaultProps === void 0 ) defaultProps = {};

    var elements = widgetDOMHostElements({
      selector: selector,
      inline: inline,
      clientSpecified: clientSpecified
    });
    var loaded = function () {
      if (elements.length > 0) {
        var elements$1 = widgetDOMHostElements({
          selector: selector,
          inline: inline,
          clientSpecified: clientSpecified
        });

        return preactRender(widget, elements$1, root, clean, defaultProps);
      }
    };
    loaded();
    document.addEventListener("DOMContentLoaded", loaded);
    document.addEventListener("load", loaded);
  };

  return { render: render$$1 };
};

/* harmony default export */ __webpack_exports__["default"] = (habitat);
//# sourceMappingURL=preact-habitat.es.js.map


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, Suspense, SuspenseList, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return L; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function E(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}var C=function(n){var t,e;function r(t){var e;return(e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)},r}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);function _(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,E({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;function S(n){function t(t){var e=E({},t);return delete e.ref,n(e,t.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),A&&A(n)};var k=function(n,t){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).reduce(function(n,e,r){return n.concat(t(e,r))},[]):null},R={map:k,forEach:k,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){if(1!==(n=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},F=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function N(n){return n&&((n=E({},n)).__c=null,n.__k=n.__k&&n.__k.map(N)),n}function U(n){this.__u=0,this.o=null,this.__b=null}function M(n){var t=n.__.__c;return t&&t.u&&t.u(n)}function L(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,o)}return o.displayName="Lazy",o.t=!0,o}function O(){this.i=null,this.l=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(n,t.__c);F(n,t,e)},(U.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=this;null==e.o&&(e.o=[]),e.o.push(t);var r=M(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=e.state.u,e.setState({u:e.__b=null});n=e.o.pop();)n.forceUpdate()};e.__u++||e.setState({u:e.__b=e.__v.__k[0]}),n.then(u,u)},U.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=N(this.__b),this.__b=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Component"],null,t.u?null:n.children),t.u&&n.fallback]};var P=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2]}};(O.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).u=function(n){var t=this,e=M(t.__v),r=t.l.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),P(t,n,r)):o()};e?e(u):u()}},O.prototype.render=function(n){this.i=null,this.l=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},O.prototype.componentDidUpdate=O.prototype.componentDidMount=function(){var n=this;n.l.forEach(function(t,e){P(n,e,t)})};var W=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function j(n){var t=this,e=n.container,r=Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(W,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.v.parentNode&&t.s.removeChild(t.v),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h),t.p=!1),n.vnode?t.p?(e.__k=t.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e),t.__k=e.__k):(t.v=document.createTextNode(""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("",e),e.appendChild(t.v),t.p=!0,t.s=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h)},null}function z(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(j,{vnode:n,container:t})}var D=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={};var H="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function T(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function V(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}var Z=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){Z&&(n=Z(n)),n.persist=function(){};var t=!1,e=!1,r=n.stopPropagation;n.stopPropagation=function(){r.call(n),t=!0};var o=n.preventDefault;return n.preventDefault=function(){o.call(n),e=!0},n.isPropagationStopped=function(){return t},n.isDefaultPrevented=function(){return e},n.nativeEvent=n};var $={configurable:!0,get:function(){return this.class}},q=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.$$typeof=H;var t=n.type,e=n.props;if(e.class!=e.className&&($.enumerable="className"in e,null!=e.className&&(e.class=e.className),Object.defineProperty(e,"className",$)),"function"!=typeof t){var r,o,u;for(u in e.defaultValue&&void 0!==e.value&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0)}),delete e.value),e)if(r=D.test(u))break;if(r)for(u in o=n.props={},e)o[D.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u]}!function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),q&&q(n)};var B="16.8.0";function G(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function J(n){return!!n&&n.$$typeof===H}function K(n){return J(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function Q(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function X(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)};/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:R,render:T,hydrate:T,unmountComponentAtNode:Q,createPortal:z,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:G,cloneElement:K,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:J,findDOMNode:X,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:C,memo:_,forwardRef:S,unstable_batchedUpdates:Y,Suspense:U,SuspenseList:O,lazy:L});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return p(n,o,l&&l.key,l&&l.ref)}function p(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function y(){return{}}function d(n){return n.children}function m(n,l){this.props=n,this.context=l}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_)}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],i=A(r,t,a({},t),l.__n,void 0!==r.ownerSVGElement,null,u,null==o?w(t):o),T(u,t),i!=o&&g(t)))})}function b(n,l,u,i,t,o,r,f,s){var a,h,p,y,d,m,g,k=u&&u.__k||c,_=k.length;if(f==e&&(f=null!=o?o[0]:_?w(u,0):null),a=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[a])||p&&u.key==p.key&&u.type===p.type)k[a]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null}if(y=A(n,u,p=p||e,i,t,o,r,f,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||y,u)),null!=y){var c;if(null==m&&(m=y),void 0!==u.__d)c=u.__d,u.__d=void 0;else if(o==p||y!=f||null==y.parentNode){n:if(null==f||f.parentNode!==n)n.appendChild(y),c=null;else{for(d=f,h=0;(d=d.nextSibling)&&h<_;h+=2)if(d==y)break n;n.insertBefore(y,f),c=f}"option"==l.type&&(n.value="")}f=void 0!==c?c:y.nextSibling,"function"==typeof l.type&&(l.__d=f)}else f&&p.__e==f&&f.parentNode!=n&&(f=w(p))}return a++,u}),l.__e=m,null!=o&&"function"!=typeof l.type)for(a=o.length;a--;)null!=o[a]&&v(o[a]);for(a=_;a--;)null!=k[a]&&D(k[a],k[a]);if(g)for(a=0;a<g.length;a++)j(g[a],g[++a],g[++a])}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)x(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?p(null,n,null,null):null!=n.__e||null!=n.__c?p(n.type,n.props,n.key,null):n):n);return u}function P(n,l,u,i,t){var o;for(o in u)o in l||N(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||N(n,o,l[o],u[o],i)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u}function N(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(r in i)u&&r in u||C(o,r,"");if(u)for(f in u)i&&u[f]===i[f]||C(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,z,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,z,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function z(l){this.l[l.type](n.event?n.event(l):l)}function A(l,u,i,t,o,r,f,e,c){var s,v,h,p,y,w,g,k,_,x,P=u.type;if(void 0!==u.constructor)return null;(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(k=u.props,_=(s=P.contextType)&&t[s.__c],x=s?_?_.props.value:s.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new m(k,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=a({},v.__s)),a(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,y=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),s=0;s<u.__k.length;s++)u.__k[s]&&(u.__k[s].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,y,w)})}v.context=x,v.props=k,v.state=v.__s,(s=n.__r)&&s(u),v.__d=!1,v.__v=u,v.__P=l,s=v.render(v.props,v.state,v.context),u.__k=null!=s&&s.type==d&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=v.getChildContext&&(t=a(a({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,y)),b(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1}else u.__e=$(i.__e,u,i,t,o,r,f,c);(s=n.diffed)&&s(u)}catch(l){n.__e(l,u,i)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,i,t,o,r,f){var s,a,v,h,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null}if(null===l.type)y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=c.slice.call(n.childNodes)),v=(y=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(y===e)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}P(n,d,y,t,f),l.__k=l.props.children,h||b(n,l,u,i,"foreignObject"!==l.type&&t,o,r,e,f),f||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o)}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],A(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:c.slice.call(u.childNodes),f,i||e,t),T(f,l)}function I(n,l){H(n,l,r)}function L(n,l){return l=a(a({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),p(n.type,l,l.key||n.key,l.ref||n.ref)}function M(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,k(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return k(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return A; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i=[],o=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function a(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r);var u=r.__H||(r.__H={__:[],__h:[]});return t>=u.__.length&&u.__.push({}),u.__[t]}function v(n){return m(x,n)}function m(n,u,i){var o=a(t++);return o.__c||(o.__c=r,o.__=[i?i(u):x(void 0,u),function(t){var r=n(o.__[0],t);o.__[0]!==r&&(o.__[0]=r,o.__c.setState({}))}]),o.__}function p(n,u){var i=a(t++);q(i.__H,u)&&(i.__=n,i.__H=u,r.__H.__h.push(i))}function l(n,u){var i=a(t++);q(i.__H,u)&&(i.__=n,i.__H=u,r.__h.push(i))}function y(n){return s(function(){return{current:n}},[])}function d(n,t,r){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==r?r:r.concat(n))}function s(n,r){var u=a(t++);return q(u.__H,r)?(u.__H=r,u.__h=n,u.__=n()):u.__}function h(n,t){return s(function(){return n},t)}function T(n){var u=r.context[n.__c];if(!u)return n.__;var i=a(t++);return null==i.__&&(i.__=!0,u.sub(r)),u.props.value}function w(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r?r(t):t)}function A(n){var u=a(t++),i=v();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n){u.__&&u.__(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function F(){i.some(function(t){if(t.__P)try{t.__H.__h.forEach(_),t.__H.__h.forEach(g),t.__H.__h=[]}catch(r){return preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v),!0}}),i=[]}function _(n){n.t&&n.t()}function g(n){var t=n.__();"function"==typeof t&&(n.t=t)}function q(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function x(n,t){return"function"==typeof t?t(n):t}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){o&&o(n),t=0,(r=n.__c).__H&&(r.__H.__h.forEach(_),r.__H.__h.forEach(g),r.__H.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var r=t.__c;if(r){var o=r.__H;o&&o.__h.length&&(1!==i.push(r)&&u===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((u=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);"undefined"!=typeof window&&(t=requestAnimationFrame(r))})(F))}},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,r){r.some(function(t){try{t.__h.forEach(_),t.__h=t.__h.filter(function(n){return!n.__||g(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),c&&c(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){e&&e(t);var r=t.__c;if(r){var u=r.__H;if(u)try{u.__.forEach(function(n){return n.t&&n.t()})}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,r.__v)}}};
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _components_Widget_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Widget/Widget */ "./src/components/Widget/Widget.js");
/* harmony import */ var cleanslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cleanslate */ "./node_modules/cleanslate/cleanslate.css");
/* harmony import */ var cleanslate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cleanslate__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "specialAuth", function () {
      _this.setState({
        initDataComplete: false
      }, function () {
        _this.setState({
          initDataComplete: true
        }, function () {
          window.addEventListener("message", _this.specialGetAuth);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "callback", function (dataUri, formObj) {
      // Call postData and pass the data
      _this.postData(dataUri, formObj);
    });

    _defineProperty(_assertThisInitialized(_this), "authenticationCallback", function (userDataObj, isGuest) {
      return new Promise(function (resolve) {
        if (isGuest) {
          _this.setState({
            userId: userDataObj.userId,
            userName: userDataObj.userName,
            userEmail: userDataObj.userEmail,
            dataCardHeight: false,
            guestUser: true
          });
        } else {
          _this.setState({
            userId: userDataObj.userId,
            userName: userDataObj.userName,
            userEmail: userDataObj.userEmail,
            dataCardHeight: false,
            guestUser: false,
            loginToken: userDataObj.loginToken
          });
        } // Set the user id in local storage


        localStorage.setItem("zb-userId", userDataObj.userId);
        localStorage.setItem("zb-userName", userDataObj.userName);
        localStorage.setItem("zb-userEmail", userDataObj.userEmail);
        resolve(true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleBrowseCallback", function () {
      _this.setState({
        showUrl: !_this.state.showUrl,
        browseBtnActive: !_this.state.browseBtnActive
      }, function () {// console.log(this.state.showUrl);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dataCardHeightCallback", function (bool) {
      _this.setState({
        dataCardHeight: bool
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cameraBtnActiveCallback", function () {
      _this.setState({
        cameraBtnActive: !_this.state.cameraBtnActive
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showAppLoginCallback", function () {
      // this.setState({
      //   showAppLogin: true
      // })
      var opener = window.open("https://app.zipboard.co/", "Google", "width=400,height=500");

      _this.setState({
        showAppLogin: true
      });

      var checkClose = setInterval(function () {
        if (opener.closed) {
          clearInterval(checkClose);

          _this.setState({
            showAppLogin: false
          });
        }
      }, 500);
      window.addEventListener("message", function (e) {
        if (e.data.type == "closeIframe") {
          clearInterval(checkClose);
          opener.close(); // window.location.reload(true);

          _this.specialAuth();

          _this.setState({
            showAppLogin: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIframeLoad", function () {
      console.log("frame loaded");
    });

    _this.iframeRef = preact_compat__WEBPACK_IMPORTED_MODULE_0__["default"].createRef();
    _this.postData = _this.postData.bind(_assertThisInitialized(_this));
    _this.getData = _this.getData.bind(_assertThisInitialized(_this));
    _this.getAuth = _this.getAuth.bind(_assertThisInitialized(_this));
    _this.specialGetAuth = _this.specialGetAuth.bind(_assertThisInitialized(_this));
    _this.state = {
      projectData: [],
      fileData: [],
      projectId: "",
      fileId: "",
      userId: "",
      guestUser: false,
      showSpinner: false,
      snackbarShow: false,
      showUrl: false,
      currLink: "",
      browseBtnActive: true,
      dataCardHeight: false,
      zbKey: "",
      collabData: [],
      initDataComplete: false,
      showWidget: false,
      dataReady: false,
      serverError: false,
      cameraBtnActive: true,
      loginToken: "",
      showAppLogin: false,
      activateNavigator: false,
      showLoggedInError: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "postData",
    value: async function postData(dataUri, formObj) {
      var _this2 = this;

      // Show the spinner
      this.setState({
        showSpinner: true
      });
      var url = "https://app.zipboard.co/api/v1/screenshot"; // Get the document title as well

      var page_title = document.title;
      var params = {
        user_id: this.state.userId,
        project_id: this.state.projectId,
        file_id: this.state.fileId,
        data_uri: dataUri,
        page_title: page_title
      };
      var searchParams = new URLSearchParams();
      searchParams.set("user_id", params.user_id);
      searchParams.set("project_id", params.project_id);
      searchParams.set("file_id", params.file_id);
      searchParams.set("data_uri", params.data_uri);
      searchParams.set("page_title", params.page_title);

      if (this.state.guestUser) {
        searchParams.set("type", "widget");
      }

      var apiCall = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer 303d1d7f7d4ca7ac3bb92bd64ffd16f4",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });
      var response = await apiCall.json();

      if (response.data) {
        // Stop the spinner
        this.setState({
          showSpinner: false,
          snackbarShow: true
        });
      } else {
        this.setState({
          serverError: true,
          cameraBtnActive: true
        });
        setTimeout(function () {
          _this2.setState({
            serverError: false
          });
        }, 1000);
      }

      setTimeout(function () {
        _this2.setState({
          snackbarShow: false
        });

        if (response.data) {
          var _this2$state = _this2.state,
              guestUser = _this2$state.guestUser,
              loginToken = _this2$state.loginToken;

          if (guestUser && response.data.link.linkTokenId && response.data.screenId) {
            var link = "https://app.zipboard.co/project/".concat(_this2.state.projectId, "/").concat(_this2.state.fileId, "/share/").concat(response.data.link.linkTokenId, "/").concat(response.data.screenId, "/user?user=").concat(_this2.state.userId);
            localStorage.setItem("zB-currLink", link);

            _this2.setState({
              showUrl: true,
              currLink: link,
              browseBtnActive: false,
              cameraBtnActive: true
            });
          } else {
            var role = "ab12c3";

            var _link = "https://app.zipboard.co/project/".concat(_this2.state.projectId, "/").concat(_this2.state.fileId, "/reviewboard/").concat(response.data);

            localStorage.setItem("zB-currLink", _link);

            _this2.setState({
              showUrl: true,
              currLink: _link,
              browseBtnActive: false,
              cameraBtnActive: true
            });
          }
        }
      }, 500);
    }
  }, {
    key: "getData",
    value: async function getData() {
      var key = "303d1d7f7d4ca7ac3bb92bd64ffd16f4";
      var widgetKey = this.state.zbKey;
      var url = "https://app.zipboard.co/api/v1/widget";
      var searchParams = new URLSearchParams();
      searchParams.set("widgetKey", widgetKey);
      var response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer 303d1d7f7d4ca7ac3bb92bd64ffd16f4",
          //find a way to authenticate extention default extention api key
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });
      return await response.json();
    }
  }, {
    key: "getAuth",
    value: function getAuth(e) {
      var _this3 = this;

      var node = this.iframeRef.current;

      if (node.readyState !== "loading") {
        if (e && e.data && e.data.type == "ZB") {
          var userId = e.data.userId;

          if (userId) {
            var userExists = this.state.collabData.collaborators.filter(function (collab) {
              return collab.userId == userId;
            });

            if (userExists.length) {
              this.setState({
                userId: e.data.userId
              }, function () {
                var link = localStorage.getItem("zB-currLink");

                if (link) {
                  _this3.setState({
                    currLink: link,
                    dataReady: true
                  });
                } else {
                  _this3.setState({
                    dataReady: true
                  });
                }
              });
            } else {
              var _userId = localStorage.getItem("zb-userId");

              if (_userId) {
                this.setState({
                  userId: _userId,
                  guestUser: true,
                  dataCardHeight: false,
                  dataReady: true
                }, function () {
                  var link = localStorage.getItem("zB-currLink");

                  if (link) {
                    _this3.setState({
                      currLink: link,
                      dataReady: true
                    });
                  } else {
                    _this3.setState({
                      dataReady: true
                    });
                  }
                });
              } else {
                this.setState({
                  loadDataCard: true,
                  dataReady: true
                });
              }
            }
          } else {
            var _userId2 = localStorage.getItem("zb-userId");

            if (_userId2) {
              this.setState({
                userId: _userId2,
                guestUser: true,
                dataCardHeight: false,
                dataReady: true
              }, function () {
                var link = localStorage.getItem("zB-currLink");

                if (link) {
                  _this3.setState({
                    currLink: link,
                    dataReady: true
                  });
                } else {
                  _this3.setState({
                    dataReady: true
                  });
                }
              });
            } else {
              this.setState({
                loadDataCard: true,
                dataReady: true
              });
            }
          }
        }
      } else {
        node.addEventListener("DOMContentLoaded", function () {
          if (e && e.data && e.data.type == "ZB") {
            var _userId3 = e.data.userId;

            if (_userId3) {
              var _userExists = _this3.state.collabData.collaborators.filter(function (collab) {
                return collab.userId == _userId3;
              });

              if (_userExists.length) {
                _this3.setState({
                  userId: e.data.userId
                }, function () {
                  var link = localStorage.getItem("zB-currLink");

                  if (link) {
                    _this3.setState({
                      currLink: link
                    });
                  }
                });
              } else {
                var _userId4 = localStorage.getItem("zb-userId");

                if (_userId4) {
                  _this3.setState({
                    userId: _userId4,
                    guestUser: true,
                    dataCardHeight: false
                  }, function () {
                    var link = localStorage.getItem("zB-currLink");

                    if (link) {
                      _this3.setState({
                        currLink: link
                      });
                    }
                  });
                } else {
                  _this3.setState({
                    loadDataCard: true
                  });
                }
              }
            } else {
              var _userId5 = localStorage.getItem("zb-userId");

              if (_userId5) {
                _this3.setState({
                  userId: _userId5,
                  guestUser: true,
                  dataCardHeight: false
                }, function () {
                  var link = localStorage.getItem("zB-currLink");

                  if (link) {
                    _this3.setState({
                      currLink: link
                    });
                  }
                });
              } else {
                _this3.setState({
                  loadDataCard: true
                });
              }
            }
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var zbKey = this.props.zbKey;

      if (zbKey) {
        this.setState({
          zbKey: zbKey
        }, function () {
          if (zbKey) {
            _this4.getData().then(function (res) {
              // Set project and file id in state
              _this4.setState({
                fileId: res.body.fileId,
                projectId: res.body.projectId,
                collabData: res.body.projectCollabs[0],
                initDataComplete: true
              }, function () {
                // Check local storage for the user if, if it exists, set it in the state
                window.addEventListener("message", _this4.getAuth);
              });
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        });
      }
    }
  }, {
    key: "specialGetAuth",
    value: async function specialGetAuth(e) {
      var _this5 = this;

      var node = this.iframeRef.current;

      if (node.readyState !== "loading") {
        if (e && e.data && e.data.type == "ZB") {
          var userId = e.data.userId;

          if (userId) {
            var userExists = this.state.collabData.collaborators.filter(function (collab) {
              return collab.userId == userId;
            });

            if (userExists.length) {
              this.setState({
                userId: userId,
                dataCardHeight: false
              }, function () {
                _this5.setState({
                  activateNavigator: true
                });
              });
            } else {
              this.setState({
                showLoggedInError: true,
                loadDataCard: true,
                dataReady: true
              });
              setTimeout(function () {
                _this5.setState({
                  showLoggedInError: false
                });
              }, 2000);
              var url = "https://app.zipboard.co/api/v1/widget/logout";
              var searchParams = new URLSearchParams();
              searchParams.set("userId", userId);
              this.setState({
                userId: ""
              });
              var response = await fetch(url, {
                method: "POST",
                headers: {
                  Authorization: "Bearer 303d1d7f7d4ca7ac3bb92bd64ffd16f4",
                  //find a way to authenticate extention default extention api key
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: searchParams
              });
              await response.json();
            }
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var callback = this.callback,
          authenticationCallback = this.authenticationCallback,
          iframeRef = this.iframeRef,
          toggleBrowseCallback = this.toggleBrowseCallback,
          dataCardHeightCallback = this.dataCardHeightCallback,
          cameraBtnActiveCallback = this.cameraBtnActiveCallback,
          showAppLoginCallback = this.showAppLoginCallback;
      var _this$state = this.state,
          projectData = _this$state.projectData,
          fileData = _this$state.fileData,
          showSpinner = _this$state.showSpinner,
          userId = _this$state.userId,
          projectId = _this$state.projectId,
          browseBtnActive = _this$state.browseBtnActive,
          currLink = _this$state.currLink,
          loadDataCard = _this$state.loadDataCard,
          serverError = _this$state.serverError,
          cameraBtnActive = _this$state.cameraBtnActive,
          activateNavigator = _this$state.activateNavigator,
          showLoggedInError = _this$state.showLoggedInError;
      return h("div", {
        className: "cleanslate"
      }, h("div", {
        className: !this.state.showUrl ? "zb-container" : "zb-container-review",
        style: this.state.dataCardHeight ? "height: 70% !important; width: 25% !important" : "height: 30% !important"
      }, this.state.dataReady ? h(_components_Widget_Widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
        callback: callback,
        projectData: projectData,
        fileData: fileData,
        showSpinner: showSpinner,
        userId: userId,
        projectId: projectId,
        authenticationCallback: authenticationCallback,
        browseBtnActive: browseBtnActive,
        toggleBrowseCallback: toggleBrowseCallback,
        dataCardHeightCallback: dataCardHeightCallback,
        currLink: currLink,
        loadDataCard: loadDataCard,
        cameraBtnActive: cameraBtnActive,
        cameraBtnActiveCallback: cameraBtnActiveCallback,
        showAppLoginCallback: showAppLoginCallback,
        activateNavigator: activateNavigator
      }) : null, this.state.snackbarShow ? h("div", {
        id: "zb-snackbar",
        style: ""
      }, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        style: "margin-right: 10px !impoetant"
      }, h("title", null, "check"), h("path", {
        style: {
          fill: "rgb(43, 222, 115)"
        },
        d: "M26.109 8.844c0 0.391-0.156 0.781-0.438 1.062l-13.438 13.438c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-7.781-7.781c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.609 10.25-10.266c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062z"
      })), h("span", {
        style: "position: relative !important; top: -8px !important; left: 10px !important"
      }, "Succesfully created screen")) : null, this.state.showSpinner ? h("div", {
        id: "zb-snackbar"
      }, h("span", {
        id: "zb-loading",
        style: {
          marginRight: "10px !important"
        }
      }), h("span", {
        style: "margin-left: 10px !important; position: relative !important; top: -7px !important"
      }, "Building your screen")) : null, showLoggedInError ? h("div", {
        id: "zb-snackbar",
        style: ""
      }, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "28",
        viewBox: "0 0 28 28"
      }, h("title", null, "exclamation-triangle"), h("path", {
        style: "fill: red;",
        d: "M16 21.484v-2.969c0-0.281-0.219-0.516-0.5-0.516h-3c-0.281 0-0.5 0.234-0.5 0.516v2.969c0 0.281 0.219 0.516 0.5 0.516h3c0.281 0 0.5-0.234 0.5-0.516zM15.969 15.641l0.281-7.172c0-0.094-0.047-0.219-0.156-0.297-0.094-0.078-0.234-0.172-0.375-0.172h-3.437c-0.141 0-0.281 0.094-0.375 0.172-0.109 0.078-0.156 0.234-0.156 0.328l0.266 7.141c0 0.203 0.234 0.359 0.531 0.359h2.891c0.281 0 0.516-0.156 0.531-0.359zM15.75 1.047l12 22c0.344 0.609 0.328 1.359-0.031 1.969s-1.016 0.984-1.719 0.984h-24c-0.703 0-1.359-0.375-1.719-0.984s-0.375-1.359-0.031-1.969l12-22c0.344-0.641 1.016-1.047 1.75-1.047s1.406 0.406 1.75 1.047z"
      })), h("span", {
        style: "position: relative !important; top: -8px !important; left: 10px !important"
      }, "You do not have permission to view this project")) : null, serverError ? h("div", {
        id: "zb-snackbar",
        style: ""
      }, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "28",
        viewBox: "0 0 28 28"
      }, h("title", null, "exclamation-triangle"), h("path", {
        style: "fill: red;",
        d: "M16 21.484v-2.969c0-0.281-0.219-0.516-0.5-0.516h-3c-0.281 0-0.5 0.234-0.5 0.516v2.969c0 0.281 0.219 0.516 0.5 0.516h3c0.281 0 0.5-0.234 0.5-0.516zM15.969 15.641l0.281-7.172c0-0.094-0.047-0.219-0.156-0.297-0.094-0.078-0.234-0.172-0.375-0.172h-3.437c-0.141 0-0.281 0.094-0.375 0.172-0.109 0.078-0.156 0.234-0.156 0.328l0.266 7.141c0 0.203 0.234 0.359 0.531 0.359h2.891c0.281 0 0.516-0.156 0.531-0.359zM15.75 1.047l12 22c0.344 0.609 0.328 1.359-0.031 1.969s-1.016 0.984-1.719 0.984h-24c-0.703 0-1.359-0.375-1.719-0.984s-0.375-1.359-0.031-1.969l12-22c0.344-0.641 1.016-1.047 1.75-1.047s1.406 0.406 1.75 1.047z"
      })), h("span", {
        style: "position: relative !important; top: -8px !important; left: 10px !important"
      }, "Server error. Please try again")) : null, this.state.initDataComplete ? h("iframe", {
        name: "Framename",
        src: "https://app.zipboard.co/explorer",
        width: "0",
        height: "0",
        frameborder: "0",
        scrolling: "auto",
        "class": "frame-area",
        ref: iframeRef,
        style: "width: 0 !important; height: 0 !important;"
      }) : null, this.state.showUrl ? h("div", {
        className: "zb-container"
      }, h("iframe", {
        src: this.state.currLink,
        style: " position: fixed !important; top: 0px !important; bottom: 0px !important; right: 0px !important; width: 100% !important; border: none !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; z-index: 99999 !important; height: 100% !important; "
      })) : null, this.state.showAppLogin ? h("div", {
        className: "zb-container"
      }, h("iframe", {
        id: "loginFrame",
        src: "https://app.zipboard.co/",
        style: " position: fixed !important; top: 0px !important; bottom: 0px !important; right: 0px !important; width: 100% !important; border: none !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; height: 1% !important; visibility: hidden !important; ",
        onLoad: this.onIframeLoad
      })) : null));
    }
  }]);

  return App;
}(preact_compat__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"]))

/***/ }),

/***/ "./src/components/Widget/DataCard.js":
/*!*******************************************!*\
  !*** ./src/components/Widget/DataCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function DataCard(_ref) {
  var _this = this;

  var hideCardCallback = _ref.hideCardCallback,
      showSpinner = _ref.showSpinner,
      dataGuestCallback = _ref.dataGuestCallback,
      dataCallback = _ref.dataCallback,
      showErrorMessage = _ref.showErrorMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAuth = _useState2[0],
      setShowAuth = _useState2[1];

  var handleGuestSubmit = function handleGuestSubmit(e) {
    e.preventDefault();
    var email = e.target.elements[0].value;
    var name = e.target.elements[1].value;

    if (name && email) {
      dataGuestCallback({
        email: email,
        name: name
      });
    }
  };

  var handleAuthSubmit = function handleAuthSubmit(e) {
    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (email && password) {
      var obj = {
        email: email,
        password: password
      };
      dataCallback(obj);
    }
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();

    _this.props.showAppLoginCallback();
  };

  return h("div", {
    className: "zb-card zb-guest-form-card"
  }, h("div", {
    className: "zb-card-body"
  }, !showAuth ? h("div", {
    className: "zb-card-title zb-h5"
  }, "Sign In As Guest", h("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "28",
    viewBox: "0 0 22 28",
    className: "zb-icon zb-cursor-util zb-float-right",
    onClick: hideCardCallback
  }, h("title", null, "close"), h("path", {
    d: "M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"
  }))) : null, !showAuth ? h("form", {
    className: "zb-form",
    onSubmit: handleGuestSubmit
  }, h("div", {
    className: "zb-form-group",
    controlId: "formBasicEmail"
  }, h("label", {
    className: "zb-form-label"
  }, "Email address"), h("input", {
    type: "email",
    className: "zb-form-control",
    placeholder: "Enter email"
  })), h("div", {
    className: "zb-form-group",
    controlId: "formBasicEmail"
  }, h("label", {
    className: "zb-form-label"
  }, "Name "), h("input", {
    className: "zb-form-control",
    type: "text",
    placeholder: "Enter name",
    style: " display: block !important; width: 90% !important; height: calc(1em + 0.75rem + 2px) !important; padding: 0.375rem 0.75rem !important; font-size: 1rem !important; font-weight: 400 !important; line-height: 1.5 !important; color: #495057 !important; background-color: #fff !important; background-clip: padding-box !important; border: 1px solid #ced4da !important; border-radius: 0.25rem !important; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;"
  }), h("small", {
    className: "zb-form-text zb-text-muted"
  }, "Already have an account?", " ", h("a", {
    className: "zb-anchor",
    style: "color: #007bff !important;",
    onClick: handleClick
  }, "Sign In"), " ")), h("button", {
    type: "submit",
    className: "zb-btn zb-btn-success",
    style: "background: rgb(43, 222, 115) !important; border: none !important; box-shadow: none !important"
  }, "Submit"), showSpinner ? h("i", {
    className: "fas fa-spinner fa-spin ml-3",
    style: {
      color: "rgb(43, 222, 115)"
    }
  }) : null) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (DataCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"]))

/***/ }),

/***/ "./src/components/Widget/Widget.js":
/*!*****************************************!*\
  !*** ./src/components/Widget/Widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _DataCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataCard */ "./src/components/Widget/DataCard.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Widget = /*#__PURE__*/function (_Component) {
  _inherits(Widget, _Component);

  var _super = _createSuper(Widget);

  function Widget(props) {
    var _this;

    _classCallCheck(this, Widget);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "hideCardCallback", function () {
      _this.setState({
        showDataCard: false
      });

      _this.props.dataCardHeightCallback(false);
    });

    _defineProperty(_assertThisInitialized(_this), "dataCallback", function (payload) {
      _this.handleEmail(payload);
    });

    _defineProperty(_assertThisInitialized(_this), "dataGuestCallback", function (payload) {
      _this.handleGuest(payload);
    });

    _defineProperty(_assertThisInitialized(_this), "browseReviewSwitch", function () {
      _this.setState({
        hideBtn: !_this.state.hideBtn
      });

      _this.props.toggleBrowseCallback();
    });

    _this.videoRef = preact_compat__WEBPACK_IMPORTED_MODULE_0__["default"].createRef();
    _this.canvasRef = preact_compat__WEBPACK_IMPORTED_MODULE_0__["default"].createRef();
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.toggleWidgetView = _this.toggleWidgetView.bind(_assertThisInitialized(_this));
    _this.state = {
      canvasWidth: 0,
      canvasHeight: 0,
      showDataCard: false,
      showErrorMessage: false,
      formData: [],
      fullWidget: true,
      hideReviewContainer: false,
      hideBtn: false
    };
    return _this;
  }

  _createClass(Widget, [{
    key: "handleSubmit",
    value: function handleSubmit(formDataObj) {
      /**
       * @description Function to start the video stream
       * @function
       */
      function getMedia(callback) {
        var _this2 = this;

        var node = this.videoRef.current;
        this.setState({
          hideReviewContainer: true,
          hideBtn: true
        }, function () {
          navigator.mediaDevices.getDisplayMedia({
            audio: false,
            video: {
              width: {
                ideal: 1440
              },
              height: {
                ideal: 746
              }
            }
          }).then(function (res) {
            // Attach to the video element and fire the callback
            node.srcObject = res;
            return new Promise(function (resolve) {
              return node.onplaying = resolve;
            }).then(function () {
              setTimeout(function () {
                callback();
              }, 1500);
            })["catch"](function (err) {
              _this2.setState({
                hideReviewContainer: false
              }); // eslint-disable-next-line no-console


              console.log(err);
            });
          })["catch"](function (err) {
            // eslint-disable-next-line no-console
            _this2.setState({
              hideReviewContainer: false,
              hideBtn: false
            });

            _this2.props.cameraBtnActiveCallback();

            console.log(err);
          });
        });
      }
      /**
       * @description Function to capture the video stream and fire the callback to the parent
       * component
       * @function
       */


      function captureStream() {
        var _this3 = this;

        // Get the video and canvas elements by ref
        var videoNode = this.videoRef.current;
        var canvasNode = this.canvasRef.current; // Set the canvas width and height in the component state

        var scale = 1;
        var currCanvasWidth = videoNode.clientWidth * scale;
        var currCanvasHeight = videoNode.clientHeight * scale;
        this.setState({
          canvasWidth: currCanvasWidth,
          canvasHeight: currCanvasHeight
        }, function () {
          // Draw the image to the canvas
          canvasNode.getContext("2d").drawImage(videoNode, 0, 0, _this3.state.canvasWidth, _this3.state.canvasHeight); // Stop video

          var tracks = videoNode.srcObject.getTracks();
          tracks.forEach(function (track) {
            return track.stop();
          });
          videoNode.srcObject = null;
          var dataUrl = canvasNode.toDataURL();

          _this3.props.callback(dataUrl, formDataObj);

          setTimeout(function () {
            _this3.setState({
              hideReviewContainer: false
            });
          }, 1000);
        });
      } // Check if navigator exists


      if (!navigator) return; // Check the browser

      if ( // eslint-disable-next-line eqeqeq
      navigator.userAgent.indexOf("Trident") != -1 && ( // eslint-disable-next-line eqeqeq
      navigator.userAgent.indexOf("MSIE") != -1 || // eslint-disable-next-line eqeqeq
      navigator.userAgent.indexOf("rv:") != -1)) {
        return;
      } // Check if getUserMedia exists


      if (!navigator.mediaDevices.getDisplayMedia) return; // Call async function to launch the navigator and capture the stream
      // Note: Binding 'this' to the functions to use 'this' without resorting to
      // relying on lexical scope

      var getMediaFn = getMedia.bind(this);
      var captureStreamFn = captureStream.bind(this);
      this.props.cameraBtnActiveCallback();
      setTimeout(function () {
        getMediaFn(captureStreamFn);
      }, 1000);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault(); // Show the data card

      this.setState({
        showDataCard: true
      });
      this.props.dataCardHeightCallback(true);
    }
  }, {
    key: "handleEmail",
    value: async function handleEmail(dataObj) {
      var key = "303d1d7f7d4ca7ac3bb92bd64ffd16f4";
      var email = dataObj.email,
          password = dataObj.password;
      this.setState({
        showErrorMessage: false
      });
      var encodedEmail = btoa(email);
      var encodedPassword = btoa(password);
      var url = "https://app.zipboard.co/api/v1/widget/auth";
      var searchParams = new URLSearchParams();
      searchParams.set("email", encodedEmail);
      searchParams.set("password", encodedPassword);
      var response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer ".concat(key),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });
      var data = await response.json();

      if (data.status == "Success") {
        var userData = data.body;
        this.props.authenticationCallback(userData, false);
        this.setState({
          showDataCard: false
        });
      } else {
        this.setState({
          showErrorMessage: true
        });
      }
    }
  }, {
    key: "handleGuest",
    value: async function handleGuest(dataObj) {
      var _this4 = this;

      var key = "303d1d7f7d4ca7ac3bb92bd64ffd16f4";
      var url = "https://app.zipboard.co/api/v1/widget/register";
      var email = dataObj.email,
          name = dataObj.name;
      var searchParams = new URLSearchParams();
      searchParams.set("email", email);
      searchParams.set("name", name);
      searchParams.set("projectId", this.props.projectId);
      var response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer ".concat(key),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });
      var data = await response.json();
      var userId = data.body.userId;
      var responseDataObj = {
        userId: data.body.userId,
        userName: data.body.userName,
        userEmail: data.body.userEmail
      };
      await this.props.authenticationCallback(responseDataObj, true);
      this.setState({
        showDataCard: false
      }, function () {
        _this4.handleSubmit();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.activateNavigator !== this.props.activateNavigator) {
        this.handleSubmit();
      }
    }
  }, {
    key: "toggleWidgetView",
    value: function toggleWidgetView() {
      this.setState({
        fullWidget: !this.state.fullWidget
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _h;

      var videoRef = this.videoRef,
          canvasRef = this.canvasRef,
          hideCardCallback = this.hideCardCallback,
          dataCallback = this.dataCallback,
          dataGuestCallback = this.dataGuestCallback,
          handleClick = this.handleClick,
          handleSubmit = this.handleSubmit,
          browseReviewSwitch = this.browseReviewSwitch,
          specialHideCardCallback = this.specialHideCardCallback;
      var _this$state = this.state,
          canvasWidth = _this$state.canvasWidth,
          canvasHeight = _this$state.canvasHeight,
          showDataCard = _this$state.showDataCard,
          showErrorMessage = _this$state.showErrorMessage,
          hideBtn = _this$state.hideBtn;
      var _this$props = this.props,
          projectData = _this$props.projectData,
          fileData = _this$props.fileData,
          showSpinner = _this$props.showSpinner,
          userId = _this$props.userId,
          browseBtnActive = _this$props.browseBtnActive,
          toggleBrowseCallback = _this$props.toggleBrowseCallback,
          currLink = _this$props.currLink,
          loadDataCard = _this$props.loadDataCard,
          cameraBtnActive = _this$props.cameraBtnActive,
          showAppLoginCallback = _this$props.showAppLoginCallback,
          activateNavigator = _this$props.activateNavigator;
      return h("div", null, !userId && loadDataCard && showDataCard ? h(_DataCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        hideCardCallback: hideCardCallback,
        projectData: projectData,
        fileData: fileData,
        dataCallback: dataCallback,
        showSpinner: showSpinner,
        showErrorMessage: showErrorMessage,
        dataGuestCallback: dataGuestCallback,
        showAppLoginCallback: showAppLoginCallback,
        specialHideCardCallback: specialHideCardCallback
      }) : null, !userId || !currLink ? h("button", (_h = {
        className: "zb-btn zb-btn-dark zb-btn-position",
        onClick: !userId ? handleClick : handleSubmit,
        style: "background: rgb(72, 85, 91) !important; border: none !important; box-shadow: none !important"
      }, _defineProperty(_h, "style", !this.state.hideReviewContainer ? "background: rgb(72, 85, 91) !important; border: none !important; box-shadow: none !important" : "display: none !important;"), _defineProperty(_h, "disabled", cameraBtnActive ? false : true), _h), h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "13",
        viewBox: "0 0 30 28",
        className: "zb-icon zb-icon-camera"
      }, h("title", null, "camera"), h("path", {
        d: "M15 10.5c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zM26 4c2.203 0 4 1.797 4 4v14c0 2.203-1.797 4-4 4h-22c-2.203 0-4-1.797-4-4v-14c0-2.203 1.797-4 4-4h3.5l0.797-2.125c0.391-1.031 1.609-1.875 2.703-1.875h8c1.094 0 2.312 0.844 2.703 1.875l0.797 2.125h3.5zM15 22c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7z"
      }))) : h("div", {
        className: "review-container",
        style: !this.state.fullWidget ? "width: 30px !important" : this.state.hideReviewContainer ? "display: none !important" : "padding-left: 2% !important"
      }, this.state.fullWidget ? h(preact_compat__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "9",
        height: "28",
        viewBox: "0 0 9 28",
        style: "position: relative !important; left: 3px !important; top: 5px !important; cursor: pointer !important",
        onClick: this.toggleWidgetView
      }, h("title", null, "caret-right"), h("path", {
        style: "fill: #fff !important;",
        d: "M9 14c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297-0.547 0-1-0.453-1-1v-14c0-0.547 0.453-1 1-1 0.266 0 0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z"
      })), h("div", {
        className: "zb-switch"
      }, h("input", {
        type: "radio",
        className: "zb-switch-input",
        id: "zb-browse",
        onChange: browseReviewSwitch,
        checked: browseBtnActive ? true : false
      }), h("label", {
        htmlFor: "zb-browse",
        className: "zb-switch-label zb-switch-label-on",
        style: browseBtnActive ? "background-color: rgb(43, 222, 115) !important;" : ""
      }, "Browse"), h("input", {
        type: "radio",
        className: "zb-switch-input",
        id: "zb-review",
        onChange: browseReviewSwitch,
        checked: !browseBtnActive ? true : false
      }), h("label", {
        htmlFor: "zb-review",
        className: "zb-switch-label zb-switch-label-off",
        style: !browseBtnActive ? "background-color: rgb(43, 222, 115) !important; width: 60px !important" : ""
      }, "Review")), !hideBtn ? h("button", {
        className: "zb-btn zb-btn-dark zb-btn-position",
        onClick: handleSubmit,
        style: "background: transparent !important; border: none !important; box-shadow: none !important; padding: 0.25rem 1rem !important; top: 11px !important; right: 0px !important",
        disabled: cameraBtnActive ? false : true
      }, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "13",
        viewBox: "0 0 30 28",
        className: "zb-icon zb-icon-camera"
      }, h("title", null, "camera"), h("path", {
        d: "M15 10.5c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zM26 4c2.203 0 4 1.797 4 4v14c0 2.203-1.797 4-4 4h-22c-2.203 0-4-1.797-4-4v-14c0-2.203 1.797-4 4-4h3.5l0.797-2.125c0.391-1.031 1.609-1.875 2.703-1.875h8c1.094 0 2.312 0.844 2.703 1.875l0.797 2.125h3.5zM15 22c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7z"
      }))) : null) : h(preact_compat__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "9",
        height: "28",
        viewBox: "0 0 11 28",
        style: "position: relative !important; left: 5px !important; top: 5px !important; cursor: pointer !important",
        onClick: this.toggleWidgetView
      }, h("title", null, "caret-left"), h("path", {
        style: "fill: #fff;",
        d: "M10 7v14c0 0.547-0.453 1-1 1-0.266 0-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703s0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297 0.547 0 1 0.453 1 1z"
      })))), h("video", {
        id: "v",
        autoplay: true,
        ref: videoRef,
        className: "zb-no-visibility"
      }), h("canvas", {
        ref: canvasRef,
        width: canvasWidth,
        height: canvasHeight,
        className: "zb-no-visibility"
      }));
    }
  }]);

  return Widget;
}(preact_compat__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Widget);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"]))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_habitat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact-habitat */ "./node_modules/preact-habitat/dist/preact-habitat.es.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");




var _habitat = Object(preact_habitat__WEBPACK_IMPORTED_MODULE_1__["default"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"]),
    render = _habitat.render;

render({
  selector: "body",
  // Searches and mounts the widget in a given selector
  defaultProps: undefined,
  // Default props for all widgets
  inline: true,
  clean: false
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
});
//# sourceMappingURL=widget.js.map
