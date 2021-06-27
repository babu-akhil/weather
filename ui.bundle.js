/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/searchIcon.png":
/*!****************************!*\
  !*** ./src/searchIcon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15d3df31341c3ea2937d.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSearchBar": () => (/* binding */ createSearchBar),
/* harmony export */   "mainDataView": () => (/* binding */ mainDataView)
/* harmony export */ });
/* harmony import */ var _searchIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchIcon.png */ "./src/searchIcon.png");



function createSearchBar(body) {
    let searchBarContainer = document.createElement('div')
    searchBarContainer.id = 'searchBarContainer'
    let searchBar = document.createElement('input')
    searchBar.id = 'searchBar'
    let submitSearch = document.createElement('button')
    let icon = document.createElement('img')
    icon.src = _searchIcon_png__WEBPACK_IMPORTED_MODULE_0__
    submitSearch.appendChild(icon)
    searchBarContainer.appendChild(searchBar)
    searchBarContainer.appendChild(submitSearch)

    body.appendChild(searchBarContainer)
}


function mainDataView(body, data) {
    if(document.getElementById('mainDataContainer')) {
        document.getElementById('mainDataContainer').remove()
    }
    if(data.weather[0].icon.slice(-1)=='d') {body.style.backgroundColor = '#3F72AF'}
    else if(data.weather[0].icon.slice(-1)=='n'){body.style.backgroundColor = '#112D4E'}
    let mainDataContainer = document.createElement('div')
    mainDataContainer.id = 'mainDataContainer';

    let firstRow = makeFirstRow(data)
    mainDataContainer.appendChild(firstRow)

    let anotherRow = makeAnotherrow(data)
    mainDataContainer.appendChild(anotherRow)

    let secondRow = makeSecondRow(data)
    mainDataContainer.appendChild(secondRow)
    body.appendChild(mainDataContainer)
    body.style.transition = 'background-color 2s ease-in-out'
}

function kelvinToCelsius(tempKelvin) {
    return parseInt(tempKelvin -273.15);
}

function makeFirstRow(data) {
    let firstRow = document.createElement('div')
        firstRow.id = 'firstRow'

        let title = document.createElement('div')
        title.id = 'title'
        title.innerHTML = data.name

        let icon = document.createElement('img')
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        firstRow.appendChild(title)
        firstRow.appendChild(icon)
        return firstRow
}

function makeAnotherrow(data) {

    let anotherRow = document.createElement('div')
    anotherRow.id = 'anotherRow'

    let country = document.createElement('div')
    country.id = 'country'
    country.innerHTML = data.sys.country
    anotherRow.appendChild(country)

    let desc = document.createElement('div')
    desc.id = 'desc'
    desc.innerHTML = data.weather[0].description
    anotherRow.appendChild(desc)


    return anotherRow;

}

