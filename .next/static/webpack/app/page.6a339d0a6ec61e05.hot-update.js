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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Dashboard */ \"(app-pages-browser)/./components/Dashboard.js\");\n// src/\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListItems = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const itemsPerPage = 5;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, []);\n    const fetchItems = async ()=>{\n        try {\n            const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const fetchMoreItems = async ()=>{\n        if (lastVisible) {\n            try {\n                const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n                const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n                setLastVisible(lastVisibleDoc);\n                setItems((prevItems)=>[\n                        ...prevItems,\n                        ...querySnapshot.docs.map((doc)=>({\n                                ...doc.data(),\n                                id: doc.id\n                            }))\n                    ]);\n                setIsEmpty(querySnapshot.empty);\n            } catch (error) {\n                console.error(\"Error fetching more items: \", error);\n            }\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n    // Redirigez vers une page de modification, ou ouvrez un formulaire de modification en modale\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.header,\n                children: \"Dashboard - List of Items\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\src\\\\app\\\\page.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListItems, \"ufa6fED357WRPyUecjcxOEbH0WQ=\");\n_c = ListItems;\nconst styles = {\n    container: {\n        maxWidth: \"800px\",\n        margin: \"0 auto\",\n        padding: \"20px\",\n        textAlign: \"center\",\n        backgroundColor: \"#f4f4f4\",\n        borderRadius: \"8px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    grid: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr\",\n        gap: \"20px\"\n    },\n    card: {\n        backgroundColor: \"#fff\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.1)\",\n        textAlign: \"left\"\n    },\n    title: {\n        fontSize: \"18px\",\n        fontWeight: \"bold\",\n        marginBottom: \"10px\"\n    },\n    content: {\n        fontSize: \"14px\",\n        marginBottom: \"10px\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\",\n        marginBottom: \"10px\"\n    },\n    buttonGroup: {\n        display: \"flex\",\n        justifyContent: \"flex-end\",\n        gap: \"10px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    deleteButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#dc3545\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItems);\nvar _c;\n$RefreshReg$(_c, \"ListItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPOzs7QUFJcUM7QUFDTDtBQUNxRDtBQUN2QztBQUNZO0FBQ0c7QUFDakI7QUFLbkQsTUFBTWMsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTW9CLGVBQWU7SUFFckJyQixnREFBU0EsQ0FBQztRQUNSc0I7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNQyxhQUFhbkIseURBQUtBLENBQ3RCRCw4REFBVUEsQ0FBQ0Qsd0RBQUVBLEVBQUUsVUFDZkcsMkRBQU9BLENBQUMsVUFDUkMseURBQUtBLENBQUNlO1lBRVIsTUFBTUcsZ0JBQWdCLE1BQU1oQiwyREFBT0EsQ0FBQ2U7WUFDcEMsTUFBTUUsaUJBQWlCRCxjQUFjRSxJQUFJLENBQUNGLGNBQWNFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7WUFDeEVULGVBQWVPO1lBQ2ZULFNBQVNRLGNBQWNFLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQUUsR0FBR0EsSUFBSUMsSUFBSSxFQUFFO29CQUFFQyxJQUFJRixJQUFJRSxFQUFFO2dCQUFDO1lBQ3RFWCxXQUFXSSxjQUFjUSxLQUFLO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGO0lBRUEsTUFBTUUsaUJBQWlCO1FBQ3JCLElBQUlsQixhQUFhO1lBQ2YsSUFBSTtnQkFDRixNQUFNTSxhQUFhbkIseURBQUtBLENBQ3RCRCw4REFBVUEsQ0FBQ0Qsd0RBQUVBLEVBQUUsVUFDZkcsMkRBQU9BLENBQUMsVUFDUkUsOERBQVVBLENBQUNVLGNBQ1hYLHlEQUFLQSxDQUFDZTtnQkFFUixNQUFNRyxnQkFBZ0IsTUFBTWhCLDJEQUFPQSxDQUFDZTtnQkFDcEMsTUFBTUUsaUJBQWlCRCxjQUFjRSxJQUFJLENBQUNGLGNBQWNFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7Z0JBQ3hFVCxlQUFlTztnQkFDZlQsU0FBUyxDQUFDb0IsWUFBYzsyQkFDbkJBOzJCQUNBWixjQUFjRSxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO2dDQUFFLEdBQUdBLElBQUlDLElBQUksRUFBRTtnQ0FBRUMsSUFBSUYsSUFBSUUsRUFBRTs0QkFBQztxQkFDakU7Z0JBQ0RYLFdBQVdJLGNBQWNRLEtBQUs7WUFDaEMsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtZQUMvQztRQUNGO0lBQ0Y7SUFFQSxNQUFNSSxhQUFhLENBQUNOO1FBQ2xCRyxRQUFRSSxHQUFHLENBQUMseUJBQTRCLE9BQUhQO0lBQ3JDLDZGQUE2RjtJQUMvRjtJQUVBLE1BQU1RLGVBQWUsQ0FBQ1I7UUFDcEJmLFNBQVMsQ0FBQ29CLFlBQWNBLFVBQVVJLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVixFQUFFLEtBQUtBO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMxQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLE1BQU07MEJBQUU7Ozs7OzswQkFDMUIsOERBQUNsQyw2REFBU0E7Ozs7Ozs7Ozs7O0FBSWhCO0dBbEVNQztLQUFBQTtBQW9FTixNQUFNOEIsU0FBUztJQUNiQyxXQUFXO1FBQ1RHLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsaUJBQWlCO1FBQ2pCQyxjQUFjO0lBQ2hCO0lBQ0FOLFFBQVE7UUFDTk8sVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGNBQWM7SUFDaEI7SUFDQUMsTUFBTTtRQUNKQyxTQUFTO1FBQ1RDLHFCQUFxQjtRQUNyQkMsS0FBSztJQUNQO0lBQ0FDLE1BQU07UUFDSlQsaUJBQWlCO1FBQ2pCRixTQUFTO1FBQ1RHLGNBQWM7UUFDZFMsV0FBVztRQUNYWCxXQUFXO0lBQ2I7SUFDQVksT0FBTztRQUNMVCxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsY0FBYztJQUNoQjtJQUNBUSxTQUFTO1FBQ1BWLFVBQVU7UUFDVkUsY0FBYztJQUNoQjtJQUNBUyxPQUFPO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxXQUFXO1FBQ1hmLGNBQWM7UUFDZEcsY0FBYztJQUNoQjtJQUNBYSxhQUFhO1FBQ1hYLFNBQVM7UUFDVFksZ0JBQWdCO1FBQ2hCVixLQUFLO0lBQ1A7SUFDQVcsWUFBWTtRQUNWbkIsaUJBQWlCO1FBQ2pCb0IsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUnBCLFVBQVU7SUFDWjtJQUNBcUIsY0FBYztRQUNadkIsaUJBQWlCO1FBQ2pCb0IsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUnBCLFVBQVU7SUFDWjtBQUNGO0FBRUEsK0RBQWV4QyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9cblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vdXRpbHMvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgb3JkZXJCeSwgbGltaXQsIHN0YXJ0QWZ0ZXIsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgRGVsZXRlSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EZWxldGVJdGVtXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFUcmFzaCwgZmFFZGl0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkXCI7XG5cblxuXG5cbmNvbnN0IExpc3RJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsYXN0VmlzaWJsZSwgc2V0TGFzdFZpc2libGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0VtcHR5LCBzZXRJc0VtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaXRlbXNQZXJQYWdlID0gNTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoSXRlbXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGl0ZW1zUXVlcnkgPSBxdWVyeShcbiAgICAgICAgY29sbGVjdGlvbihkYiwgXCJpdGVtc1wiKSxcbiAgICAgICAgb3JkZXJCeShcInRpdGxlXCIpLFxuICAgICAgICBsaW1pdChpdGVtc1BlclBhZ2UpXG4gICAgICApO1xuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoaXRlbXNRdWVyeSk7XG4gICAgICBjb25zdCBsYXN0VmlzaWJsZURvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1txdWVyeVNuYXBzaG90LmRvY3MubGVuZ3RoIC0gMV07XG4gICAgICBzZXRMYXN0VmlzaWJsZShsYXN0VmlzaWJsZURvYyk7XG4gICAgICBzZXRJdGVtcyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpKTtcbiAgICAgIHNldElzRW1wdHkocXVlcnlTbmFwc2hvdC5lbXB0eSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpdGVtczogXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hNb3JlSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGxhc3RWaXNpYmxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpdGVtc1F1ZXJ5ID0gcXVlcnkoXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgXCJpdGVtc1wiKSxcbiAgICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXG4gICAgICAgICAgc3RhcnRBZnRlcihsYXN0VmlzaWJsZSksXG4gICAgICAgICAgbGltaXQoaXRlbXNQZXJQYWdlKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpdGVtc1F1ZXJ5KTtcbiAgICAgICAgY29uc3QgbGFzdFZpc2libGVEb2MgPSBxdWVyeVNuYXBzaG90LmRvY3NbcXVlcnlTbmFwc2hvdC5kb2NzLmxlbmd0aCAtIDFdO1xuICAgICAgICBzZXRMYXN0VmlzaWJsZShsYXN0VmlzaWJsZURvYyk7XG4gICAgICAgIHNldEl0ZW1zKChwcmV2SXRlbXMpID0+IFtcbiAgICAgICAgICAuLi5wcmV2SXRlbXMsXG4gICAgICAgICAgLi4ucXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKVxuICAgICAgICBdKTtcbiAgICAgICAgc2V0SXNFbXB0eShxdWVyeVNuYXBzaG90LmVtcHR5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtb3JlIGl0ZW1zOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coYEVkaXRpbmcgaXRlbSB3aXRoIGlkOiAke2lkfWApO1xuICAgIC8vIFJlZGlyaWdleiB2ZXJzIHVuZSBwYWdlIGRlIG1vZGlmaWNhdGlvbiwgb3Ugb3V2cmV6IHVuIGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uIGVuIG1vZGFsZVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xuICAgIHNldEl0ZW1zKChwcmV2SXRlbXMpID0+IHByZXZJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+RGFzaGJvYXJkIC0gTGlzdCBvZiBJdGVtczwvaDI+XG4gICAgICA8RGFzaGJvYXJkIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogJzgwMHB4JyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmNGY0ZjQnLFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICB9LFxuICBncmlkOiB7XG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLFxuICAgIGdhcDogJzIwcHgnLFxuICB9LFxuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZzogJzIwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICB9LFxuICBpbWFnZToge1xuICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgfSxcbiAgYnV0dG9uR3JvdXA6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZ2FwOiAnMTBweCcsXG4gIH0sXG4gIGVkaXRCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6ICcjMDA3YmZmJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICB9LFxuICBkZWxldGVCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6ICcjZGMzNTQ1JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwibGltaXQiLCJzdGFydEFmdGVyIiwiZ2V0RG9jcyIsIkRlbGV0ZUl0ZW0iLCJGb250QXdlc29tZUljb24iLCJmYVRyYXNoIiwiZmFFZGl0IiwiRGFzaGJvYXJkIiwiTGlzdEl0ZW1zIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxhc3RWaXNpYmxlIiwic2V0TGFzdFZpc2libGUiLCJpc0VtcHR5Iiwic2V0SXNFbXB0eSIsIml0ZW1zUGVyUGFnZSIsImZldGNoSXRlbXMiLCJpdGVtc1F1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsImxhc3RWaXNpYmxlRG9jIiwiZG9jcyIsImxlbmd0aCIsIm1hcCIsImRvYyIsImRhdGEiLCJpZCIsImVtcHR5IiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hNb3JlSXRlbXMiLCJwcmV2SXRlbXMiLCJoYW5kbGVFZGl0IiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwiaXRlbSIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDIiLCJoZWFkZXIiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJncmlkIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJjYXJkIiwiYm94U2hhZG93IiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJ1dHRvbkdyb3VwIiwianVzdGlmeUNvbnRlbnQiLCJlZGl0QnV0dG9uIiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJkZWxldGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});