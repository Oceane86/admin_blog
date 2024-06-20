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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Remove unused icons to keep the code cleaner\nconst ListItems = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const itemsPerPage = 2; // Afficher seulement 2 articles par page\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, [\n        currentPage\n    ]);\n    const fetchItems = async ()=>{\n        try {\n            let itemsQuery;\n            if (currentPage === 1) {\n                itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            } else {\n                itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            }\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const handleNextPage = ()=>{\n        if (!isEmpty) {\n            setCurrentPage((prevPage)=>prevPage + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (currentPage > 1) {\n            setCurrentPage((prevPage)=>prevPage - 1);\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n        navigate(\"/edit/\".concat(id));\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: styles.header,\n                        children: \"Liste des Articles\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.grid,\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: styles.card,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        style: styles.title,\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: styles.articleContent,\n                                        dangerouslySetInnerHTML: {\n                                            __html: item.content\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    item.imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.imageUrl,\n                                        alt: item.title,\n                                        style: styles.image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    item.createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: styles.date,\n                                        children: [\n                                            \"Cr\\xe9\\xe9 le : \",\n                                            item.createdAt.toDate().toLocaleDateString(\"fr-FR\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: styles.buttonGroup,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(item.id),\n                                                style: styles.editButton,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                id: item.id,\n                                                onDelete: handleDelete\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.paginationContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePreviousPage,\n                        style: styles.paginationButton,\n                        disabled: currentPage === 1,\n                        children: \"Pr\\xe9c\\xe9dent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Page \",\n                            currentPage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNextPage,\n                        style: styles.paginationButton,\n                        disabled: isEmpty,\n                        children: \"Suivant\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListItems.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListItems, \"g+oRpWTe79HaNyDhpo11b3bdFBA=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate\n    ];\n});\n_c = ListItems;\n// Styles\nconst styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        minHeight: \"100vh\"\n    },\n    content: {\n        flex: \"1 0 auto\",\n        padding: \"20px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    grid: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr\",\n        gap: \"20px\"\n    },\n    card: {\n        backgroundColor: \"#fff\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.1)\",\n        textAlign: \"left\"\n    },\n    title: {\n        fontSize: \"18px\",\n        fontWeight: \"bold\",\n        marginBottom: \"10px\"\n    },\n    articleContent: {\n        fontSize: \"14px\",\n        marginBottom: \"10px\",\n        paddingLeft: \"10px\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\",\n        marginBottom: \"10px\"\n    },\n    date: {\n        fontSize: \"12px\",\n        color: \"#888\",\n        marginBottom: \"10px\"\n    },\n    buttonGroup: {\n        display: \"flex\",\n        justifyContent: \"flex-end\",\n        gap: \"10px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    paginationContainer: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        marginTop: \"20px\",\n        marginBottom: \"20px\"\n    },\n    paginationButton: {\n        backgroundColor: \"#28a745\",\n        color: \"#fff\",\n        border: \"none\",\n        padding: \"10px 20px\",\n        cursor: \"pointer\",\n        borderRadius: \"4px\",\n        marginLeft: \"10px\",\n        marginRight: \"10px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItems);\nvar _c;\n$RefreshReg$(_c, \"ListItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdEl0ZW1zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNHO0FBQ1g7QUFDd0Q7QUFDdEQ7QUFDMkI7QUFDTixDQUFDLCtDQUErQztBQUUzRyxNQUFNYSxZQUFZOztJQUNoQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNc0IsZUFBZSxHQUFHLHlDQUF5QztJQUNqRSxNQUFNQyxXQUFXckIsNkRBQVdBO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSdUI7SUFDRixHQUFHO1FBQUNKO0tBQVk7SUFFaEIsTUFBTUksYUFBYTtRQUNqQixJQUFJO1lBQ0YsSUFBSUM7WUFDSixJQUFJTCxnQkFBZ0IsR0FBRztnQkFDckJLLGFBQWFwQix5REFBS0EsQ0FDaEJELDhEQUFVQSxDQUFDRCx3REFBRUEsRUFBRSxVQUNmRywyREFBT0EsQ0FBQyxVQUNSQyx5REFBS0EsQ0FBQ2U7WUFFVixPQUFPO2dCQUNMRyxhQUFhcEIseURBQUtBLENBQ2hCRCw4REFBVUEsQ0FBQ0Qsd0RBQUVBLEVBQUUsVUFDZkcsMkRBQU9BLENBQUMsVUFDUkUsOERBQVVBLENBQUNRLGNBQ1hULHlEQUFLQSxDQUFDZTtZQUVWO1lBQ0EsTUFBTUksZ0JBQWdCLE1BQU1qQiwyREFBT0EsQ0FBQ2dCO1lBQ3BDLE1BQU1FLGlCQUFpQkQsY0FBY0UsSUFBSSxDQUFDRixjQUFjRSxJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO1lBQ3hFWixlQUFlVTtZQUNmWixTQUFTVyxjQUFjRSxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFD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QUNOQyxTQUFTO0lBQ1g7SUFDQWhDLFFBQVE7UUFDTmlDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxjQUFjO0lBQ2hCO0lBQ0FsQyxNQUFNO1FBQ0oyQixTQUFTO1FBQ1RRLHFCQUFxQjtRQUNyQkMsS0FBSztJQUNQO0lBQ0FuQyxNQUFNO1FBQ0pvQyxpQkFBaUI7UUFDakJOLFNBQVM7UUFDVE8sY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUNBckMsT0FBTztRQUNMNkIsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGNBQWM7SUFDaEI7SUFDQTlCLGdCQUFnQjtRQUNkNEIsVUFBVTtRQUNWRSxjQUFjO1FBQ2RPLGFBQWE7SUFDZjtJQUNBOUIsT0FBTztRQUNMK0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWE4sY0FBYztRQUNkSixjQUFjO0lBQ2hCO0lBQ0FwQixNQUFNO1FBQ0prQixVQUFVO1FBQ1ZhLE9BQU87UUFDUFgsY0FBYztJQUNoQjtJQUNBakIsYUFBYTtRQUNYVSxTQUFTO1FBQ1RtQixnQkFBZ0I7UUFDaEJWLEtBQUs7SUFDUDtJQUNBaEIsWUFBWTtRQUNWaUIsaUJBQWlCO1FBQ2pCVSxRQUFRO1FBQ1JGLE9BQU87UUFDUEcsUUFBUTtRQUNSaEIsVUFBVTtJQUNaO0lBQ0FULHFCQUFxQjtRQUNuQkksU0FBUztRQUNUbUIsZ0JBQWdCO1FBQ2hCRyxZQUFZO1FBQ1pDLFdBQVc7UUFDWGhCLGNBQWM7SUFDaEI7SUFDQVYsa0JBQWtCO1FBQ2hCYSxpQkFBaUI7UUFDakJRLE9BQU87UUFDUEUsUUFBUTtRQUNSaEIsU0FBUztRQUNUaUIsUUFBUTtRQUNSVixjQUFjO1FBQ2RhLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0FBQ0Y7QUFFQSwrREFBZTVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0SXRlbXMuanM/NzcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vdXRpbHMvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIG9yZGVyQnksIGxpbWl0LCBzdGFydEFmdGVyLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IERlbGV0ZUl0ZW0gZnJvbSAnLi9EZWxldGVJdGVtJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFFZGl0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJzsgLy8gUmVtb3ZlIHVudXNlZCBpY29ucyB0byBrZWVwIHRoZSBjb2RlIGNsZWFuZXJcclxuXHJcbmNvbnN0IExpc3RJdGVtcyA9ICgpID0+IHtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGFzdFZpc2libGUsIHNldExhc3RWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0VtcHR5LCBzZXRJc0VtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IDI7IC8vIEFmZmljaGVyIHNldWxlbWVudCAyIGFydGljbGVzIHBhciBwYWdlXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcygpO1xyXG4gIH0sIFtjdXJyZW50UGFnZV0pO1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGl0ZW1zUXVlcnk7XHJcbiAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xyXG4gICAgICAgIGl0ZW1zUXVlcnkgPSBxdWVyeShcclxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsIFwiaXRlbXNcIiksXHJcbiAgICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXHJcbiAgICAgICAgICBsaW1pdChpdGVtc1BlclBhZ2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtc1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICAgICAgICBjb2xsZWN0aW9uKGRiLCBcIml0ZW1zXCIpLFxyXG4gICAgICAgICAgb3JkZXJCeShcInRpdGxlXCIpLFxyXG4gICAgICAgICAgc3RhcnRBZnRlcihsYXN0VmlzaWJsZSksIC8vIFV0aWxpc2Ugc3RhcnRBZnRlciBwb3VyIMOpdml0ZXIgZGUgcsOpY3Vww6lyZXIgbGVzIG3Dqm1lcyBhcnRpY2xlc1xyXG4gICAgICAgICAgbGltaXQoaXRlbXNQZXJQYWdlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoaXRlbXNRdWVyeSk7XHJcbiAgICAgIGNvbnN0IGxhc3RWaXNpYmxlRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzW3F1ZXJ5U25hcHNob3QuZG9jcy5sZW5ndGggLSAxXTtcclxuICAgICAgc2V0TGFzdFZpc2libGUobGFzdFZpc2libGVEb2MpO1xyXG4gICAgICBzZXRJdGVtcyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpKTtcclxuICAgICAgc2V0SXNFbXB0eShxdWVyeVNuYXBzaG90LmVtcHR5KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpdGVtczogXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0VtcHR5KSB7IC8vIFbDqXJpZmlleiBxdWUgbGEgcGFnZSBzdWl2YW50ZSBuJ2VzdCBwYXMgdmlkZSBhdmFudCBkZSBsJ2luY3LDqW1lbnRlclxyXG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgRWRpdGluZyBpdGVtIHdpdGggaWQ6ICR7aWR9YCk7XHJcbiAgICBuYXZpZ2F0ZShgL2VkaXQvJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldEl0ZW1zKChwcmV2SXRlbXMpID0+IHByZXZJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5MaXN0ZSBkZXMgQXJ0aWNsZXM8L2gyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IHN0eWxlPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5hcnRpY2xlQ29udGVudH1cclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5pbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLnRpdGxlfSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2l0ZW0uY3JlYXRlZEF0ICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGF0ZX0+Q3LDqcOpIGxlIDoge2l0ZW0uY3JlYXRlZEF0LnRvRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInKX08L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGl0ZW0uaWQpfSBzdHlsZT17c3R5bGVzLmVkaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUl0ZW0gaWQ9e2l0ZW0uaWR9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkJ1dHRvbn0gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfT5QcsOpY8OpZGVudDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuPlBhZ2Uge2N1cnJlbnRQYWdlfTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfSBzdHlsZT17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259IGRpc2FibGVkPXtpc0VtcHR5fT5TdWl2YW50PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFN0eWxlc1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1pbkhlaWdodDogJzEwMHZoJywgLy8gQXNzdXJlIHF1ZSBsZSBjb250ZW5ldXIgcmVtcGxpdCB0b3V0ZSBsYSBoYXV0ZXVyIGRlIGxhIGZlbsOqdHJlXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiAnMSAwIGF1dG8nLCAvLyBQZXJtZXQgYXUgY29udGVudSBkZSBncmFuZGlyLCBtYWlzIHBhcyBhdS1kZWzDoCBkZSBsYSB0YWlsbGUgZHUgY29udGVudVxyXG4gICAgcGFkZGluZzogJzIwcHgnLFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyJyxcclxuICAgIGdhcDogJzIwcHgnLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgfSxcclxuICBhcnRpY2xlQ29udGVudDoge1xyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBjb2xvcjogJyM4ODgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBnYXA6ICcxMHB4JyxcclxuICB9LFxyXG4gIGVkaXRCdXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgY29sb3I6ICcjMDA3YmZmJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICB9LFxyXG4gIHBhZ2luYXRpb25Db250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JywgLy8gQWpvdXRlIHVuIGVzcGFjZW1lbnQgZW4gYmFzIHBvdXIgc8OpcGFyZXIgbGEgcGFnaW5hdGlvbiBkdSBjb250ZW51IHN1aXZhbnRcclxuICB9LFxyXG4gIHBhZ2luYXRpb25CdXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyOGE3NDUnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXHJcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU5hdmlnYXRlIiwiZGIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvcmRlckJ5IiwibGltaXQiLCJzdGFydEFmdGVyIiwiZ2V0RG9jcyIsIkRlbGV0ZUl0ZW0iLCJGb250QXdlc29tZUljb24iLCJmYUVkaXQiLCJMaXN0SXRlbXMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGFzdFZpc2libGUiLCJzZXRMYXN0VmlzaWJsZSIsImlzRW1wdHkiLCJzZXRJc0VtcHR5IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIml0ZW1zUGVyUGFnZSIsIm5hdmlnYXRlIiwiZmV0Y2hJdGVtcyIsIml0ZW1zUXVlcnkiLCJxdWVyeVNuYXBzaG90IiwibGFzdFZpc2libGVEb2MiLCJkb2NzIiwibGVuZ3RoIiwibWFwIiwiZG9jIiwiZGF0YSIsImlkIiwiZW1wdHkiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVOZXh0UGFnZSIsInByZXZQYWdlIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlRWRpdCIsImxvZyIsImhhbmRsZURlbGV0ZSIsInByZXZJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJoMiIsImhlYWRlciIsImdyaWQiLCJjYXJkIiwiaDMiLCJ0aXRsZSIsImFydGljbGVDb250ZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJpbWFnZVVybCIsImltZyIsInNyYyIsImFsdCIsImltYWdlIiwiY3JlYXRlZEF0IiwicCIsImRhdGUiLCJ0b0RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJidXR0b25Hcm91cCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlZGl0QnV0dG9uIiwiaWNvbiIsIm9uRGVsZXRlIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsInBhZ2luYXRpb25CdXR0b24iLCJkaXNhYmxlZCIsInNwYW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1pbkhlaWdodCIsImZsZXgiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsInBhZGRpbmdMZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiY3Vyc29yIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ListItems.js\n"));

/***/ })

});