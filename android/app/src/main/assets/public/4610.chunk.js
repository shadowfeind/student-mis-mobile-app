"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[4610],{74610:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29439);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39704);\n/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40851);\n/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88798);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88403);\n/* harmony import */ var _components_LoadingComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50141);\n/* harmony import */ var _components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59004);\n/* harmony import */ var _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80735);\n/* harmony import */ var _syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38687);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SyllabusThree = function SyllabusThree() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState, 2),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState3, 2),\n      openPopup = _useState4[0],\n      setOpenPopup = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    message: "",\n    type: ""\n  }),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState5, 2),\n      notify = _useState6[0],\n      setNotify = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isOpen: false,\n    title: "",\n    subTitle: ""\n  }),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState7, 2),\n      confirmDialog = _useState8[0],\n      setConfirmDialog = _useState8[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(function (state) {\n    return state.getListSyllabus;\n  }),\n      listSyllabus = _useSelector.listSyllabus,\n      loading = _useSelector.loading,\n      listSyllabusError = _useSelector.error;\n\n  if (listSyllabusError) {\n    setNotify({\n      isOpen: true,\n      message: listSyllabusError,\n      type: "error"\n    });\n    dispatch({\n      type: _syllabusPg_SyllabusConstants__WEBPACK_IMPORTED_MODULE_10__/* .GET_LIST_SYLLABUS_RESET */ .ZT\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (listSyllabus) {\n      setUrl("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__/* .API_URL */ .T5).concat(listSyllabus.FullPath));\n    }\n  }, [listSyllabus]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch((0,_syllabusPg_SyllabusActions__WEBPACK_IMPORTED_MODULE_8__/* .getListSyllabusAction */ .I)(7));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    dispatch({\n      type: "GET_LINK",\n      payload: "/syllabus"\n    });\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CustomContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoadingComp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, listSyllabus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {\n    src: url,\n    width: "100%",\n    height: "700"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Notification__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {\n    notify: notify,\n    setNotify: setNotify\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {\n    confirmDialog: confirmDialog,\n    setConfirmDialog: setConfirmDialog\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyllabusThree);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsaUVBQWViLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkZW50LW1pcy1tb2JpbGUtYXBwLy4vc3JjL3RlYWNoZXIvc3lsbGFidXMvc3lsbGFidXNUaHJlZS9TeWxsYWJ1c1RocmVlLmpzPzYyODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25cIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgTG9hZGluZ0NvbXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0NvbXBcIjtcbmltcG9ydCBDdXN0b21Db250YWluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBCdXR0b24sIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuaW1wb3J0IHtcbiAgR0VUX0FMTF9TWUxMQUJVU19SRVNFVCxcbiAgR0VUX0xJU1RfU1lMTEFCVVNfUkVTRVQsXG59IGZyb20gXCIuLi9zeWxsYWJ1c1BnL1N5bGxhYnVzQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRMaXN0U3lsbGFidXNBY3Rpb24gfSBmcm9tIFwiLi4vc3lsbGFidXNQZy9TeWxsYWJ1c0FjdGlvbnNcIjtcblxuY29uc3QgU3lsbGFidXNUaHJlZSA9ICgpID0+IHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3BlblBvcHVwLCBzZXRPcGVuUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtub3RpZnksIHNldE5vdGlmeV0gPSB1c2VTdGF0ZSh7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlwiLFxuICAgIHR5cGU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbY29uZmlybURpYWxvZywgc2V0Q29uZmlybURpYWxvZ10gPSB1c2VTdGF0ZSh7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICB0aXRsZTogXCJcIixcbiAgICBzdWJUaXRsZTogXCJcIixcbiAgfSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuIFxuICBjb25zdCB7IGxpc3RTeWxsYWJ1cyxsb2FkaW5nLCBlcnJvcjogbGlzdFN5bGxhYnVzRXJyb3IgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2V0TGlzdFN5bGxhYnVzXG4gICk7XG5cblxuICBpZiAobGlzdFN5bGxhYnVzRXJyb3IpIHtcbiAgICBzZXROb3RpZnkoe1xuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgbWVzc2FnZTogbGlzdFN5bGxhYnVzRXJyb3IsXG4gICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfTElTVF9TWUxMQUJVU19SRVNFVCB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpc3RTeWxsYWJ1cykge1xuICAgICAgc2V0VXJsKGAke0FQSV9VUkx9JHtsaXN0U3lsbGFidXMuRnVsbFBhdGh9YCk7XG4gICAgfVxuICB9LCBbbGlzdFN5bGxhYnVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRMaXN0U3lsbGFidXNBY3Rpb24oNykpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiR0VUX0xJTktcIiwgcGF5bG9hZDogXCIvc3lsbGFidXNcIiB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbUNvbnRhaW5lcj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkaW5nQ29tcCAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgIHtsaXN0U3lsbGFidXMgJiYgPGlmcmFtZSBzcmM9e3VybH0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNzAwXCIgLz59XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9DdXN0b21Db250YWluZXI+XG4gICAgICA8Tm90aWZpY2F0aW9uIG5vdGlmeT17bm90aWZ5fSBzZXROb3RpZnk9e3NldE5vdGlmeX0gLz5cbiAgICAgIDxDb25maXJtRGlhbG9nXG4gICAgICAgIGNvbmZpcm1EaWFsb2c9e2NvbmZpcm1EaWFsb2d9XG4gICAgICAgIHNldENvbmZpcm1EaWFsb2c9e3NldENvbmZpcm1EaWFsb2d9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsbGFidXNUaHJlZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNvbmZpcm1EaWFsb2ciLCJOb3RpZmljYXRpb24iLCJBUElfVVJMIiwiTG9hZGluZ0NvbXAiLCJDdXN0b21Db250YWluZXIiLCJCdXR0b24iLCJUb29sYmFyIiwiQWRkSWNvbiIsIlBvcHVwIiwiR0VUX0FMTF9TWUxMQUJVU19SRVNFVCIsIkdFVF9MSVNUX1NZTExBQlVTX1JFU0VUIiwiZ2V0TGlzdFN5bGxhYnVzQWN0aW9uIiwiU3lsbGFidXNUaHJlZSIsInVybCIsInNldFVybCIsIm9wZW5Qb3B1cCIsInNldE9wZW5Qb3B1cCIsImlzT3BlbiIsIm1lc3NhZ2UiLCJ0eXBlIiwibm90aWZ5Iiwic2V0Tm90aWZ5IiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbmZpcm1EaWFsb2ciLCJzZXRDb25maXJtRGlhbG9nIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImdldExpc3RTeWxsYWJ1cyIsImxpc3RTeWxsYWJ1cyIsImxvYWRpbmciLCJsaXN0U3lsbGFidXNFcnJvciIsImVycm9yIiwiRnVsbFBhdGgiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///74610\n')}}]);