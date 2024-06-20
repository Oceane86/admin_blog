"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Dashboard */ \"(app-pages-browser)/./components/Dashboard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListItems = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const itemsPerPage = 5;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, []);\n    const fetchItems = async ()=>{\n        try {\n            const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const fetchMoreItems = async ()=>{\n        if (lastVisible) {\n            try {\n                const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n                const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n                setLastVisible(lastVisibleDoc);\n                setItems((prevItems)=>[\n                        ...prevItems,\n                        ...querySnapshot.docs.map((doc)=>({\n                                ...doc.data(),\n                                id: doc.id\n                            }))\n                    ]);\n                setIsEmpty(querySnapshot.empty);\n            } catch (error) {\n                console.error(\"Error fetching more items: \", error);\n            }\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n    // Redirigez vers une page de modification, ou ouvrez un formulaire de modification en modale\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.header,\n                children: \"Dashboard - List of Items\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListItems, \"ufa6fED357WRPyUecjcxOEbH0WQ=\");\n_c = ListItems;\nconst styles = {\n    container: {\n        maxWidth: \"800px\",\n        margin: \"0 auto\",\n        padding: \"20px\",\n        textAlign: \"center\",\n        backgroundColor: \"#f4f4f4\",\n        borderRadius: \"8px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    grid: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr\",\n        gap: \"20px\"\n    },\n    card: {\n        backgroundColor: \"#fff\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.1)\",\n        textAlign: \"left\"\n    },\n    title: {\n        fontSize: \"18px\",\n        fontWeight: \"bold\",\n        marginBottom: \"10px\"\n    },\n    content: {\n        fontSize: \"14px\",\n        marginBottom: \"10px\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\",\n        marginBottom: \"10px\"\n    },\n    buttonGroup: {\n        display: \"flex\",\n        justifyContent: \"flex-end\",\n        gap: \"10px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    deleteButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#dc3545\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    loadMoreContainer: {\n        marginTop: \"20px\"\n    },\n    loadMoreButton: {\n        padding: \"10px 20px\",\n        backgroundColor: \"#007bff\",\n        color: \"#fff\",\n        border: \"none\",\n        borderRadius: \"4px\",\n        cursor: \"pointer\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItems);\nvar _c;\n$RefreshReg$(_c, \"ListItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCO1FBQ3JCQyxLQUFLO0lBQ1A7SUFDQUMsTUFBTTtRQUNKVCxpQkFBaUI7UUFDakJGLFNBQVM7UUFDVEcsY0FBYztRQUNkUyxXQUFXO1FBQ1hYLFdBQVc7SUFDYjtJQUNBWSxPQUFPO1FBQ0xULFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxjQUFjO0lBQ2hCO0lBQ0FRLFNBQVM7UUFDUFYsVUFBVTtRQUNWRSxjQUFjO0lBQ2hCO0lBQ0FTLE9BQU87UUFDTEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWGYsY0FBYztRQUNkRyxjQUFjO0lBQ2hCO0lBQ0FhLGFBQWE7UUFDWFgsU0FBUztRQUNUWSxnQkFBZ0I7UUFDaEJWLEtBQUs7SUFDUDtJQUNBVyxZQUFZO1FBQ1ZuQixpQkFBaUI7UUFDakJvQixRQUFRO1FBQ1JDLE9BQU87UUFDUEMsUUFBUTtRQUNScEIsVUFBVTtJQUNaO0lBQ0FxQixjQUFjO1FBQ1p2QixpQkFBaUI7UUFDakJvQixRQUFRO1FBQ1JDLE9BQU87UUFDUEMsUUFBUTtRQUNScEIsVUFBVTtJQUNaO0lBQ0FzQixtQkFBbUI7UUFDakJDLFdBQVc7SUFDYjtJQUNBQyxnQkFBZ0I7UUFDZDVCLFNBQVM7UUFDVEUsaUJBQWlCO1FBQ2pCcUIsT0FBTztRQUNQRCxRQUFRO1FBQ1JuQixjQUFjO1FBQ2RxQixRQUFRO0lBQ1Y7QUFDRjtBQUVBLCtEQUFlNUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi91dGlscy9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCBvcmRlckJ5LCBsaW1pdCwgc3RhcnRBZnRlciwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBEZWxldGVJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlbGV0ZUl0ZW1cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVRyYXNoLCBmYUVkaXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXNoYm9hcmRcIjtcblxuXG5cblxuY29uc3QgTGlzdEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xhc3RWaXNpYmxlLCBzZXRMYXN0VmlzaWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzRW1wdHksIHNldElzRW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpdGVtc1BlclBhZ2UgPSA1O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hJdGVtcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXRlbXNRdWVyeSA9IHF1ZXJ5KFxuICAgICAgICBjb2xsZWN0aW9uKGRiLCBcIml0ZW1zXCIpLFxuICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXG4gICAgICAgIGxpbWl0KGl0ZW1zUGVyUGFnZSlcbiAgICAgICk7XG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpdGVtc1F1ZXJ5KTtcbiAgICAgIGNvbnN0IGxhc3RWaXNpYmxlRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzW3F1ZXJ5U25hcHNob3QuZG9jcy5sZW5ndGggLSAxXTtcbiAgICAgIHNldExhc3RWaXNpYmxlKGxhc3RWaXNpYmxlRG9jKTtcbiAgICAgIHNldEl0ZW1zKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSkpO1xuICAgICAgc2V0SXNFbXB0eShxdWVyeVNuYXBzaG90LmVtcHR5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGl0ZW1zOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaE1vcmVJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobGFzdFZpc2libGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zUXVlcnkgPSBxdWVyeShcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBcIml0ZW1zXCIpLFxuICAgICAgICAgIG9yZGVyQnkoXCJ0aXRsZVwiKSxcbiAgICAgICAgICBzdGFydEFmdGVyKGxhc3RWaXNpYmxlKSxcbiAgICAgICAgICBsaW1pdChpdGVtc1BlclBhZ2UpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGl0ZW1zUXVlcnkpO1xuICAgICAgICBjb25zdCBsYXN0VmlzaWJsZURvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1txdWVyeVNuYXBzaG90LmRvY3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHNldExhc3RWaXNpYmxlKGxhc3RWaXNpYmxlRG9jKTtcbiAgICAgICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gW1xuICAgICAgICAgIC4uLnByZXZJdGVtcyxcbiAgICAgICAgICAuLi5xdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpXG4gICAgICAgIF0pO1xuICAgICAgICBzZXRJc0VtcHR5KHF1ZXJ5U25hcHNob3QuZW1wdHkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vcmUgaXRlbXM6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRWRpdGluZyBpdGVtIHdpdGggaWQ6ICR7aWR9YCk7XG4gICAgLy8gUmVkaXJpZ2V6IHZlcnMgdW5lIHBhZ2UgZGUgbW9kaWZpY2F0aW9uLCBvdSBvdXZyZXogdW4gZm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gZW4gbW9kYWxlXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gcHJldkl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5EYXNoYm9hcmQgLSBMaXN0IG9mIEl0ZW1zPC9oMj5cbiAgICAgIDxEYXNoYm9hcmQgLz5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIG1heFdpZHRoOiAnODAwcHgnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjRmNCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmcicsXG4gICAgZ2FwOiAnMjBweCcsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgd2lkdGg6ICcxMDBweCcsXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBnYXA6ICcxMHB4JyxcbiAgfSxcbiAgZWRpdEJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjb2xvcjogJyMwMDdiZmYnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gIH0sXG4gIGRlbGV0ZUJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjb2xvcjogJyNkYzM1NDUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gIH0sXG4gIGxvYWRNb3JlQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gIH0sXG4gIGxvYWRNb3JlQnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwN2JmZicsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwibGltaXQiLCJzdGFydEFmdGVyIiwiZ2V0RG9jcyIsIkRlbGV0ZUl0ZW0iLCJGb250QXdlc29tZUljb24iLCJmYVRyYXNoIiwiZmFFZGl0IiwiRGFzaGJvYXJkIiwiTGlzdEl0ZW1zIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxhc3RWaXNpYmxlIiwic2V0TGFzdFZpc2libGUiLCJpc0VtcHR5Iiwic2V0SXNFbXB0eSIsIml0ZW1zUGVyUGFnZSIsImZldGNoSXRlbXMiLCJpdGVtc1F1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsImxhc3RWaXNpYmxlRG9jIiwiZG9jcyIsImxlbmd0aCIsIm1hcCIsImRvYyIsImRhdGEiLCJpZCIsImVtcHR5IiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hNb3JlSXRlbXMiLCJwcmV2SXRlbXMiLCJoYW5kbGVFZGl0IiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwiaXRlbSIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDIiLCJoZWFkZXIiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJncmlkIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJjYXJkIiwiYm94U2hhZG93IiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJlZGl0QnV0dG9uIiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJkZWxldGVCdXR0b24iLCJsb2FkTW9yZUNvbnRhaW5lciIsIm1hcmdpblRvcCIsImxvYWRNb3JlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});