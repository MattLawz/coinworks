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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Drawer, {
          isOpen: isOpen,
          placement: "right",
          onClose: onClose,
          finalFocusRef: btnRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerOverlay, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerContent, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerCloseButton, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerHeader, {
                children: "Create your account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
                  placeholder: "Type here..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerFooter, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                  variant: "outline",
                  mr: 3,
                  onClick: onClose,
                  children: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                  colorScheme: "blue",
                  children: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 15
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
            lineNumber: 117,
            columnNumber: 25
          }, _this), "\u2009\u2009\u2009\u2009\u2009", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwibmF2SG92ZXJCZyIsIlN0aWNreU5hdiIsInN0eWxlZCIsIkZsZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc09wZW4iLCJvbkNsb3NlIiwiYnRuUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjs7QUFBQSxzQkFDMUJDLDhEQUFZLEVBRGM7QUFBQSxNQUN4Q0MsU0FEd0MsaUJBQ3hDQSxTQUR3Qzs7QUFHaEQsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFNBQUssRUFBRSxPQURLO0FBRVpDLFFBQUksRUFBRTtBQUZNLEdBQWhCO0FBS0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1ZGLFNBQUssRUFBRSxPQURHO0FBRVZDLFFBQUksRUFBRTtBQUZJLEdBQWQ7QUFLQSxNQUFNRSxVQUFVLEdBQUc7QUFDZkgsU0FBSyxFQUFFLFVBRFE7QUFFZkMsUUFBSSxFQUFFO0FBRlMsR0FBbkI7QUFLQSxNQUFNRyxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLGtEQUFELENBQVQsbUJBQWY7QUFRQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLFNBQUQ7QUFDSSxtQkFBYSxFQUFDLEtBRGxCO0FBRUksb0JBQWMsRUFBQyxlQUZuQjtBQUdJLGdCQUFVLEVBQUMsUUFIZjtBQUlJLGNBQVEsRUFBQyxPQUpiO0FBS0ksY0FBUSxFQUFDLE9BTGI7QUFNSSxXQUFLLEVBQUMsTUFOVjtBQU9JLFFBQUUsRUFBRVAsT0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUE2RUk7QUFBQSwrQkFDSTtBQUFBLGtDQUNJLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosaURBR0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBc0ZJLDhEQUFDLGtEQUFEO0FBQ0ksUUFBRSxFQUFDLE1BRFA7QUFFSSxvQkFBYyxFQUFDLFFBRm5CO0FBR0ksbUJBQWEsRUFBQyxRQUhsQjtBQUlJLFFBQUUsRUFBRVYsT0FBTyxDQUFDRCxTQUFELENBSmY7QUFLSSxXQUFLLEVBQUVJLEtBQUssQ0FBQ0osU0FBRCxDQUxoQjtBQU1JLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5SO0FBT0ksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFI7QUFBQSxnQkFTS0Y7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEZKO0FBQUEsa0JBREo7QUFvR0gsQ0E5SEQ7O0dBQU1ELFM7VUFDb0JFLDBEOzs7S0FEcEJGLFM7QUFnSU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnRjL1twaWRdLjFlYTc1MDY4NDljMWZjZmM2YTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSwgQnV0dG9uLCBGbGV4LCBCb3gsIERyYXdlciwgRHJhd2VyQm9keSwgRHJhd2VyRm9vdGVyLCBEcmF3ZXJIZWFkZXIsIERyYXdlck92ZXJsYXksIERyYXdlckNvbnRlbnQsIERyYXdlckNsb3NlQnV0dG9uLCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCBEYXJrTW9kZVN3aXRjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaFwiO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9HaXRIdWJJY29uXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiBDb250YWluZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICAgIGNvbnN0IGJnQ29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwid2hpdGVcIixcclxuICAgICAgICBkYXJrOiBcIiMxQTIwMkNcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiYmxhY2tcIixcclxuICAgICAgICBkYXJrOiBcIndoaXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkhvdmVyQmcgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiZ3JheS42MDBcIixcclxuICAgICAgICBkYXJrOiBcImdyYXkuMzAwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFN0aWNreU5hdiA9IHN0eWxlZChGbGV4KWBcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIGxpbmUtaGVpZ2h0IDAuNXM7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0aWNreU5hdlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjgwMHB4XCJcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzU2cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICBweD17WzIsIDYsIDZdfVxyXG4gICAgICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgICAgICBtdD17OH1cclxuICAgICAgICAgICAgICAgIG1iPXtbMCwgMCwgOF19XHJcbiAgICAgICAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy85dmNMQUV6MjJlOHY2NFM1WTJDazMvNzhzUlVVNzFFaUNaNE5Ib2xKWXFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy9CeUIwU0lUb2NhRXBLWjFZNlF6VGYvSkxaZm5MeldJVHRwM3RxUlhFT2FLXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGZpbmFsRm9jdXNSZWY9e2J0blJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIDxEcmF3ZXJPdmVybGF5PlxyXG4gICAgICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8RHJhd2VySGVhZGVyPkNyZWF0ZSB5b3VyIGFjY291bnQ8L0RyYXdlckhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxEcmF3ZXJCb2R5PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZS4uLlwiIC8+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyQm9keT5cclxuXHJcbiAgICAgICAgICAgIDxEcmF3ZXJGb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCI+U2F2ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0RyYXdlckZvb3Rlcj5cclxuICAgICAgICAgIDwvRHJhd2VyQ29udGVudD5cclxuICAgICAgICA8L0RyYXdlck92ZXJsYXk+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFya01vZGVTd2l0Y2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCJ4oCJ4oCJ4oCJ4oCJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRIdWJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RpY2t5TmF2PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgYXM9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxyXG4gICAgICAgICAgICAgICAgcHg9e1swLCA0LCA0XX1cclxuICAgICAgICAgICAgICAgIG10PXtbNCwgOCwgOF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==