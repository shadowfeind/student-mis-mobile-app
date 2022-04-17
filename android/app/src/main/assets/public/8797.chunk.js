"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[8797],{38797:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29439);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39704);\n/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40851);\n/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88798);\n/* harmony import */ var _components_LoadingComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50141);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88403);\n/* harmony import */ var _components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59004);\n/* harmony import */ var _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80735);\n/* harmony import */ var _syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38687);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SyllabusSix = function SyllabusSix() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState, 2),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState3, 2),\n      openPopup = _useState4[0],\n      setOpenPopup = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    message: "",\n    type: ""\n  }),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState5, 2),\n      notify = _useState6[0],\n      setNotify = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    title: "",\n    subTitle: ""\n  }),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState7, 2),\n      confirmDialog = _useState8[0],\n      setConfirmDialog = _useState8[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {\n    return state.getListSyllabus;\n  }),\n      listSyllabus = _useSelector.listSyllabus,\n      loading = _useSelector.loading,\n      listSyllabusError = _useSelector.error;\n\n  if (listSyllabusError) {\n    setNotify({\n      isOpen: true,\n      message: listSyllabusError,\n      type: "error"\n    });\n    dispatch({\n      type: _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__/* .GET_LIST_SYLLABUS_RESET */ .ZT\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (listSyllabus) {\n      setUrl("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__/* .API_URL */ .T).concat(listSyllabus.FullPath));\n    }\n  }, [listSyllabus]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__/* .getListSyllabusAction */ .I)(10));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch({\n      type: "GET_LINK",\n      payload: "/syllabus"\n    });\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoadingComp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, listSyllabus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {\n    src: url,\n    width: "100%",\n    height: "700"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Notification__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {\n    notify: notify,\n    setNotify: setNotify\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {\n    confirmDialog: confirmDialog,\n    setConfirmDialog: setConfirmDialog\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyllabusSix);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlFQUFlYixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1taXMtbW9iaWxlLWFwcC8uL3NyYy90ZWFjaGVyL3N5bGxhYnVzL3N5bGxhYnVzU2l4L1N5bGxhYnVzU2l4LmpzP2QzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25cIjtcbmltcG9ydCBMb2FkaW5nQ29tcCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nQ29tcFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBDdXN0b21Db250YWluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuaW1wb3J0IHtcbiAgR0VUX0FMTF9TWUxMQUJVU19SRVNFVCxcbiAgR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQsXG59IGZyb20gXCIuLi9zeWxsYWJ1c1BnL1N5bGxhYnVzQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRMaXN0U3lsbGFidXNBY3Rpb24gfSBmcm9tIFwiLi4vc3lsbGFidXNQZy9TeWxsYWJ1c0FjdGlvbnNcIjtcblxuY29uc3QgU3lsbGFidXNTaXggPSAoKSA9PiB7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29wZW5Qb3B1cCwgc2V0T3BlblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbm90aWZ5LCBzZXROb3RpZnldID0gdXNlU3RhdGUoe1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2NvbmZpcm1EaWFsb2csIHNldENvbmZpcm1EaWFsb2ddID0gdXNlU3RhdGUoe1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgdGl0bGU6IFwiXCIsXG4gICAgc3ViVGl0bGU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiBcbiAgY29uc3QgeyBsaXN0U3lsbGFidXMsbG9hZGluZywgZXJyb3I6IGxpc3RTeWxsYWJ1c0Vycm9yIH0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmdldExpc3RTeWxsYWJ1c1xuICApO1xuXG5cbiAgaWYgKGxpc3RTeWxsYWJ1c0Vycm9yKSB7XG4gICAgc2V0Tm90aWZ5KHtcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IGxpc3RTeWxsYWJ1c0Vycm9yLFxuICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaXN0U3lsbGFidXMpIHtcbiAgICAgIHNldFVybChgJHtBUElfVVJMfSR7bGlzdFN5bGxhYnVzLkZ1bGxQYXRofWApO1xuICAgIH1cbiAgfSwgW2xpc3RTeWxsYWJ1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0TGlzdFN5bGxhYnVzQWN0aW9uKDEwKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJHRVRfTElOS1wiLCBwYXlsb2FkOiBcIi9zeWxsYWJ1c1wiIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9tQ29udGFpbmVyPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRpbmdDb21wIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAge2xpc3RTeWxsYWJ1cyAmJiA8aWZyYW1lIHNyYz17dXJsfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI3MDBcIiAvPn1cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0N1c3RvbUNvbnRhaW5lcj5cbiAgICAgIDxOb3RpZmljYXRpb24gbm90aWZ5PXtub3RpZnl9IHNldE5vdGlmeT17c2V0Tm90aWZ5fSAvPlxuICAgICAgPENvbmZpcm1EaWFsb2dcbiAgICAgICAgY29uZmlybURpYWxvZz17Y29uZmlybURpYWxvZ31cbiAgICAgICAgc2V0Q29uZmlybURpYWxvZz17c2V0Q29uZmlybURpYWxvZ31cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxsYWJ1c1NpeDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNvbmZpcm1EaWFsb2ciLCJOb3RpZmljYXRpb24iLCJMb2FkaW5nQ29tcCIsIkFQSV9VUkwiLCJDdXN0b21Db250YWluZXIiLCJCdXR0b24iLCJUb29sYmFyIiwiQWRkSWNvbiIsIlBvcHVwIiwiR0VUX0FMTF9TWUxMQUJVU19SRVNFVCIsIkdFVF9MSVNUX1NZTExBQlVTX1JFU0VUIiwiZ2V0TGlzdFN5bGxhYnVzQWN0aW9uIiwiU3lsbGFidXNTaXgiLCJ1cmwiLCJzZXRVcmwiLCJvcGVuUG9wdXAiLCJzZXRPcGVuUG9wdXAiLCJpc09wZW4iLCJtZXNzYWdlIiwidHlwZSIsIm5vdGlmeSIsInNldE5vdGlmeSIsInRpdGxlIiwic3ViVGl0bGUiLCJjb25maXJtRGlhbG9nIiwic2V0Q29uZmlybURpYWxvZyIsImRpc3BhdGNoIiwic3RhdGUiLCJnZXRMaXN0U3lsbGFidXMiLCJsaXN0U3lsbGFidXMiLCJsb2FkaW5nIiwibGlzdFN5bGxhYnVzRXJyb3IiLCJlcnJvciIsIkZ1bGxQYXRoIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///38797\n')}}]);