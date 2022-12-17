/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");
var https = __webpack_require__(/*! https */ "https");
var _a = __webpack_require__(/*! electron */ "electron"), app = _a.app, BrowserWindow = _a.BrowserWindow, ipcMain = _a.ipcMain, nativeImage = _a.nativeImage, NativeImage = _a.NativeImage;
app.whenReady().then(function () {
    var mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js")
        },
        titleBarStyle: "hidden",
        titleBarOverlay: {
            color: "#f5f3f2",
            symbolColor: "#74b1be",
            height: 40,
            transparent: true
        }
    });
    mainWindow.loadFile("dist/index.html");
    // mainWindow.webContents.openDevTools({ mode: 'detach' });
});
app.once("window-all-closed", function () { return app.quit(); });
var iconName = path.join(__dirname, "iconForDragAndDrop.png");
var icon = fs.createWriteStream(iconName);
https.get("https://img.icons8.com/ios/452/drag-and-drop.png", function (response) {
    response.pipe(icon);
});
// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(path.join(__dirname, "text.txt"), "# First file to test drag and drop");
ipcMain.on("ondragstart", function (event, filePath) {
    event.sender.startDrag({
        file: path.join(__dirname, filePath),
        icon: iconName
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map