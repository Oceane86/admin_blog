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

/***/ "(app-pages-browser)/./components/ListItems.js":
/*!*********************************!*\
  !*** ./components/ListItems.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n// components/ListItems.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Remove unused icons to keep the code cleaner\nconst ListItems = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const itemsPerPage = 2; // Afficher seulement 2 articles par page\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, [\n        currentPage\n    ]);\n    const fetchItems = async ()=>{\n        try {\n            let itemsQuery;\n            if (currentPage === 1) {\n                itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            } else {\n                itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            }\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const handleNextPage = ()=>{\n        if (!isEmpty) {\n            setCurrentPage((prevPage)=>prevPage + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (currentPage > 1) {\n            setCurrentPage((prevPage)=>prevPage - 1);\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n        navigate(\"/edit/\".concat(id));\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: styles.header,\n                        children: \"Liste des Articles\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.grid,\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: styles.card,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        style: styles.title,\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: styles.articleContent,\n                                        dangerouslySetInnerHTML: {\n                                            __html: item.content\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    item.imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.imageUrl,\n                                        alt: item.title,\n                                        style: styles.image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    item.createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: styles.date,\n                                        children: [\n                                            \"Cr\\xe9\\xe9 le : \",\n                                            item.createdAt.toDate().toLocaleDateString(\"fr-FR\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: styles.buttonGroup,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(item.id),\n                                                style: styles.editButton,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                id: item.id,\n                                                onDelete: handleDelete\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.paginationContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePreviousPage,\n                        style: styles.paginationButton,\n                        disabled: currentPage === 1,\n                        children: \"Pr\\xe9c\\xe9dent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Page \",\n                            currentPage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNextPage,\n                        style: styles.paginationButton,\n                        disabled: isEmpty,\n                        children: \"Suivant\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListItems, \"g+oRpWTe79HaNyDhpo11b3bdFBA=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate\n    ];\n});\n_c = ListItems;\n// Styles\nconst styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        minHeight: \"100vh\"\n    },\n    content: {\n        flex: \"1 0 auto\",\n        padding: \"20px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    grid: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr\",\n        gap: \"20px\"\n    },\n    card: {\n        backgroundColor: \"#fff\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.1)\",\n        textAlign: \"left\"\n    },\n    title: {\n        fontSize: \"18px\",\n        fontWeight: \"bold\",\n        marginBottom: \"10px\"\n    },\n    articleContent: {\n        fontSize: \"14px\",\n        marginBottom: \"10px\",\n        paddingLeft: \"10px\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\",\n        marginBottom: \"10px\"\n    },\n    date: {\n        fontSize: \"12px\",\n        color: \"#888\",\n        marginBottom: \"10px\"\n    },\n    buttonGroup: {\n        display: \"flex\",\n        justifyContent: \"flex-end\",\n        gap: \"10px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    paginationContainer: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        marginTop: \"20px\",\n        marginBottom: \"20px\"\n    },\n    paginationButton: {\n        backgroundColor: \"#28a745\",\n        color: \"#fff\",\n        border: \"none\",\n        padding: \"10px 20px\",\n        cursor: \"pointer\",\n        borderRadius: \"4px\",\n        marginLeft: \"10px\",\n        marginRight: \"10px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItems);\nvar _c;\n$RefreshReg$(_c, \"ListItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdEl0ZW1zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwwQkFBMEI7OztBQUVrQjtBQUNHO0FBQ1g7QUFDd0Q7QUFDdEQ7QUFDMkI7QUFDTixDQUFDLCtDQUErQztBQUUzRyxNQUFNYSxZQUFZOztJQUNoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNc0IsZUFBZSxHQUFHLHlDQUF5QztJQUNqRSxNQUFNQyxXQUFXckIsNkRBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSdUI7SUFDRixHQUFHO1FBQUNKO0tBQVk7SUFFaEIsTUFBTUksYUFBYTtRQUNqQixJQUFJO1lBQ0YsSUFBSUM7WUFDSixJQUFJTCxnQkFBZ0IsR0FBRztnQkFDckJLLGFBQWFwQix5REFBS0EsQ0FDaEJELDhEQUFVQSxDQUFDRCx3REFBRUEsRUFBRSxVQUNmRywyREFBT0EsQ0FBQyxVQUNSQyx5REFBS0EsQ0FBQ2U7WUFFVixPQUFPO2dCQUNMRyxhQUFhcEIseURBQUtBLENBQ2hCRCw4REFBVUEsQ0FBQ0Qsd0RBQUVBLEVBQUUsVUFDZkcsMkRBQU9BLENBQUMsVUFDUkUsOERBQVVBLENBQUNRLGNBQ1hULHlEQUFLQSxDQUFDZTtZQUVWO1lBQ0EsTUFBTUksZ0JBQWdCLE1BQU1qQiwyREFBT0EsQ0FBQ2dCO1lBQ3BDLE1BQU1FLGlCQUFpQkQsY0FBY0UsSUFBSSxDQUFDRixjQUFjRSxJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO1lBQ3hFWixlQUFlVTtZQUNmWixTQUFTVyxjQUFjRSxJQUFJLENBQUNFLEdB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QUNQaUMsTUFBTTtRQUNOQyxTQUFTO0lBQ1g7SUFDQWhDLFFBQVE7UUFDTmlDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxjQUFjO0lBQ2hCO0lBQ0FsQyxNQUFNO1FBQ0oyQixTQUFTO1FBQ1RRLHFCQUFxQjtRQUNyQkMsS0FBSztJQUNQO0lBQ0FuQyxNQUFNO1FBQ0pvQyxpQkFBaUI7UUFDakJOLFNBQVM7UUFDVE8sY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUNBckMsT0FBTztRQUNMNkIsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGNBQWM7SUFDaEI7SUFDQTlCLGdCQUFnQjtRQUNkNEIsVUFBVTtRQUNWRSxjQUFjO1FBQ2RPLGFBQWE7SUFDZjtJQUNBOUIsT0FBTztRQUNMK0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWE4sY0FBYztRQUNkSixjQUFjO0lBQ2hCO0lBQ0FwQixNQUFNO1FBQ0prQixVQUFVO1FBQ1ZhLE9BQU87UUFDUFgsY0FBYztJQUNoQjtJQUNBakIsYUFBYTtRQUNYVSxTQUFTO1FBQ1RtQixnQkFBZ0I7UUFDaEJWLEtBQUs7SUFDUDtJQUNBaEIsWUFBWTtRQUNWaUIsaUJBQWlCO1FBQ2pCVSxRQUFRO1FBQ1JGLE9BQU87UUFDUEcsUUFBUTtRQUNSaEIsVUFBVTtJQUNaO0lBQ0FULHFCQUFxQjtRQUNuQkksU0FBUztRQUNUbUIsZ0JBQWdCO1FBQ2hCRyxZQUFZO1FBQ1pDLFdBQVc7UUFDWGhCLGNBQWM7SUFDaEI7SUFDQVYsa0JBQWtCO1FBQ2hCYSxpQkFBaUI7UUFDakJRLE9BQU87UUFDUEUsUUFBUTtRQUNSaEIsU0FBUztRQUNUaUIsUUFBUTtRQUNSVixjQUFjO1FBQ2RhLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0FBQ0Y7QUFFQSwrREFBZTVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0SXRlbXMuanM/NzcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gY29tcG9uZW50cy9MaXN0SXRlbXMuanNcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi91dGlscy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgb3JkZXJCeSwgbGltaXQsIHN0YXJ0QWZ0ZXIsIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgRGVsZXRlSXRlbSBmcm9tICcuL0RlbGV0ZUl0ZW0nO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUVkaXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnOyAvLyBSZW1vdmUgdW51c2VkIGljb25zIHRvIGtlZXAgdGhlIGNvZGUgY2xlYW5lclxyXG5cclxuY29uc3QgTGlzdEl0ZW1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsYXN0VmlzaWJsZSwgc2V0TGFzdFZpc2libGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzRW1wdHksIHNldElzRW1wdHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaXRlbXNQZXJQYWdlID0gMjsgLy8gQWZmaWNoZXIgc2V1bGVtZW50IDIgYXJ0aWNsZXMgcGFyIHBhZ2VcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKCk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaXRlbXNRdWVyeTtcclxuICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcbiAgICAgICAgaXRlbXNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgXCJpdGVtc1wiKSxcclxuICAgICAgICAgIG9yZGVyQnkoXCJ0aXRsZVwiKSxcclxuICAgICAgICAgIGxpbWl0KGl0ZW1zUGVyUGFnZSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW1zUXVlcnkgPSBxdWVyeShcclxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsIFwiaXRlbXNcIiksXHJcbiAgICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXHJcbiAgICAgICAgICBzdGFydEFmdGVyKGxhc3RWaXNpYmxlKSwgLy8gVXRpbGlzZSBzdGFydEFmdGVyIHBvdXIgw6l2aXRlciBkZSByw6ljdXDDqXJlciBsZXMgbcOqbWVzIGFydGljbGVzXHJcbiAgICAgICAgICBsaW1pdChpdGVtc1BlclBhZ2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpdGVtc1F1ZXJ5KTtcclxuICAgICAgY29uc3QgbGFzdFZpc2libGVEb2MgPSBxdWVyeVNuYXBzaG90LmRvY3NbcXVlcnlTbmFwc2hvdC5kb2NzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBzZXRMYXN0VmlzaWJsZShsYXN0VmlzaWJsZURvYyk7XHJcbiAgICAgIHNldEl0ZW1zKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSkpO1xyXG4gICAgICBzZXRJc0VtcHR5KHF1ZXJ5U25hcHNob3QuZW1wdHkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGl0ZW1zOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzRW1wdHkpIHsgLy8gVsOpcmlmaWV6IHF1ZSBsYSBwYWdlIHN1aXZhbnRlIG4nZXN0IHBhcyB2aWRlIGF2YW50IGRlIGwnaW5jcsOpbWVudGVyXHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBFZGl0aW5nIGl0ZW0gd2l0aCBpZDogJHtpZH1gKTtcclxuICAgIG5hdmlnYXRlKGAvZWRpdC8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gcHJldkl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9Pkxpc3RlIGRlcyBBcnRpY2xlczwvaDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy50aXRsZX0+e2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmFydGljbGVDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLmltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9e2l0ZW0udGl0bGV9IHN0eWxlPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7aXRlbS5jcmVhdGVkQXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kYXRlfT5DcsOpw6kgbGUgOiB7aXRlbS5jcmVhdGVkQXQudG9EYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicpfTwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoaXRlbS5pZCl9IHN0eWxlPXtzdHlsZXMuZWRpdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSXRlbSBpZD17aXRlbS5pZH0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wYWdpbmF0aW9uQ29udGFpbmVyfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX0gc3R5bGU9e3N0eWxlcy5wYWdpbmF0aW9uQnV0dG9ufSBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9PlByw6ljw6lkZW50PC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4+UGFnZSB7Y3VycmVudFBhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkJ1dHRvbn0gZGlzYWJsZWQ9e2lzRW1wdHl9PlN1aXZhbnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gU3R5bGVzXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLCAvLyBBc3N1cmUgcXVlIGxlIGNvbnRlbmV1ciByZW1wbGl0IHRvdXRlIGxhIGhhdXRldXIgZGUgbGEgZmVuw6p0cmVcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXg6ICcxIDAgYXV0bycsIC8vIFBlcm1ldCBhdSBjb250ZW51IGRlIGdyYW5kaXIsIG1haXMgcGFzIGF1LWRlbMOgIGRlIGxhIHRhaWxsZSBkdSBjb250ZW51XHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLFxyXG4gICAgZ2FwOiAnMjBweCcsXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICB9LFxyXG4gIGFydGljbGVDb250ZW50OiB7XHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gIH0sXHJcbiAgZGF0ZToge1xyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIGNvbG9yOiAnIzg4OCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGdhcDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgZWRpdEJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBjb2xvcjogJyMwMDdiZmYnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbkNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLCAvLyBBam91dGUgdW4gZXNwYWNlbWVudCBlbiBiYXMgcG91ciBzw6lwYXJlciBsYSBwYWdpbmF0aW9uIGR1IGNvbnRlbnUgc3VpdmFudFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbkJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzI4YTc0NScsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtcztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTmF2aWdhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJsaW1pdCIsInN0YXJ0QWZ0ZXIiLCJnZXREb2NzIiwiRGVsZXRlSXRlbSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRWRpdCIsIkxpc3RJdGVtcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJsYXN0VmlzaWJsZSIsInNldExhc3RWaXNpYmxlIiwiaXNFbXB0eSIsInNldElzRW1wdHkiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaXRlbXNQZXJQYWdlIiwibmF2aWdhdGUiLCJmZXRjaEl0ZW1zIiwiaXRlbXNRdWVyeSIsInF1ZXJ5U25hcHNob3QiLCJsYXN0VmlzaWJsZURvYyIsImRvY3MiLCJsZW5ndGgiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaWQiLCJlbXB0eSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZU5leHRQYWdlIiwicHJldlBhZ2UiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVFZGl0IiwibG9nIiwiaGFuZGxlRGVsZXRlIiwicHJldkl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGVudCIsImgyIiwiaGVhZGVyIiwiZ3JpZCIsImNhcmQiLCJoMyIsInRpdGxlIiwiYXJ0aWNsZUNvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImltYWdlVXJsIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJwIiwiZGF0ZSIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJ1dHRvbkdyb3VwIiwiYnV0dG9uIiwib25DbGljayIsImVkaXRCdXR0b24iLCJpY29uIiwib25EZWxldGUiLCJwYWdpbmF0aW9uQ29udGFpbmVyIiwicGFnaW5hdGlvbkJ1dHRvbiIsImRpc2FibGVkIiwic3BhbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwiZmxleCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImNvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJjdXJzb3IiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ListItems.js\n"));

/***/ })

});