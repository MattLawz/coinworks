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
            lineNumber: 55,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
            lineNumber: 68,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
            lineNumber: 81,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this), "\u2009\u2009\u2009\u2009\u2009", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwibmF2SG92ZXJCZyIsIlN0aWNreU5hdiIsInN0eWxlZCIsIkZsZXgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCOztBQUFBLHNCQUMxQkMsOERBQVksRUFEYztBQUFBLE1BQ3hDQyxTQUR3QyxpQkFDeENBLFNBRHdDOztBQUdoRCxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsU0FBSyxFQUFFLE9BREs7QUFFWkMsUUFBSSxFQUFFO0FBRk0sR0FBaEI7QUFLQSxNQUFNQyxLQUFLLEdBQUc7QUFDVkYsU0FBSyxFQUFFLE9BREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FBZDtBQUtBLE1BQU1FLFVBQVUsR0FBRztBQUNmSCxTQUFLLEVBQUUsVUFEUTtBQUVmQyxRQUFJLEVBQUU7QUFGUyxHQUFuQjtBQUtBLE1BQU1HLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0Msa0RBQUQsQ0FBVCxtQkFBZjtBQVFBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsU0FBRDtBQUNJLG1CQUFhLEVBQUMsS0FEbEI7QUFFSSxvQkFBYyxFQUFDLGVBRm5CO0FBR0ksZ0JBQVUsRUFBQyxRQUhmO0FBSUksY0FBUSxFQUFDLE9BSmI7QUFLSSxjQUFRLEVBQUMsT0FMYjtBQU1JLFdBQUssRUFBQyxNQU5WO0FBT0ksUUFBRSxFQUFFUCxPQUFPLENBQUNELFNBQUQsQ0FQZjtBQVFJLFFBQUUsRUFBQyxLQVJQO0FBU0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBVFI7QUFVSSxRQUFFLEVBQUUsQ0FWUjtBQVdJLFFBQUUsRUFBRSxDQVhSO0FBWUksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBWlI7QUFhSSxRQUFFLEVBQUMsTUFiUDtBQUFBLDhCQWVJLDhEQUFDLGlEQUFEO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFlLGtCQUFRLE1BQXZCO0FBQUEsaUNBQ0ksOERBQUMsb0RBQUQ7QUFDSSxjQUFFLEVBQUMsR0FEUDtBQUVJLG1CQUFPLEVBQUMsT0FGWjtBQUdJLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhQO0FBSUksa0JBQU0sRUFBRTtBQUFFUyw2QkFBZSxFQUFFSixVQUFVLENBQUNMLFNBQUQ7QUFBN0IsYUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSSw4REFBQyxrREFBRDtBQUNJLGNBQUksRUFBQyx3RUFEVDtBQUVJLGtCQUFRLE1BRlo7QUFBQSxpQ0FJSSw4REFBQyxvREFBRDtBQUNJLGNBQUUsRUFBQyxHQURQO0FBRUksbUJBQU8sRUFBQyxPQUZaO0FBR0ksYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFA7QUFJSSxrQkFBTSxFQUFFO0FBQUVTLDZCQUFlLEVBQUVKLFVBQVUsQ0FBQ0wsU0FBRDtBQUE3QixhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQXdCSSw4REFBQyxrREFBRDtBQUNJLGNBQUksRUFBQyx3RUFEVDtBQUVJLGtCQUFRLE1BRlo7QUFBQSxpQ0FJSSw4REFBQyxvREFBRDtBQUNJLGNBQUUsRUFBQyxHQURQO0FBRUksbUJBQU8sRUFBQyxPQUZaO0FBR0ksYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFA7QUFJSSxrQkFBTSxFQUFFO0FBQUVTLDZCQUFlLEVBQUVKLFVBQVUsQ0FBQ0wsU0FBRDtBQUE3QixhQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUFxREk7QUFBQSwrQkFDSTtBQUFBLGtDQUNJLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosaURBR0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBOERJLDhEQUFDLGtEQUFEO0FBQ0ksUUFBRSxFQUFDLE1BRFA7QUFFSSxvQkFBYyxFQUFDLFFBRm5CO0FBR0ksbUJBQWEsRUFBQyxRQUhsQjtBQUlJLFFBQUUsRUFBRUMsT0FBTyxDQUFDRCxTQUFELENBSmY7QUFLSSxXQUFLLEVBQUVJLEtBQUssQ0FBQ0osU0FBRCxDQUxoQjtBQU1JLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5SO0FBT0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFI7QUFBQSxnQkFTS0Y7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOURKO0FBQUEsa0JBREo7QUE0RUgsQ0F0R0Q7O0dBQU1ELFM7VUFDb0JFLDBEOzs7S0FEcEJGLFM7QUF3R04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnRjL1twaWRdLjc5OTEwOTg5ZTRhZTBkNjlhNjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSwgQnV0dG9uLCBGbGV4LCBCb3gsIERyYXdlciwgRHJhd2VyQm9keSwgRHJhd2VyRm9vdGVyLCBEcmF3ZXJIZWFkZXIsIERyYXdlck92ZXJsYXksIERyYXdlckNvbnRlbnQsIERyYXdlckNsb3NlQnV0dG9uLCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCBEYXJrTW9kZVN3aXRjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaFwiO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9HaXRIdWJJY29uXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiBDb250YWluZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICAgIGNvbnN0IGJnQ29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwid2hpdGVcIixcclxuICAgICAgICBkYXJrOiBcIiMxQTIwMkNcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiYmxhY2tcIixcclxuICAgICAgICBkYXJrOiBcIndoaXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkhvdmVyQmcgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiZ3JheS42MDBcIixcclxuICAgICAgICBkYXJrOiBcImdyYXkuMzAwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFN0aWNreU5hdiA9IHN0eWxlZChGbGV4KWBcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIGxpbmUtaGVpZ2h0IDAuNXM7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0aWNreU5hdlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjgwMHB4XCJcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzU2cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICBweD17WzIsIDYsIDZdfVxyXG4gICAgICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgICAgICBtdD17OH1cclxuICAgICAgICAgICAgICAgIG1iPXtbMCwgMCwgOF19XHJcbiAgICAgICAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy85dmNMQUV6MjJlOHY2NFM1WTJDazMvNzhzUlVVNzFFaUNaNE5Ib2xKWXFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy9CeUIwU0lUb2NhRXBLWjFZNlF6VGYvSkxaZm5MeldJVHRwM3RxUlhFT2FLXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDigInigInigInigInigIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdpdEh1Ykljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdGlja3lOYXY+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICBhcz1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBweD17WzAsIDQsIDRdfVxyXG4gICAgICAgICAgICAgICAgbXQ9e1s0LCA4LCA4XX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9