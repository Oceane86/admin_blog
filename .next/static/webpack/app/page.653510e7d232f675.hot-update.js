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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _utils_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firestore */ \"(app-pages-browser)/./utils/firestore.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteItem */ \"(app-pages-browser)/./components/DeleteItem.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListArticle = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastVisible, setLastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEmpty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const itemsPerPage = 5;\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchItems();\n    }, []);\n    const fetchItems = async ()=>{\n        try {\n            const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n            setLastVisible(lastVisibleDoc);\n            setItems(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n            setIsEmpty(querySnapshot.empty);\n        } catch (error) {\n            console.error(\"Error fetching items: \", error);\n        }\n    };\n    const fetchMoreItems = async ()=>{\n        if (lastVisible) {\n            try {\n                const itemsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firestore__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"items\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"title\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(lastVisible), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(itemsPerPage));\n                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(itemsQuery);\n                const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];\n                setLastVisible(lastVisibleDoc);\n                setItems((prevItems)=>[\n                        ...prevItems,\n                        ...querySnapshot.docs.map((doc)=>({\n                                ...doc.data(),\n                                id: doc.id\n                            }))\n                    ]);\n                setIsEmpty(querySnapshot.empty);\n            } catch (error) {\n                console.error(\"Error fetching more items: \", error);\n            }\n        }\n    };\n    const handleEdit = (id)=>{\n        console.log(\"Editing item with id: \".concat(id));\n        navigate(\"/edit/\".concat(id)); // Redirect to the edit page\n    };\n    const handleDelete = (id)=>{\n        setItems((prevItems)=>prevItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.content,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.header,\n                children: \"Liste des Articles\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: styles.table,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Date de Publication\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: styles.tableHeader,\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                style: styles.tableRow,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        dangerouslySetInnerHTML: {\n                                            __html: item.content\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.imageUrl,\n                                            alt: item.title,\n                                            style: styles.image\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: item.createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: styles.date,\n                                            children: item.createdAt.toDate().toLocaleDateString(\"fr-FR\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: styles.tableCell,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(item.id),\n                                                style: styles.editButton,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEdit\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                id: item.id,\n                                                onDelete: handleDelete\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            !isEmpty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.loadMoreContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: fetchMoreItems,\n                    style: styles.loadMoreButton,\n                    children: \"Charger plus d'articles\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\invit\\\\Documents\\\\crud_test\\\\next-firebase\\\\components\\\\ListArticle.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListArticle, \"A+dwvfbjbOBuAitzNLsMz7V9cKY=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate\n    ];\n});\n_c = ListArticle;\n// Styles\nconst styles = {\n    content: {\n        padding: \"20px\"\n    },\n    header: {\n        fontSize: \"24px\",\n        fontWeight: \"bold\",\n        marginBottom: \"20px\"\n    },\n    table: {\n        width: \"100%\",\n        borderCollapse: \"collapse\",\n        marginBottom: \"20px\"\n    },\n    tableHeader: {\n        backgroundColor: \"#343a40\",\n        color: \"#fff\",\n        padding: \"10px\",\n        textAlign: \"left\"\n    },\n    tableRow: {\n        borderBottom: \"1px solid #ddd\"\n    },\n    tableCell: {\n        padding: \"10px\",\n        textAlign: \"left\",\n        verticalAlign: \"middle\"\n    },\n    image: {\n        width: \"100px\",\n        height: \"100px\",\n        objectFit: \"cover\",\n        borderRadius: \"4px\"\n    },\n    editButton: {\n        backgroundColor: \"transparent\",\n        border: \"none\",\n        color: \"#007bff\",\n        cursor: \"pointer\",\n        fontSize: \"16px\",\n        marginRight: \"10px\"\n    },\n    loadMoreContainer: {\n        textAlign: \"center\"\n    },\n    loadMoreButton: {\n        backgroundColor: \"#28a745\",\n        color: \"#fff\",\n        border: \"none\",\n        padding: \"10px 20px\",\n        cursor: \"pointer\",\n        borderRadius: \"4px\"\n    },\n    date: {\n        fontSize: \"14px\",\n        color: \"#888\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListArticle);\nvar _c;\n$RefreshReg$(_c, \"ListArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlzdEFydGljbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0c7QUFDWDtBQUN3RDtBQUN0RDtBQUMyQjtBQUNOO0FBRTNELE1BQU1hLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTW1CLGVBQWU7SUFDckIsTUFBTUMsV0FBV25CLDZEQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUM7UUFDUnNCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsYUFBYTtRQUNqQixJQUFJO1lBQ0YsTUFBTUMsYUFBYWxCLHlEQUFLQSxDQUN0QkQsOERBQVVBLENBQUNELHdEQUFFQSxFQUFFLFVBQ2ZHLDJEQUFPQSxDQUFDLFVBQ1JDLHlEQUFLQSxDQUFDYTtZQUVSLE1BQU1JLGdCQUFnQixNQUFNZiwyREFBT0EsQ0FBQ2M7WUFDcEMsTUFBTUUsaUJBQWlCRCxjQUFjRSxJQUFJLENBQUNGLGNBQWNFLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7WUFDeEVWLGVBQWVRO1lBQ2ZWLFNBQVNTLGNBQWNFLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQUUsR0FBR0EsSUFBSUMsSUFBSSxFQUFFO29CQUFFQyxJQUFJRixJQUFJRSxFQUFFO2dCQUFDO1lBQ3RFWixXQUFXSyxjQUFjUSxLQUFLO1FBQ2hDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGO0lBRUEsTUFBTUUsaUJBQWlCO1FBQ3JCLElBQUluQixhQUFhO1lBQ2YsSUFBSTtnQkFDRixNQUFNTyxhQUFhbEIseURBQUtBLENBQ3RCRCw4REFB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azovL19OX0UvLi9jb21wb25lbnRzL0xpc3RBcnRpY2xlLmpzP2U1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGRiIGZyb20gJy4uL3V0aWxzL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCBvcmRlckJ5LCBsaW1pdCwgc3RhcnRBZnRlciwgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCBEZWxldGVJdGVtIGZyb20gJy4vRGVsZXRlSXRlbSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhRWRpdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBMaXN0QXJ0aWNsZSA9ICgpID0+IHtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGFzdFZpc2libGUsIHNldExhc3RWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0VtcHR5LCBzZXRJc0VtcHR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpdGVtc1BlclBhZ2UgPSA1O1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpdGVtc1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICAgICAgY29sbGVjdGlvbihkYiwgXCJpdGVtc1wiKSxcclxuICAgICAgICBvcmRlckJ5KFwidGl0bGVcIiksXHJcbiAgICAgICAgbGltaXQoaXRlbXNQZXJQYWdlKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhpdGVtc1F1ZXJ5KTtcclxuICAgICAgY29uc3QgbGFzdFZpc2libGVEb2MgPSBxdWVyeVNuYXBzaG90LmRvY3NbcXVlcnlTbmFwc2hvdC5kb2NzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBzZXRMYXN0VmlzaWJsZShsYXN0VmlzaWJsZURvYyk7XHJcbiAgICAgIHNldEl0ZW1zKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSkpO1xyXG4gICAgICBzZXRJc0VtcHR5KHF1ZXJ5U25hcHNob3QuZW1wdHkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGl0ZW1zOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoTW9yZUl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGxhc3RWaXNpYmxlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgICAgY29sbGVjdGlvbihkYiwgXCJpdGVtc1wiKSxcclxuICAgICAgICAgIG9yZGVyQnkoXCJ0aXRsZVwiKSxcclxuICAgICAgICAgIHN0YXJ0QWZ0ZXIobGFzdFZpc2libGUpLFxyXG4gICAgICAgICAgbGltaXQoaXRlbXNQZXJQYWdlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoaXRlbXNRdWVyeSk7XHJcbiAgICAgICAgY29uc3QgbGFzdFZpc2libGVEb2MgPSBxdWVyeVNuYXBzaG90LmRvY3NbcXVlcnlTbmFwc2hvdC5kb2NzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldExhc3RWaXNpYmxlKGxhc3RWaXNpYmxlRG9jKTtcclxuICAgICAgICBzZXRJdGVtcygocHJldkl0ZW1zKSA9PiBbXHJcbiAgICAgICAgICAuLi5wcmV2SXRlbXMsXHJcbiAgICAgICAgICAuLi5xdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgc2V0SXNFbXB0eShxdWVyeVNuYXBzaG90LmVtcHR5KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW9yZSBpdGVtczogXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBFZGl0aW5nIGl0ZW0gd2l0aCBpZDogJHtpZH1gKTtcclxuICAgIG5hdmlnYXRlKGAvZWRpdC8ke2lkfWApOyAvLyBSZWRpcmVjdCB0byB0aGUgZWRpdCBwYWdlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRJdGVtcygocHJldkl0ZW1zKSA9PiBwcmV2SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+TGlzdGUgZGVzIEFydGljbGVzPC9oMj5cclxuICAgICAgPHRhYmxlIHN0eWxlPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGFibGVIZWFkZXJ9Pk5vbTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5EYXRlIGRlIFB1YmxpY2F0aW9uPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGFibGVIZWFkZXJ9PkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aXRlbS5pZH0gc3R5bGU9e3N0eWxlcy50YWJsZVJvd30+XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57aXRlbS50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLmNvbnRlbnQgfX0gLz5cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2VVcmwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PXtpdGVtLnRpdGxlfSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jcmVhdGVkQXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRhdGV9PntpdGVtLmNyZWF0ZWRBdC50b0RhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoaXRlbS5pZCl9IHN0eWxlPXtzdHlsZXMuZWRpdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFZGl0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSXRlbSBpZD17aXRlbS5pZH0gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgeyFpc0VtcHR5ICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubG9hZE1vcmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaE1vcmVJdGVtc30gc3R5bGU9e3N0eWxlcy5sb2FkTW9yZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgIENoYXJnZXIgcGx1cyBkJ2FydGljbGVzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBTdHlsZXNcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgdGFibGU6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgdGFibGVIZWFkZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMzNDNhNDAnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gIH0sXHJcbiAgdGFibGVSb3c6IHtcclxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZGRkJyxcclxuICB9LFxyXG4gIHRhYmxlQ2VsbDoge1xyXG4gICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgfSxcclxuICBlZGl0QnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGNvbG9yOiAnIzAwN2JmZicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gIH0sXHJcbiAgbG9hZE1vcmVDb250YWluZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBsb2FkTW9yZUJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzI4YTc0NScsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBjb2xvcjogJyM4ODgnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0QXJ0aWNsZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJkYiIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJsaW1pdCIsInN0YXJ0QWZ0ZXIiLCJnZXREb2NzIiwiRGVsZXRlSXRlbSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRWRpdCIsIkxpc3RBcnRpY2xlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxhc3RWaXNpYmxlIiwic2V0TGFzdFZpc2libGUiLCJpc0VtcHR5Iiwic2V0SXNFbXB0eSIsIml0ZW1zUGVyUGFnZSIsIm5hdmlnYXRlIiwiZmV0Y2hJdGVtcyIsIml0ZW1zUXVlcnkiLCJxdWVyeVNuYXBzaG90IiwibGFzdFZpc2libGVEb2MiLCJkb2NzIiwibGVuZ3RoIiwibWFwIiwiZG9jIiwiZGF0YSIsImlkIiwiZW1wdHkiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaE1vcmVJdGVtcyIsInByZXZJdGVtcyIsImhhbmRsZUVkaXQiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJmaWx0ZXIiLCJpdGVtIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250ZW50IiwiaDIiLCJoZWFkZXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRhYmxlSGVhZGVyIiwidGJvZHkiLCJ0YWJsZVJvdyIsInRkIiwidGFibGVDZWxsIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImltYWdlVXJsIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2UiLCJjcmVhdGVkQXQiLCJwIiwiZGF0ZSIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlZGl0QnV0dG9uIiwiaWNvbiIsIm9uRGVsZXRlIiwibG9hZE1vcmVDb250YWluZXIiLCJsb2FkTW9yZUJ1dHRvbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImJvcmRlckNvbGxhcHNlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJib3JkZXJCb3R0b20iLCJ2ZXJ0aWNhbEFsaWduIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ListArticle.js\n"));

/***/ })

});