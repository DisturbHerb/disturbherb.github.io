self["webpackHotUpdatetgui_workspace"]("tgui",{

/***/ "./packages/tgui/interfaces/Gameclock/index.tsx":
/*!******************************************************!*\
  !*** ./packages/tgui/interfaces/Gameclock/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Gameclock = void 0;

var _inferno = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-dd2af1493c.zip/node_modules/inferno/index.esm.js");

var _backend = __webpack_require__(/*! ../../backend */ "./packages/tgui/backend.ts");

var _components = __webpack_require__(/*! ../../components */ "./packages/tgui/components/index.js");

var _layouts = __webpack_require__(/*! ../../layouts */ "./packages/tgui/layouts/index.js");

var _format = __webpack_require__(/*! ../../format */ "./packages/tgui/format.js");

var MAX_TIME = 1800;

var Gameclock = function Gameclock(_props, context) {
  var _useBackend = (0, _backend.useBackend)(context),
      act = _useBackend.act,
      data = _useBackend.data;

  var _useLocalState = (0, _backend.useLocalState)(context, 'configModalOpen', false),
      configModalOpen = _useLocalState[0],
      setConfigModalOpen = _useLocalState[1]; // line 13 is supposed to be for toggling showing separate time values for white or black, or a single input for both
  // fudge this later


  var _useLocalState2 = (0, _backend.useLocalState)(context, 'showSeparateTimes', false),
      showSeparateTimes = _useLocalState2[0],
      toggleShowSeparateTimes = _useLocalState2[1];

  var showTime = function showTime(value) {
    return (0, _format.formatTime)(value * 10);
  };

  return (0, _inferno.createComponentVNode)(2, _layouts.Window, {
    "title": "Board Game Clock",
    "width": 400,
    "height": 200,
    children: (0, _inferno.createComponentVNode)(2, _layouts.Window.Content, {
      "scrollable": true,
      children: [configModalOpen && (0, _inferno.createComponentVNode)(2, _components.Dimmer, {
        "className": "gameclock__configmodal",
        children: [(0, _inferno.createComponentVNode)(2, _components.Button.Checkbox, {
          "content": "Use separate times"
        }), (0, _inferno.createComponentVNode)(2, _components.LabeledList, {
          children: [(0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
            "label": "Time per side",
            children: (0, _inferno.createComponentVNode)(2, _components.NumberInput, {
              "format": showTime,
              "maxValue": MAX_TIME
            })
          }), (0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
            "label": "Time (White)",
            children: (0, _inferno.createComponentVNode)(2, _components.NumberInput, {
              "format": showTime,
              "maxValue": MAX_TIME
            })
          }), (0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
            "label": "Time (Black)",
            children: (0, _inferno.createComponentVNode)(2, _components.NumberInput, {
              "format": showTime,
              "maxValue": MAX_TIME
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Button, {
          "onClick": function () {
            function onClick() {
              return setConfigModalOpen(false);
            }

            return onClick;
          }(),
          "content": "Close"
        })]
      }), (0, _inferno.createComponentVNode)(2, _components.Flex, {
        children: [(0, _inferno.createComponentVNode)(2, _components.Flex.Item, {
          "grow": 1,
          children: (0, _inferno.createComponentVNode)(2, SidePart, {
            "team": 'white'
          })
        }), (0, _inferno.createComponentVNode)(2, _components.Flex.Item, {
          children: (0, _inferno.createComponentVNode)(2, _components.Flex, {
            "direction": 'column',
            "className": "gameclock__mid",
            children: [(0, _inferno.createComponentVNode)(2, _components.Button, {
              "className": "gameclock__utilbutton",
              "icon": "cog",
              "onClick": function () {
                function onClick() {
                  return setConfigModalOpen(true);
                }

                return onClick;
              }()
            }), (0, _inferno.createComponentVNode)(2, _components.Button, {
              "className": "gameclock__utilbutton",
              "icon": "pause"
            }), (0, _inferno.createComponentVNode)(2, _components.Button, {
              "className": "gameclock__utilbutton",
              "icon": "exchange-alt"
            })]
          })
        }), (0, _inferno.createComponentVNode)(2, _components.Flex.Item, {
          "grow": 1,
          children: (0, _inferno.createComponentVNode)(2, SidePart, {
            "team": 'black'
          })
        })]
      })]
    })
  });
};

exports.Gameclock = Gameclock;

var SidePart = function SidePart(props) {
  var team = props.team;
  return (0, _inferno.createComponentVNode)(2, _components.Flex, {
    "direction": 'column',
    "className": "gameclock__side",
    children: [(0, _inferno.createComponentVNode)(2, _components.Icon, {
      "className": "gameclock__sideicon",
      "name": "circle" + (team === 'white' ? "-o" : '')
    }), (0, _inferno.createComponentVNode)(2, _components.Button, {
      "className": "gameclock__timebutton",
      children: (0, _inferno.createComponentVNode)(2, _components.Flex, {
        "className": "gameclock__timeflex",
        children: "00:00"
      })
    })]
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d26711566e8d00e09826"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=tgui.e720225895a0452d3e99.hot-update.js.map