function makeSecondRow(data) {
    let secondRow = document.createElement('div')
    secondRow.id = 'secondRow'

    let temp = document.createElement('div');
    temp.id = 'temp'
    temp.innerHTML = kelvinToCelsius(data.main.temp) + '°C'

    let secondaryInfo = document.createElement('div')
    secondaryInfo.id = 'secondaryInfo'

    let feelsLike = document.createElement('div')
    feelsLike.id = 'feelsLike'
    feelsLike.innerHTML = 'Feels like: ' + kelvinToCelsius(data.main.feels_like).toString()+'°C'

    let wind = document.createElement('div')
    wind.id=  'wind'
    wind.innerHTML = 'Wind Speed: '+parseInt(data.wind.speed*3.6).toString() + 'km/h'

    let humidity = document.createElement('div')
    humidity.id = 'humidity'
    humidity.innerHTML = 'Humidity: '+data.main.humidity.toString() + '%'

    secondaryInfo.appendChild(feelsLike)
    secondaryInfo.appendChild(wind)
    secondaryInfo.appendChild(humidity)

    secondRow.appendChild(temp)
    secondRow.appendChild(secondaryInfo)

    return secondRow
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy91aS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQVU7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELHFCQUFxQjs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL3NlYXJjaEljb24ucG5nJ1xuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hCYXIoYm9keSkge1xuICAgIGxldCBzZWFyY2hCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNlYXJjaEJhckNvbnRhaW5lci5pZCA9ICdzZWFyY2hCYXJDb250YWluZXInXG4gICAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzZWFyY2hCYXIuaWQgPSAnc2VhcmNoQmFyJ1xuICAgIGxldCBzdWJtaXRTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpY29uLnNyYyA9IHNlYXJjaEljb25cbiAgICBzdWJtaXRTZWFyY2guYXBwZW5kQ2hpbGQoaWNvbilcbiAgICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKVxuICAgIHNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRTZWFyY2gpXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHNlYXJjaEJhckNvbnRhaW5lcilcbn1cblxuXG5mdW5jdGlvbiBtYWluRGF0YVZpZXcoYm9keSwgZGF0YSkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGF0YUNvbnRhaW5lcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluRGF0YUNvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmKGRhdGEud2VhdGhlclswXS5pY29uLnNsaWNlKC0xKT09J2QnKSB7Ym9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzNGNzJBRid9XG4gICAgZWxzZSBpZihkYXRhLndlYXRoZXJbMF0uaWNvbi5zbGljZSgtMSk9PSduJyl7Ym9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzExMkQ0RSd9XG4gICAgbGV0IG1haW5EYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluRGF0YUNvbnRhaW5lci5pZCA9ICdtYWluRGF0YUNvbnRhaW5lcic7XG5cbiAgICBsZXQgZmlyc3RSb3cgPSBtYWtlRmlyc3RSb3coZGF0YSlcbiAgICBtYWluRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFJvdylcblxuICAgIGxldCBhbm90aGVyUm93ID0gbWFrZUFub3RoZXJyb3coZGF0YSlcbiAgICBtYWluRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbm90aGVyUm93KVxuXG4gICAgbGV0IHNlY29uZFJvdyA9IG1ha2VTZWNvbmRSb3coZGF0YSlcbiAgICBtYWluRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRSb3cpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluRGF0YUNvbnRhaW5lcilcbiAgICBib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnYmFja2dyb3VuZC1jb2xvciAycyBlYXNlLWluLW91dCdcbn1cblxuZnVuY3Rpb24ga2VsdmluVG9DZWxzaXVzKHRlbXBLZWx2aW4pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGVtcEtlbHZpbiAtMjczLjE1KTtcbn1cblxuZnVuY3Rpb24gbWFrZUZpcnN0Um93KGRhdGEpIHtcbiAgICBsZXQgZmlyc3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmaXJzdFJvdy5pZCA9ICdmaXJzdFJvdydcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aXRsZS5pZCA9ICd0aXRsZSdcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZGF0YS5uYW1lXG5cbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXG5cbiAgICAgICAgZmlyc3RSb3cuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGZpcnN0Um93LmFwcGVuZENoaWxkKGljb24pXG4gICAgICAgIHJldHVybiBmaXJzdFJvd1xufVxuXG5mdW5jdGlvbiBtYWtlQW5vdGhlcnJvdyhkYXRhKSB7XG5cbiAgICBsZXQgYW5vdGhlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYW5vdGhlclJvdy5pZCA9ICdhbm90aGVyUm93J1xuXG4gICAgbGV0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvdW50cnkuaWQgPSAnY291bnRyeSdcbiAgICBjb3VudHJ5LmlubmVySFRNTCA9IGRhdGEuc3lzLmNvdW50cnlcbiAgICBhbm90aGVyUm93LmFwcGVuZENoaWxkKGNvdW50cnkpXG5cbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzYy5pZCA9ICdkZXNjJ1xuICAgIGRlc2MuaW5uZXJIVE1MID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgYW5vdGhlclJvdy5hcHBlbmRDaGlsZChkZXNjKVxuXG5cbiAgICByZXR1cm4gYW5vdGhlclJvdztcblxufVxuXG5mdW5jdGlvbiBtYWtlU2Vjb25kUm93KGRhdGEpIHtcbiAgICBsZXQgc2Vjb25kUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWNvbmRSb3cuaWQgPSAnc2Vjb25kUm93J1xuXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wLmlkID0gJ3RlbXAnXG4gICAgdGVtcC5pbm5lckhUTUwgPSBrZWx2aW5Ub0NlbHNpdXMoZGF0YS5tYWluLnRlbXApICsgJ8KwQydcblxuICAgIGxldCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWNvbmRhcnlJbmZvLmlkID0gJ3NlY29uZGFyeUluZm8nXG5cbiAgICBsZXQgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmZWVsc0xpa2UuaWQgPSAnZmVlbHNMaWtlJ1xuICAgIGZlZWxzTGlrZS5pbm5lckhUTUwgPSAnRmVlbHMgbGlrZTogJyArIGtlbHZpblRvQ2Vsc2l1cyhkYXRhLm1haW4uZmVlbHNfbGlrZSkudG9TdHJpbmcoKSsnwrBDJ1xuXG4gICAgbGV0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdpbmQuaWQ9ICAnd2luZCdcbiAgICB3aW5kLmlubmVySFRNTCA9ICdXaW5kIFNwZWVkOiAnK3BhcnNlSW50KGRhdGEud2luZC5zcGVlZCozLjYpLnRvU3RyaW5nKCkgKyAna20vaCdcblxuICAgIGxldCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHVtaWRpdHkuaWQgPSAnaHVtaWRpdHknXG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gJ0h1bWlkaXR5OiAnK2RhdGEubWFpbi5odW1pZGl0eS50b1N0cmluZygpICsgJyUnXG5cbiAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKGZlZWxzTGlrZSlcbiAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKHdpbmQpXG4gICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSlcblxuICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZChzZWNvbmRhcnlJbmZvKVxuXG4gICAgcmV0dXJuIHNlY29uZFJvd1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlU2VhcmNoQmFyLCBtYWluRGF0YVZpZXd9Il0sInNvdXJjZVJvb3QiOiIifQ==