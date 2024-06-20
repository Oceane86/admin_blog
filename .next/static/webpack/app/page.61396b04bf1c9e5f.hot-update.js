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

/***/ "(app-pages-browser)/./components/ListArticle.js":
/*!***********************************!*\
  !*** ./components/ListArticle.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListArticle = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const itemsPerPage = 5;\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, []);\n    const fetchItems = async ()=>{\n        try {\n            const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const fetchMoreItems = async ()=>{\n        if (lastVisible) {\n            try {\n                const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n                const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n                setLastVisible(lastVisibleDoc);\n                setItems((prevItems)=>[\n                        ...prevItems,\n                        ...querySnapshot.docs.map((doc)=>({\n                                ...doc.data(),\n                                id: doc.id\n                            }))\n                    ]);\n                setIsEmpty(querySnapshot.empty);\n            } catch (error) {\n                console.error(\"Error fetching more items: \", error);\n            }\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n        navigate(\"/edit/\".concat(id)); // Redirect to the edit page\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.content,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.header,\n                children: \"Liste des Articles\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: styles.table,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Date de Publication\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                style: styles.tableRow,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        dangerouslySetInnerHTML: {\n                                            __html: item.content\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.imageUrl,\n                                            alt: item.title,\n                                            style: styles.image\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: styles.date,\n                                            children: item.createdAt.toDate().toLocaleDateString(\"fr-FR\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(item.id),\n                                                style: styles.editButton,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                id: item.id,\n                                                onDelete: handleDelete\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            !isEmpty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.loadMoreContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: fetchMoreItems,\n                    style: styles.loadMoreButton,\n                    children: \"Charger plus d'articles\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListArticle, \"A+dwvfbjbOBuAitzNLsMz7V9cKY=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate\n    ];\n});\n_c = ListArticle;\n// Styles\nconst styles = {\n    content: {\n        padding: \"20px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    table: {\n        width: \"100%\",\n        borderCollapse: \"collapse\",\n        marginBottom: \"20px\"\n    },\n    tableHeader: {\n        backgroundColor: \"#343a40\",\n        color: \"#fff\",\n        padding: \"10px\",\n        textAlign: \"left\"\n    },\n    tableRow: {\n        borderBottom: \"1px solid #ddd\"\n    },\n    tableCell: {\n        padding: \"10px\",\n        textAlign: \"left\",\n        verticalAlign: \"middle\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\",\n        marginRight: \"10px\"\n    },\n    loadMoreContainer: {\n        textAlign: \"center\"\n    },\n    loadMoreButton: {\n        backgroundColor: \"#28a745\",\n        color: \"#fff\",\n        border: \"none\",\n        padding: \"10px 20px\",\n        cursor: \"pointer\",\n        borderRadius: \"4px\"\n    },\n    date: {\n        fontSize: \"14px\",\n        color: \"#888\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListArticle);\nvar _c;\n$RefreshReg$(_c, \"ListArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdEFydGljbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0o7QUFDWDtBQUN3RDtBQUN0RDtBQUMyQjtBQUNOO0FBRTNELE1BQU1jLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTW1CLGVBQWU7SUFDckIsTUFBTUMsV0FBV25CLDZEQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUM7UUFDUnNCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsYUFBYTtRQUNqQixJQUFJO1lBQ0YsTUFBTUMsYUFBYWxCLHlEQUFLQSxDQUN0QkQsOERBQVVBLENBQUNELHdEQUFFQSxFQUFFLFVBQ2ZHLDJEQUFPQSxDQUFDLFVBQ1JDLHlEQUFLQSxDQUFDYTtZQUVSLE1BQU1JLGdCQUFnQixNQUFNZiwyREFBT0EsQ0FBQ2M7WUFDcEMsTUFBTUUsaUJBQWlCRCxjQUFjRSxJQUFJLENBQUNGLGNBQWNFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7WUFDeEVWLGVBQWVRO1lBQ2ZWLFNBQVNTLGNBQWNFLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQUUsR0FBR0EsSUFBSUMsSUFBSSxFQUFFO29CQUFFQyxJQUFJRixJQUFJRSxFQUFFO2dCQUFDO1lBQ3RFWixXQUFXSyxjQUFjUSxLQUFLO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGO0lBRUEsTUFBTUUsaUJBQWlCO1FBQ3JCLElBQUluQixhQUFhO1lBQ2YsSUFBSTtnQkFDRixNQUFNTyxhQUFhbEIseURBQUtBLENBQ3RCRCw4REFB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azovL19OX0UvLi9jb21wb25lbnRzL0xpc3RBcnRpY2xlLmpzP2U1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi91dGlscy9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgb3JkZXJCeSwgbGltaXQsIHN0YXJ0QWZ0ZXIsIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgRGVsZXRlSXRlbSBmcm9tICcuL0RlbGV0ZUl0ZW0nO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUVkaXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgTGlzdEFydGljbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xhc3RWaXNpYmxlLCBzZXRMYXN0VmlzaWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNFbXB0eSwgc2V0SXNFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaXRlbXNQZXJQYWdlID0gNTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaXRlbXNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIGNvbGxlY3Rpb24oZGIsIFwiaXRlbXNcIiksXHJcbiAgICAgICAgb3JkZXJCeShcInRpdGxlXCIpLFxyXG4gICAgICAgIGxpbWl0KGl0ZW1zUGVyUGFnZSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoaXRlbXNRdWVyeSk7XHJcbiAgICAgIGNvbnN0IGxhc3RWaXNpYmxlRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzW3F1ZXJ5U25hcHNob3QuZG9jcy5sZW5ndGggLSAxXTtcclxuICAgICAgc2V0TGFzdFZpc2libGUobGFzdFZpc2libGVEb2MpO1xyXG4gICAgICBzZXRJdGVtcyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpKTtcclxuICAgICAgc2V0SXNFbXB0eShxdWVyeVNuYXBzaG90LmVtcHR5KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpdGVtczogXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaE1vcmVJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChsYXN0VmlzaWJsZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUXVlcnkgPSBxdWVyeShcclxuICAgICAgICAgIGNvbGxlY3Rpb24oZGIsIFwiaXRlbXNcIiksXHJcbiAgICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXHJcbiAgICAgICAgICBzdGFydEFmdGVyKGxhc3RWaXNpYmxlKSxcclxuICAgICAgICAgIGxpbWl0KGl0ZW1zUGVyUGFnZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGl0ZW1zUXVlcnkpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RWaXNpYmxlRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzW3F1ZXJ5U25hcHNob3QuZG9jcy5sZW5ndGggLSAxXTtcclxuICAgICAgICBzZXRMYXN0VmlzaWJsZShsYXN0VmlzaWJsZURvYyk7XHJcbiAgICAgICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gW1xyXG4gICAgICAgICAgLi4ucHJldkl0ZW1zLFxyXG4gICAgICAgICAgLi4ucXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHNldElzRW1wdHkocXVlcnlTbmFwc2hvdC5lbXB0eSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vcmUgaXRlbXM6IFwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgRWRpdGluZyBpdGVtIHdpdGggaWQ6ICR7aWR9YCk7XHJcbiAgICBuYXZpZ2F0ZShgL2VkaXQvJHtpZH1gKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGVkaXQgcGFnZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT4gcHJldkl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9Pkxpc3RlIGRlcyBBcnRpY2xlczwvaDI+XHJcbiAgICAgIDx0YWJsZSBzdHlsZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5Ob208L3RoPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRlcn0+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRlcn0+SW1hZ2U8L3RoPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRlcn0+RGF0ZSBkZSBQdWJsaWNhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5BY3Rpb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9IHN0eWxlPXtzdHlsZXMudGFibGVSb3d9PlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e2l0ZW0udGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5jb250ZW50IH19IC8+XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VVcmx9IGFsdD17aXRlbS50aXRsZX0gc3R5bGU9e3N0eWxlcy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY3JlYXRlZEF0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kYXRlfT57aXRlbS5jcmVhdGVkQXQudG9EYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicpfTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGl0ZW0uaWQpfSBzdHlsZT17c3R5bGVzLmVkaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUl0ZW0gaWQ9e2l0ZW0uaWR9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHshaXNFbXB0eSAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxvYWRNb3JlQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hNb3JlSXRlbXN9IHN0eWxlPXtzdHlsZXMubG9hZE1vcmVCdXR0b259PlxyXG4gICAgICAgICAgICBDaGFyZ2VyIHBsdXMgZCdhcnRpY2xlc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gU3R5bGVzXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICB9LFxyXG4gIHRhYmxlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICB9LFxyXG4gIHRhYmxlSGVhZGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzQzYTQwJyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICB9LFxyXG4gIHRhYmxlUm93OiB7XHJcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2RkZCcsXHJcbiAgfSxcclxuICB0YWJsZUNlbGw6IHtcclxuICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gIH0sXHJcbiAgZWRpdEJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBjb2xvcjogJyMwMDdiZmYnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICB9LFxyXG4gIGxvYWRNb3JlQ29udGFpbmVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgbG9hZE1vcmVCdXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyOGE3NDUnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgY29sb3I6ICcjODg4JyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEFydGljbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJsaW1pdCIsInN0YXJ0QWZ0ZXIiLCJnZXREb2NzIiwiRGVsZXRlSXRlbSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRWRpdCIsIkxpc3RBcnRpY2xlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxhc3RWaXNpYmxlIiwic2V0TGFzdFZpc2libGUiLCJpc0VtcHR5Iiwic2V0SXNFbXB0eSIsIml0ZW1zUGVyUGFnZSIsIm5hdmlnYXRlIiwiZmV0Y2hJdGVtcyIsIml0ZW1zUXVlcnkiLCJxdWVyeVNuYXBzaG90IiwibGFzdFZpc2libGVEb2MiLCJkb2NzIiwibGVuZ3RoIiwibWFwIiwiZG9jIiwiZGF0YSIsImlkIiwiZW1wdHkiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaE1vcmVJdGVtcyIsInByZXZJdGVtcyIsImhhbmRsZUVkaXQiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJmaWx0ZXIiLCJpdGVtIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250ZW50IiwiaDIiLCJoZWFkZXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRhYmxlSGVhZGVyIiwidGJvZHkiLCJ0YWJsZVJvdyIsInRkIiwidGFibGVDZWxsIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImltYWdlVXJsIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJwIiwiZGF0ZSIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlZGl0QnV0dG9uIiwiaWNvbiIsIm9uRGVsZXRlIiwibG9hZE1vcmVDb250YWluZXIiLCJsb2FkTW9yZUJ1dHRvbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJib3JkZXJCb3R0b20iLCJ2ZXJ0aWNhbEFsaWduIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ListArticle.js\n"));

/***/ })

});