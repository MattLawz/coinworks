self["webpackHotUpdate_N_E"]("pages/btc/[pid]",{

/***/ "./components/Container.tsx":
/*!**********************************!*\
  !*** ./components/Container.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_matth_donate_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DarkModeSwitch */ "./components/DarkModeSwitch.tsx");
/* harmony import */ var _components_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GitHubIcon */ "./components/GitHubIcon.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\matth\\donate\\components\\Container.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_matth_donate_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n        position: sticky;\n        z-index: 10;\n        top: 0;\n        backdrop-filter: saturate(180%) blur(20px);\n        transition: height 0.5s, line-height 0.5s;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = function Container(_ref) {
  _s();

  var children = _ref.children;

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorMode)(),
      colorMode = _useColorMode.colorMode;

  var bgColor = {
    light: "white",
    dark: "#1A202C"
  };
  var color = {
    light: "black",
    dark: "white"
  };
  var navHoverBg = {
    light: "gray.600",
    dark: "gray.300"
  };
  var StickyNav = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex)(_templateObject());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StickyNav, {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "800px",
      minWidth: "356px",
      width: "100%",
      bg: bgColor[colorMode],
      as: "nav",
      px: [2, 6, 6],
      py: 2,
      mt: 8,
      mb: [0, 0, 8],
      mx: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
            as: "a",
            variant: "ghost",
            p: [1, 2, 4],
            _hover: {
              backgroundColor: navHoverBg[colorMode]
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "https://app.archbee.io/doc/9vcLAEz22e8v64S5Y2Ck3/78sRUU71EiCZ4NHolJYqN",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
            as: "a",
            variant: "ghost",
            p: [1, 2, 4],
            _hover: {
              backgroundColor: navHoverBg[colorMode]
            },
            children: "Documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "https://app.archbee.io/doc/ByB0SITocaEpKZ1Y6QzTf/JLZfnLzWITtp3tqRXEOaK",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
            as: "a",
            variant: "ghost",
            p: [1, 2, 4],
            _hover: {
              backgroundColor: navHoverBg[colorMode]
            },
            children: "Why Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this), "\u2009\u2009\u2009\u2009\u2009", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
      as: "main",
      justifyContent: "center",
      flexDirection: "column",
      bg: bgColor[colorMode],
      color: color[colorMode],
      px: [0, 4, 4],
      mt: [4, 8, 8],
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Container, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorMode];
});

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);

var _c;

