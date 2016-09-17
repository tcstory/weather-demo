/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/weather-demo";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


/***/ },

/***/ 42:
/***/ function(module, exports) {

	'use strict';

	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register('service-worker.js').then(function (reg) {
	    reg.onupdatefound = function () {
	      var installingWorker = reg.installing;

	      installingWorker.onstatechange = function () {
	        switch (installingWorker.state) {
	          case 'installed':
	            if (navigator.serviceWorker.controller) {
	              console.log('New or updated content is available.');
	            } else {
	              console.log('Content is now available offline!');
	            }
	            break;

	          case 'redundant':
	            console.error('The installing service worker became redundant.');
	            break;
	        }
	      };
	    };
	  }).catch(function (e) {
	    console.error('Error during service worker registration:', e);
	  });
	}

/***/ }

/******/ });