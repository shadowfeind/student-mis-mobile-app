"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[5905],{90213:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)\n/* harmony export */ });\n/* harmony import */ var _helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17504);\n/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45213);\n/* harmony import */ var _index_41bf41f2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23876);\n/* harmony import */ var _gesture_controller_68c023a4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4988);\n/*!\n * (C) Ionic http://ionicframework.com - MIT License\n */\nvar createSwipeBackGesture=function(r,e,t,a,n){var i=r.ownerDocument.defaultView;var o=(0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_2__.i)(r);var v=function(r){var e=50;var t=r.startX;if(o){return t>=i.innerWidth-e}return t<=e};var c=function(r){return o?-r.deltaX:r.deltaX};var u=function(r){return o?-r.velocityX:r.velocityX};var s=function(r){return v(r)&&e()};var f=function(r){var e=c(r);var t=e/i.innerWidth;a(t)};var l=function(r){var e=c(r);var t=i.innerWidth;var a=e/t;var o=u(r);var v=t/2;var s=o>=0&&(o>.2||e>v);var f=s?1-a:a;var l=f*t;var m=0;if(l>5){var p=l/Math.abs(o);m=Math.min(p,540)}n(s,a<=0?.01:(0,_helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_3__.k)(0,a,.9999),m)};return (0,_index_41bf41f2_js__WEBPACK_IMPORTED_MODULE_0__.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s,onStart:t,onMove:f,onEnd:l})};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAyMTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZ0wsK0NBQStDLGtDQUFrQyxNQUFNLG1EQUFLLElBQUksa0JBQWtCLFNBQVMsZUFBZSxNQUFNLHlCQUF5QixhQUFhLGtCQUFrQiw2QkFBNkIsa0JBQWtCLG1DQUFtQyxrQkFBa0Isa0JBQWtCLGtCQUFrQixXQUFXLHFCQUFxQixNQUFNLGtCQUFrQixXQUFXLG1CQUFtQixVQUFVLFdBQVcsVUFBVSx3QkFBd0IsY0FBYyxVQUFVLFFBQVEsUUFBUSxvQkFBb0Isa0JBQWtCLGFBQWEsdURBQUssZ0JBQWdCLE9BQU8saUVBQWEsRUFBRSxzR0FBc0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkZW50LW1pcy1tb2JpbGUtYXBwLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS9zd2lwZS1iYWNrLWY2NWM1Njg2LmpzPzY3OTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydHtrIGFzIGNsYW1wfWZyb21cIi4vaGVscGVycy02ZTFlNWI2NS5qc1wiO2ltcG9ydHtpIGFzIGlzUlRMfWZyb21cIi4vZGlyLWU4Yjc2N2E4LmpzXCI7aW1wb3J0e2NyZWF0ZUdlc3R1cmV9ZnJvbVwiLi9pbmRleC00MWJmNDFmMi5qc1wiO2ltcG9ydFwiLi9nZXN0dXJlLWNvbnRyb2xsZXItNjhjMDIzYTQuanNcIjt2YXIgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZT1mdW5jdGlvbihyLGUsdCxhLG4pe3ZhciBpPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldzt2YXIgbz1pc1JUTChyKTt2YXIgdj1mdW5jdGlvbihyKXt2YXIgZT01MDt2YXIgdD1yLnN0YXJ0WDtpZihvKXtyZXR1cm4gdD49aS5pbm5lcldpZHRoLWV9cmV0dXJuIHQ8PWV9O3ZhciBjPWZ1bmN0aW9uKHIpe3JldHVybiBvPy1yLmRlbHRhWDpyLmRlbHRhWH07dmFyIHU9ZnVuY3Rpb24ocil7cmV0dXJuIG8/LXIudmVsb2NpdHlYOnIudmVsb2NpdHlYfTt2YXIgcz1mdW5jdGlvbihyKXtyZXR1cm4gdihyKSYmZSgpfTt2YXIgZj1mdW5jdGlvbihyKXt2YXIgZT1jKHIpO3ZhciB0PWUvaS5pbm5lcldpZHRoO2EodCl9O3ZhciBsPWZ1bmN0aW9uKHIpe3ZhciBlPWMocik7dmFyIHQ9aS5pbm5lcldpZHRoO3ZhciBhPWUvdDt2YXIgbz11KHIpO3ZhciB2PXQvMjt2YXIgcz1vPj0wJiYobz4uMnx8ZT52KTt2YXIgZj1zPzEtYTphO3ZhciBsPWYqdDt2YXIgbT0wO2lmKGw+NSl7dmFyIHA9bC9NYXRoLmFicyhvKTttPU1hdGgubWluKHAsNTQwKX1uKHMsYTw9MD8uMDE6Y2xhbXAoMCxhLC45OTk5KSxtKX07cmV0dXJuIGNyZWF0ZUdlc3R1cmUoe2VsOnIsZ2VzdHVyZU5hbWU6XCJnb2JhY2stc3dpcGVcIixnZXN0dXJlUHJpb3JpdHk6NDAsdGhyZXNob2xkOjEwLGNhblN0YXJ0OnMsb25TdGFydDp0LG9uTW92ZTpmLG9uRW5kOmx9KX07ZXhwb3J0e2NyZWF0ZVN3aXBlQmFja0dlc3R1cmV9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///90213\n')}}]);