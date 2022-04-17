"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[4753],{74753:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mdTransitionAnimation\": () => (/* binding */ mdTransitionAnimation)\n/* harmony export */ });\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35980);\n/* harmony import */ var _index4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55026);\n/*!\n * (C) Ionic http://ionicframework.com - MIT License\n */\n\n\n\nconst mdTransitionAnimation = (_, opts) => {\n  const OFF_BOTTOM = '40px';\n  const CENTER = '0px';\n  const backDirection = opts.direction === 'back';\n  const enteringEl = opts.enteringEl;\n  const leavingEl = opts.leavingEl;\n  const ionPageElement = (0,_index4_js__WEBPACK_IMPORTED_MODULE_0__.g)(enteringEl);\n  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');\n  const rootTransition = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();\n  rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible');\n  // animate the component itself\n  if (backDirection) {\n    rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');\n  }\n  else {\n    rootTransition\n      .duration(opts.duration || 280)\n      .easing('cubic-bezier(0.36,0.66,0.04,1)')\n      .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)\n      .fromTo('opacity', 0.01, 1);\n  }\n  // Animate toolbar if it's there\n  if (enteringToolbarEle) {\n    const enteringToolBar = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();\n    enteringToolBar.addElement(enteringToolbarEle);\n    rootTransition.addAnimation(enteringToolBar);\n  }\n  // setup leaving view\n  if (leavingEl && backDirection) {\n    // leaving content\n    rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');\n    const leavingPage = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();\n    leavingPage\n      .addElement((0,_index4_js__WEBPACK_IMPORTED_MODULE_0__.g)(leavingEl))\n      .onFinish((currentStep) => {\n      if (currentStep === 1 && leavingPage.elements.length > 0) {\n        leavingPage.elements[0].style.setProperty('display', 'none');\n      }\n    })\n      .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)\n      .fromTo('opacity', 1, 0);\n    rootTransition.addAnimation(leavingPage);\n  }\n  return rootTransition;\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ3NTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ3NEO0FBQ0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBaUI7QUFDMUM7QUFDQSx5QkFBeUIsZ0RBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFdBQVcsa0JBQWtCLE9BQU87QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWU7QUFDdkM7QUFDQSxrQkFBa0IsNkNBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHlDQUF5QyxPQUFPLGtCQUFrQixXQUFXO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1taXMtbW9iaWxlLWFwcC8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL21kLnRyYW5zaXRpb24uanM/ZDBjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleDQuanMnO1xuXG5jb25zdCBtZFRyYW5zaXRpb25BbmltYXRpb24gPSAoXywgb3B0cykgPT4ge1xuICBjb25zdCBPRkZfQk9UVE9NID0gJzQwcHgnO1xuICBjb25zdCBDRU5URVIgPSAnMHB4JztcbiAgY29uc3QgYmFja0RpcmVjdGlvbiA9IG9wdHMuZGlyZWN0aW9uID09PSAnYmFjayc7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5maWxsKCdib3RoJykuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICAvLyBhbmltYXRlIHRoZSBjb21wb25lbnQgaXRzZWxmXG4gIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgfVxuICBlbHNlIHtcbiAgICByb290VHJhbnNpdGlvblxuICAgICAgLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjgwKVxuICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJylcbiAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7T0ZGX0JPVFRPTX0pYCwgYHRyYW5zbGF0ZVkoJHtDRU5URVJ9KWApXG4gICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gIH1cbiAgLy8gQW5pbWF0ZSB0b29sYmFyIGlmIGl0J3MgdGhlcmVcbiAgaWYgKGVudGVyaW5nVG9vbGJhckVsZSkge1xuICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGVudGVyaW5nVG9vbEJhci5hZGRFbGVtZW50KGVudGVyaW5nVG9vbGJhckVsZSk7XG4gICAgcm9vdFRyYW5zaXRpb24uYWRkQW5pbWF0aW9uKGVudGVyaW5nVG9vbEJhcik7XG4gIH1cbiAgLy8gc2V0dXAgbGVhdmluZyB2aWV3XG4gIGlmIChsZWF2aW5nRWwgJiYgYmFja0RpcmVjdGlvbikge1xuICAgIC8vIGxlYXZpbmcgY29udGVudFxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gICAgY29uc3QgbGVhdmluZ1BhZ2UgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBsZWF2aW5nUGFnZVxuICAgICAgLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSlcbiAgICAgIC5vbkZpbmlzaCgoY3VycmVudFN0ZXApID0+IHtcbiAgICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSAmJiBsZWF2aW5nUGFnZS5lbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxlYXZpbmdQYWdlLmVsZW1lbnRzWzBdLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtDRU5URVJ9KWAsIGB0cmFuc2xhdGVZKCR7T0ZGX0JPVFRPTX0pYClcbiAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGRBbmltYXRpb24obGVhdmluZ1BhZ2UpO1xuICB9XG4gIHJldHVybiByb290VHJhbnNpdGlvbjtcbn07XG5cbmV4cG9ydCB7IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///74753\n")}}]);