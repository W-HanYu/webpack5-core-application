/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/register-service-worker/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/register-service-worker/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   unregister: () => (/* binding */ unregister)
/* harmony export */ });
// Register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

var isLocalhost = function () { return Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
); }

var waitWindowLoad
// https://github.com/yyx990803/register-service-worker/pull/33#discussion_r394181861
if (typeof window !== 'undefined') {
  // Typically, a browser that supports `serviceWorker` should also have supported
  // `Promise`. But as this package can be used in environments without service
  // worker support (in that case it would do nothing), there's a chance that
  // `Promise` does not exist. So we must check for its existence first.
  if (typeof Promise !== 'undefined') {
    waitWindowLoad = new Promise(function (resolve) { return window.addEventListener('load', resolve); })
  } else {
    waitWindowLoad = { then: function (cb) { return window.addEventListener('load', cb); } }
  }
}

function register (swUrl, hooks) {
  if ( hooks === void 0 ) hooks = {};

  var registrationOptions = hooks.registrationOptions; if ( registrationOptions === void 0 ) registrationOptions = {};
  delete hooks.registrationOptions

  var emit = function (hook) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (hooks && hooks[hook]) {
      hooks[hook].apply(hooks, args)
    }
  }

  if ('serviceWorker' in navigator) {
    waitWindowLoad.then(function () {
      if (isLocalhost()) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, emit, registrationOptions)
        navigator.serviceWorker.ready.then(function (registration) {
          emit('ready', registration)
        }).catch(function (error) { return handleError(emit, error); })
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl, emit, registrationOptions)
        navigator.serviceWorker.ready.then(function (registration) {
          emit('ready', registration)
        }).catch(function (error) { return handleError(emit, error); })
      }
    })
  }
}

function handleError (emit, error) {
  if (!navigator.onLine) {
    emit('offline')
  }
  emit('error', error)
}

function registerValidSW (swUrl, emit, registrationOptions) {
  navigator.serviceWorker
    .register(swUrl, registrationOptions)
    .then(function (registration) {
      emit('registered', registration)
      if (registration.waiting) {
        emit('updated', registration)
        return
      }
      registration.onupdatefound = function () {
        emit('updatefound', registration)
        var installingWorker = registration.installing
        installingWorker.onstatechange = function () {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              emit('updated', registration)
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              emit('cached', registration)
            }
          }
        }
      }
    })
    .catch(function (error) { return handleError(emit, error); })
}

function checkValidServiceWorker (swUrl, emit, registrationOptions) {
  // Check if the service worker can be found.
  fetch(swUrl)
    .then(function (response) {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (response.status === 404) {
        // No service worker found.
        emit('error', new Error(("Service worker not found at " + swUrl)))
        unregister()
      } else if (response.headers.get('content-type').indexOf('javascript') === -1) {
        emit('error', new Error(
          "Expected " + swUrl + " to have javascript content-type, " +
          "but received " + (response.headers.get('content-type'))))
        unregister()
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, emit, registrationOptions)
      }
    })
    .catch(function (error) { return handleError(emit, error); })
}

function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister()
    }).catch(function (error) { return handleError(emit, error); })
  }
}


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
/* harmony import */ var register_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! register-service-worker */ "./node_modules/register-service-worker/index.js");
console.log("test");


(0,register_service_worker__WEBPACK_IMPORTED_MODULE_0__.register)("/service-worker.js", {
  registrationOptions: { scope: "./" },
  ready() {
    console.log("Service worker is active.");
  },
  registered() {
    console.log("Service worker has been registered.");
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound(registration) {
    console.log("New content is downloading.");
  },
  updated(registration) {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  },
});

})();

/******/ })()
;