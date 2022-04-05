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

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearChildren\": () => (/* binding */ clearChildren),\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"qs\": () => (/* binding */ qs)\n/* harmony export */ });\nfunction qs(query = \"\") {\n    return document.querySelector(query);\n}\n\nfunction create(type = \"div\", classList, textContent, id) {\n    const html = document.createElement(type);\n    html.classList = classList;\n    html.textContent = textContent;\n    html.id = id;\n    return html;\n}\n\nfunction createElement(type = \"div\", options = {}) {\n    const element = document.createElement(type);\n    Object.entries(options).forEach(([key, value]) => {\n        if (key === \"class\") {\n            element.classList.add(value);\n            return;\n        }\n\n        if (key === \"dataset\") {\n            Object.entries(value).forEach(([dataKey, dataValue]) => {\n                element.dataset[dataKey] = dataValue;\n            });\n            return;\n        }\n\n        if (key === \"text\") {\n            element.textContent = value;\n            return;\n        }\n\n        element.setAttribute(key, value);\n    });\n    return element;\n}\n\nfunction clearChildren(e) {\n    while (e.firstChild) {\n        e.removeChild(e.firstChild);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst newProjectFormHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".new-project\");\nconst newTaskFormHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".new-task\");\nconst newProjectInputHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".new-project > input\");\nconst newTaskInputHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".new-task > input\");\nconst projectListHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".project-section > ul\");\nconst taskListHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".task-section > ul\");\nconst clearDoneButtonHTML = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.qs)(\".task-section > button\");\n\nlet projects = [\n    {\n        id: 0,\n        title: \"foo\",\n        tasks: [\n            {\n                id: 0,\n                title: \"mytask\",\n                checked: false,\n            },\n            {\n                id: 1,\n                title: \"foobar\",\n                checked: true,\n            },\n            {\n                id: 2,\n                title: \"bababa\",\n                checked: false,\n            },\n        ],\n    },\n    {\n        id: 1,\n        title: \"bar\",\n        tasks: [\n            {\n                id: 0,\n                title: \"myta4fff3sk\",\n                checked: true,\n            },\n            {\n                id: 1,\n                title: \"24234234\",\n                checked: true,\n            },\n            {\n                id: 2,\n                title: \"babaffefba\",\n                checked: false,\n            },\n        ],\n    },\n    {\n        id: 2,\n        title: \"ying\",\n        tasks: [],\n    },\n    {\n        id: 3,\n        title: \"yang\",\n        tasks: [],\n    },\n];\n\nlet selectedProject = projects.at(0).id;\n\nfunction addProject(title) {\n    if (title.trim() == \"\") return;\n\n    const id = Date.now().toString();\n\n    selectedProject = id;\n\n    projects.push({\n        id,\n        title,\n        tasks: [],\n    });\n\n    //console.log(projects);\n}\n\nfunction deleteProject(id) {\n    projects = projects.filter((project) => project.id != id);\n}\n\nfunction renderProjects() {\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.clearChildren)(projectListHTML);\n    projects.forEach((project) => renderProject(project));\n}\n\nfunction renderProject(project) {\n    const projectElement = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n        class: \"project\",\n        id: project.id,\n    });\n\n    const deleteButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n        class: \"delete-button-project\",\n        text: \"-\",\n        for: project.id,\n    });\n\n    const projectTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {\n        class: \"project-title\",\n        text: project.title,\n    });\n\n    deleteButton.addEventListener(\"click\", () => {\n        deleteProject(project.id);\n\n        if (selectedProject == project.id && projects.length > 0)\n            selectedProject = projects.at(0).id;\n\n        renderProjects();\n        //console.log(selectedProject);\n        renderTasks();\n    });\n\n    projectTitle.addEventListener(\"click\", () => {\n        selectedProject = project.id;\n        renderTasks();\n    });\n\n    projectElement.appendChild(deleteButton);\n    projectElement.appendChild(projectTitle);\n\n    projectListHTML.appendChild(projectElement);\n}\n\nfunction addTask(projectId, title) {\n    if (title.trim() == \"\") return;\n\n    const project = projects.find((project) => project.id == projectId);\n\n    project.tasks.push({\n        id: Date.now().toString(),\n        title: title,\n        checked: false,\n    });\n}\n\nfunction renderTasks() {\n    projectListHTML.childNodes.forEach((element) => {\n        element.classList.remove(\"selected\");\n    });\n\n    document.getElementById(selectedProject).classList.add(\"selected\");\n\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.clearChildren)(taskListHTML);\n\n    const project = projects.find((project) => project.id == selectedProject);\n\n    if (project) project.tasks.forEach((task) => renderTask(task));\n}\n\nfunction renderTask(task) {\n    const taskElement = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n        class: \"task\",\n        id: \"t\" + task.id,\n    });\n\n    const checkbox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\n        class: \"check-task\",\n        type: \"checkbox\",\n        id: \"check\" + task.id,\n    });\n\n    const taskTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"label\", {\n        class: \"task-title\",\n        text: task.title,\n        for: \"check\" + task.id,\n    });\n\n    checkbox.addEventListener(\"click\", () => (task.checked = checkbox.checked));\n\n    checkbox.checked = task.checked;\n    taskElement.appendChild(checkbox);\n    taskElement.appendChild(taskTitle);\n    taskListHTML.appendChild(taskElement);\n}\n\nnewProjectFormHTML.addEventListener(\"submit\", () => {\n    addProject(newProjectInputHTML.value);\n    newProjectInputHTML.value = null;\n    renderProjects();\n    renderTasks();\n});\n\nnewTaskFormHTML.addEventListener(\"submit\", () => {\n    //console.log(selectedProject);\n    addTask(selectedProject, newTaskInputHTML.value);\n    newTaskInputHTML.value = null;\n    renderTasks();\n});\n\nclearDoneButtonHTML.addEventListener(\"click\", () => {\n    const project = projects.find((project) => project.id == selectedProject);\n\n    project.tasks = project.tasks.filter((task) => task.checked == false);\n\n    renderTasks();\n});\n\nrenderProjects();\nrenderTasks();\n\n\n//# sourceURL=webpack:///./src/index.js?");

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