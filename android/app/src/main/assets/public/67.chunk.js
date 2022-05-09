"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[67],{60067:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70885);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39704);\n/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40851);\n/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88798);\n/* harmony import */ var _components_LoadingComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50141);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88403);\n/* harmony import */ var _components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59004);\n/* harmony import */ var _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80735);\n/* harmony import */ var _syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38687);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SyllabusUkg = function SyllabusUkg() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState, 2),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState3, 2),\n      openPopup = _useState4[0],\n      setOpenPopup = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    message: "",\n    type: ""\n  }),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState5, 2),\n      notify = _useState6[0],\n      setNotify = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    title: "",\n    subTitle: ""\n  }),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState7, 2),\n      confirmDialog = _useState8[0],\n      setConfirmDialog = _useState8[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {\n    return state.getListSyllabus;\n  }),\n      listSyllabus = _useSelector.listSyllabus,\n      loading = _useSelector.loading,\n      listSyllabusError = _useSelector.error;\n\n  if (listSyllabusError) {\n    setNotify({\n      isOpen: true,\n      message: listSyllabusError,\n      type: "error"\n    });\n    dispatch({\n      type: _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__/* .GET_LIST_SYLLABUS_RESET */ .ZT\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (listSyllabus) {\n      setUrl("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__/* .API_URL */ .T5).concat(listSyllabus.FullPath));\n    }\n  }, [listSyllabus]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__/* .getListSyllabusAction */ .I)(4));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch({\n      type: "GET_LINK",\n      payload: "/syllabus"\n    });\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoadingComp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, listSyllabus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {\n    src: url,\n    width: "100%",\n    height: "700"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Notification__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {\n    notify: notify,\n    setNotify: setNotify\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {\n    confirmDialog: confirmDialog,\n    setConfirmDialog: setConfirmDialog\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyllabusUkg);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlFQUFlYixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1taXMtbW9iaWxlLWFwcC8uL3NyYy90ZWFjaGVyL3N5bGxhYnVzL3N5bGxhYnVzVWtnL1N5bGxhYnVzVWtnLmpzPzg2ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25cIjtcbmltcG9ydCBMb2FkaW5nQ29tcCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nQ29tcFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBDdXN0b21Db250YWluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuaW1wb3J0IHtcbiAgR0VUX0FMTF9TWUxMQUJVU19SRVNFVCxcbiAgR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQsXG59IGZyb20gXCIuLi9zeWxsYWJ1c1BnL1N5bGxhYnVzQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRMaXN0U3lsbGFidXNBY3Rpb24gfSBmcm9tIFwiLi4vc3lsbGFidXNQZy9TeWxsYWJ1c0FjdGlvbnNcIjtcblxuY29uc3QgU3lsbGFidXNVa2cgPSAoKSA9PiB7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29wZW5Qb3B1cCwgc2V0T3BlblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbm90aWZ5LCBzZXROb3RpZnldID0gdXNlU3RhdGUoe1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgICB0eXBlOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2NvbmZpcm1EaWFsb2csIHNldENvbmZpcm1EaWFsb2ddID0gdXNlU3RhdGUoe1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgdGl0bGU6IFwiXCIsXG4gICAgc3ViVGl0bGU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiBcbiAgY29uc3QgeyBsaXN0U3lsbGFidXMsbG9hZGluZywgZXJyb3I6IGxpc3RTeWxsYWJ1c0Vycm9yIH0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmdldExpc3RTeWxsYWJ1c1xuICApO1xuXG5cbiAgaWYgKGxpc3RTeWxsYWJ1c0Vycm9yKSB7XG4gICAgc2V0Tm90aWZ5KHtcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IGxpc3RTeWxsYWJ1c0Vycm9yLFxuICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaXN0U3lsbGFidXMpIHtcbiAgICAgIHNldFVybChgJHtBUElfVVJMfSR7bGlzdFN5bGxhYnVzLkZ1bGxQYXRofWApO1xuICAgIH1cbiAgfSwgW2xpc3RTeWxsYWJ1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0TGlzdFN5bGxhYnVzQWN0aW9uKDQpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIkdFVF9MSU5LXCIsIHBheWxvYWQ6IFwiL3N5bGxhYnVzXCIgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDdXN0b21Db250YWluZXI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGluZ0NvbXAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICB7bGlzdFN5bGxhYnVzICYmIDxpZnJhbWUgc3JjPXt1cmx9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjcwMFwiIC8+fVxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ3VzdG9tQ29udGFpbmVyPlxuICAgICAgPE5vdGlmaWNhdGlvbiBub3RpZnk9e25vdGlmeX0gc2V0Tm90aWZ5PXtzZXROb3RpZnl9IC8+XG4gICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICBjb25maXJtRGlhbG9nPXtjb25maXJtRGlhbG9nfVxuICAgICAgICBzZXRDb25maXJtRGlhbG9nPXtzZXRDb25maXJtRGlhbG9nfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGxhYnVzVWtnO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQ29uZmlybURpYWxvZyIsIk5vdGlmaWNhdGlvbiIsIkxvYWRpbmdDb21wIiwiQVBJX1VSTCIsIkN1c3RvbUNvbnRhaW5lciIsIkJ1dHRvbiIsIlRvb2xiYXIiLCJBZGRJY29uIiwiUG9wdXAiLCJHRVRfQUxMX1NZTExBQlVTX1JFU0VUIiwiR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQiLCJnZXRMaXN0U3lsbGFidXNBY3Rpb24iLCJTeWxsYWJ1c1VrZyIsInVybCIsInNldFVybCIsIm9wZW5Qb3B1cCIsInNldE9wZW5Qb3B1cCIsImlzT3BlbiIsIm1lc3NhZ2UiLCJ0eXBlIiwibm90aWZ5Iiwic2V0Tm90aWZ5IiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbmZpcm1EaWFsb2ciLCJzZXRDb25maXJtRGlhbG9nIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImdldExpc3RTeWxsYWJ1cyIsImxpc3RTeWxsYWJ1cyIsImxvYWRpbmciLCJsaXN0U3lsbGFidXNFcnJvciIsImVycm9yIiwiRnVsbFBhdGgiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60067\n')}}]);