$RefreshReg$(_c, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwibmF2SG92ZXJCZyIsIlN0aWNreU5hdiIsInN0eWxlZCIsIkZsZXgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCOztBQUFBLHNCQUMxQkMsOERBQVksRUFEYztBQUFBLE1BQ3hDQyxTQUR3QyxpQkFDeENBLFNBRHdDOztBQUdoRCxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsU0FBSyxFQUFFLE9BREs7QUFFWkMsUUFBSSxFQUFFO0FBRk0sR0FBaEI7QUFLQSxNQUFNQyxLQUFLLEdBQUc7QUFDVkYsU0FBSyxFQUFFLE9BREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FBZDtBQUtBLE1BQU1FLFVBQVUsR0FBRztBQUNmSCxTQUFLLEVBQUUsVUFEUTtBQUVmQyxRQUFJLEVBQUU7QUFGUyxHQUFuQjtBQUtBLE1BQU1HLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0Msa0RBQUQsQ0FBVCxtQkFBZjtBQVFBLHNCQUVJO0FBQUEsNEJBQ0ksOERBQUMsU0FBRDtBQUNJLG1CQUFhLEVBQUMsS0FEbEI7QUFFSSxvQkFBYyxFQUFDLGVBRm5CO0FBR0ksZ0JBQVUsRUFBQyxRQUhmO0FBSUksY0FBUSxFQUFDLE9BSmI7QUFLSSxjQUFRLEVBQUMsT0FMYjtBQU1JLFdBQUssRUFBQyxNQU5WO0FBT0ksUUFBRSxFQUFFUCxPQUFPLENBQUNELFNBQUQsQ0FQZjtBQVFJLFFBQUUsRUFBQyxLQVJQO0FBU0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBVFI7QUFVSSxRQUFFLEVBQUUsQ0FWUjtBQVdJLFFBQUUsRUFBRSxDQVhSO0FBWUksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBWlI7QUFhSSxRQUFFLEVBQUMsTUFiUDtBQUFBLDhCQWVJLDhEQUFDLGlEQUFEO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFlLGtCQUFRLE1BQXZCO0FBQUEsaUNBQ0ksOERBQUMsb0RBQUQ7QUFDSSxjQUFFLEVBQUMsR0FEUDtBQUVJLG1CQUFPLEVBQUMsT0FGWjtBQUdJLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhQO0FBSUksa0JBQU0sRUFBRTtBQUFFUyw2QkFBZSxFQUFFSixVQUFVLENBQUNMLFNBQUQ7QUFBN0IsYUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSSw4REFBQyxrREFBRDtBQUNJLGNBQUksRUFBQyx3RUFEVDtBQUVJLGtCQUFRLE1BRlo7QUFBQSxpQ0FJSSw4REFBQyxvREFBRDtBQUNJLGNBQUUsRUFBQyxHQURQO0FBRUksbUJBQU8sRUFBQyxPQUZaO0FBR0ksYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFA7QUFJSSxrQkFBTSxFQUFFO0FBQUVTLDZCQUFlLEVBQUVKLFVBQVUsQ0FBQ0wsU0FBRDtBQUE3QixhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQXdCSSw4REFBQyxrREFBRDtBQUNJLGNBQUksRUFBQyx3RUFEVDtBQUVJLGtCQUFRLE1BRlo7QUFBQSxpQ0FJSSw4REFBQyxvREFBRDtBQUNJLGNBQUUsRUFBQyxHQURQO0FBRUksbUJBQU8sRUFBQyxPQUZaO0FBR0ksYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFA7QUFJSSxrQkFBTSxFQUFFO0FBQUVTLDZCQUFlLEVBQUVKLFVBQVUsQ0FBQ0wsU0FBRDtBQUE3QixhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUFxREk7QUFBQSwrQkFDSTtBQUFBLGtDQUNJLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosaURBR0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBOERJLDhEQUFDLGtEQUFEO0FBQ0ksUUFBRSxFQUFDLE1BRFA7QUFFSSxvQkFBYyxFQUFDLFFBRm5CO0FBR0ksbUJBQWEsRUFBQyxRQUhsQjtBQUlJLFFBQUUsRUFBRUMsT0FBTyxDQUFDRCxTQUFELENBSmY7QUFLSSxXQUFLLEVBQUVJLEtBQUssQ0FBQ0osU0FBRCxDQUxoQjtBQU1JLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5SO0FBT0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFI7QUFBQSxnQkFTS0Y7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOURKO0FBQUEsa0JBRko7QUE2RUgsQ0F2R0Q7O0dBQU1ELFM7VUFDb0JFLDBEOzs7S0FEcEJGLFM7QUF5R04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnRjL1twaWRdLmEyYTg3NzNlNzEzODA2ZmM5ZDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSwgQnV0dG9uLCBGbGV4LCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5pbXBvcnQgRGFya01vZGVTd2l0Y2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2hcIjtcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2l0SHViSWNvblwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogQ29udGFpbmVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcbiAgICBjb25zdCBiZ0NvbG9yID0ge1xyXG4gICAgICAgIGxpZ2h0OiBcIndoaXRlXCIsXHJcbiAgICAgICAgZGFyazogXCIjMUEyMDJDXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbG9yID0ge1xyXG4gICAgICAgIGxpZ2h0OiBcImJsYWNrXCIsXHJcbiAgICAgICAgZGFyazogXCJ3aGl0ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZIb3ZlckJnID0ge1xyXG4gICAgICAgIGxpZ2h0OiBcImdyYXkuNjAwXCIsXHJcbiAgICAgICAgZGFyazogXCJncmF5LjMwMFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBTdGlja3lOYXYgPSBzdHlsZWQoRmxleClgXHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzLCBsaW5lLWhlaWdodCAwLjVzO1xyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdGlja3lOYXZcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI4MDBweFwiXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aD1cIjM1NnB4XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxyXG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgICAgICAgcHg9e1syLCA2LCA2XX1cclxuICAgICAgICAgICAgICAgIHB5PXsyfVxyXG4gICAgICAgICAgICAgICAgbXQ9ezh9XHJcbiAgICAgICAgICAgICAgICBtYj17WzAsIDAsIDhdfVxyXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA9e1sxLCAyLCA0XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IG5hdkhvdmVyQmdbY29sb3JNb2RlXSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHAuYXJjaGJlZS5pby9kb2MvOXZjTEFFejIyZTh2NjRTNVkyQ2szLzc4c1JVVTcxRWlDWjROSG9sSllxTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA9e1sxLCAyLCA0XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IG5hdkhvdmVyQmdbY29sb3JNb2RlXSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHAuYXJjaGJlZS5pby9kb2MvQnlCMFNJVG9jYUVwS1oxWTZRelRmL0pMWmZuTHpXSVR0cDN0cVJYRU9hS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA9e1sxLCAyLCA0XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IG5hdkhvdmVyQmdbY29sb3JNb2RlXSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaHkgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFya01vZGVTd2l0Y2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCJ4oCJ4oCJ4oCJ4oCJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRIdWJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RpY2t5TmF2PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgYXM9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxyXG4gICAgICAgICAgICAgICAgcHg9e1swLCA0LCA0XX1cclxuICAgICAgICAgICAgICAgIG10PXtbNCwgOCwgOF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==