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

  var _useDisclosure = useDisclosure(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var btnRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();
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
            lineNumber: 58,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
            lineNumber: 71,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
          ref: btnRef,
          colorScheme: "teal",
          onClick: onOpen,
          children: "Open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
                lineNumber: 104,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerHeader, {
                children: "Create your account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
                  placeholder: "Type here..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.DrawerFooter, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                  variant: "outline",
                  mr: 3,
                  onClick: onClose,
                  children: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                  colorScheme: "blue",
                  children: "Save"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 15
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this), "\u2009\u2009\u2009\u2009\u2009", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GitHubIcon__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 129,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Container, "D3rZD25mXupZ0LBS3rFn8utImPQ=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNoaWxkcmVuIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJidG5SZWYiLCJSZWFjdCIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciIsIm5hdkhvdmVyQmciLCJTdGlja3lOYXYiLCJzdHlsZWQiLCJGbGV4IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjs7QUFBQSxzQkFDMUJDLDhEQUFZLEVBRGM7QUFBQSxNQUN4Q0MsU0FEd0MsaUJBQ3hDQSxTQUR3Qzs7QUFBQSx1QkFFWkMsYUFBYSxFQUZEO0FBQUEsTUFFeENDLE1BRndDLGtCQUV4Q0EsTUFGd0M7QUFBQSxNQUVoQ0MsTUFGZ0Msa0JBRWhDQSxNQUZnQztBQUFBLE1BRXhCQyxPQUZ3QixrQkFFeEJBLE9BRndCOztBQUdoRCxNQUFNQyxNQUFNLEdBQUdDLG1EQUFBLEVBQWY7QUFFQSxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsU0FBSyxFQUFFLE9BREs7QUFFWkMsUUFBSSxFQUFFO0FBRk0sR0FBaEI7QUFLQSxNQUFNQyxLQUFLLEdBQUc7QUFDVkYsU0FBSyxFQUFFLE9BREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FBZDtBQUtBLE1BQU1FLFVBQVUsR0FBRztBQUNmSCxTQUFLLEVBQUUsVUFEUTtBQUVmQyxRQUFJLEVBQUU7QUFGUyxHQUFuQjtBQUtBLE1BQU1HLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0Msa0RBQUQsQ0FB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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idGMvW3BpZF0uNjFiMGMyMmFlNGIxMjNmYzQ1NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBCdXR0b24sIEZsZXgsIEJveCwgRHJhd2VyLCBEcmF3ZXJCb2R5LCBEcmF3ZXJGb290ZXIsIERyYXdlckhlYWRlciwgRHJhd2VyT3ZlcmxheSwgRHJhd2VyQ29udGVudCwgRHJhd2VyQ2xvc2VCdXR0b24sIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IERhcmtNb2RlU3dpdGNoIGZyb20gXCIuLi9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoXCI7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0dpdEh1Ykljb25cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IENvbnRhaW5lclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcbiAgICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKClcclxuICAgIGNvbnN0IGJ0blJlZiA9IFJlYWN0LnVzZVJlZigpXHJcbiAgICBcclxuICAgIGNvbnN0IGJnQ29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwid2hpdGVcIixcclxuICAgICAgICBkYXJrOiBcIiMxQTIwMkNcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29sb3IgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiYmxhY2tcIixcclxuICAgICAgICBkYXJrOiBcIndoaXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkhvdmVyQmcgPSB7XHJcbiAgICAgICAgbGlnaHQ6IFwiZ3JheS42MDBcIixcclxuICAgICAgICBkYXJrOiBcImdyYXkuMzAwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFN0aWNreU5hdiA9IHN0eWxlZChGbGV4KWBcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIGxpbmUtaGVpZ2h0IDAuNXM7XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0aWNreU5hdlxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjgwMHB4XCJcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzU2cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICBweD17WzIsIDYsIDZdfVxyXG4gICAgICAgICAgICAgICAgcHk9ezJ9XHJcbiAgICAgICAgICAgICAgICBtdD17OH1cclxuICAgICAgICAgICAgICAgIG1iPXtbMCwgMCwgOF19XHJcbiAgICAgICAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy85dmNMQUV6MjJlOHY2NFM1WTJDazMvNzhzUlVVNzFFaUNaNE5Ib2xKWXFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcC5hcmNoYmVlLmlvL2RvYy9CeUIwU0lUb2NhRXBLWjFZNlF6VGYvSkxaZm5MeldJVHRwM3RxUlhFT2FLXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD17WzEsIDIsIDRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogbmF2SG92ZXJCZ1tjb2xvck1vZGVdIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByZWY9e2J0blJlZn0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgb25DbGljaz17b25PcGVufT5cclxuICAgICAgICBPcGVuXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICBmaW5hbEZvY3VzUmVmPXtidG5SZWZ9XHJcbiAgICAgID5cclxuICAgICAgICA8RHJhd2VyT3ZlcmxheT5cclxuICAgICAgICAgIDxEcmF3ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgPERyYXdlckhlYWRlcj5DcmVhdGUgeW91ciBhY2NvdW50PC9EcmF3ZXJIZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8RHJhd2VyQm9keT5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L0RyYXdlckJvZHk+XHJcblxyXG4gICAgICAgICAgICA8RHJhd2VyRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9EcmF3ZXJGb290ZXI+XHJcbiAgICAgICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgPC9EcmF3ZXJPdmVybGF5PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhcmtNb2RlU3dpdGNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAieKAieKAieKAieKAiVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2l0SHViSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0aWNreU5hdj5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgIGFzPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgIGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cclxuICAgICAgICAgICAgICAgIHB4PXtbMCwgNCwgNF19XHJcbiAgICAgICAgICAgICAgICBtdD17WzQsIDgsIDhdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=