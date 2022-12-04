"use strict";
self["webpackHotUpdatetgui_workspace"]("tgui",{

/***/ "./packages/tgui/interfaces/AudioLog.tsx":
/*!***********************************************!*\
  !*** ./packages/tgui/interfaces/AudioLog.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



exports.__esModule = true;
exports.AudioLog = void 0;

var _inferno = __webpack_require__(/*! inferno */ "./.yarn/cache/inferno-npm-7.4.8-f828cb79a7-fa814fcb5f.zip/node_modules/inferno/index.esm.js");

var _react = __webpack_require__(/*! common/react */ "./packages/common/react.ts");

var _backend = __webpack_require__(/*! ../backend */ "./packages/tgui/backend.ts");

var _components = __webpack_require__(/*! ../components */ "./packages/tgui/components/index.js");

var _layouts = __webpack_require__(/*! ../layouts */ "./packages/tgui/layouts/index.js");

var MODE_OFF = 0;
var MODE_RECORDING = 1;
var MODE_PLAYING = 2;

var AudioLog = function AudioLog(props, context) {
  var _useBackend = (0, _backend.useBackend)(context),
      data = _useBackend.data;

  var continuous = data.continuous,
      current_line = data.current_line,
      memory_capacity = data.memory_capacity,
      mode = data.mode,
      name = data.name,
      occupied_memory = data.occupied_memory,
      tape = data.tape,
      tape_name = data.tape_name;
  return (0, _inferno.createComponentVNode)(2, _layouts.Window, {
    "title": name,
    "width": 320,
    "height": 250,
    children: (0, _inferno.createComponentVNode)(2, _layouts.Window.Content, {
      children: (0, _inferno.createComponentVNode)(2, _components.Box, {
        "className": "audiolog__outerwrapper",
        children: [(0, _inferno.createComponentVNode)(2, _components.Box, {
          "className": (0, _react.classes)(['audiolog__lcdscreen', 'audiolog__labelscreen']),
          children: tape ? (0, _inferno.createComponentVNode)(2, LabelScreenMarquee) : "INSERT TAPE"
        }), (0, _inferno.createComponentVNode)(2, _components.Box, {
          "className": "audiolog__lcdscreen",
          children: (0, _inferno.createComponentVNode)(2, _components.LabeledList, {
            children: [(0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
              "label": "MEMORY",
              "labelColor": "white",
              "className": "thefuck",
              children: (0, _inferno.createComponentVNode)(2, _components.ProgressBar, {
                "ranges": {
                  good: [0, 0.5],
                  average: [0.5, 0.75],
                  bad: [0.75, 1.0]
                },
                "value": tape ? occupied_memory / memory_capacity : 0
              })
            }), (0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
              "label": "PROGRESS",
              "labelColor": "white",
              "className": "thefuck",
              children: (0, _inferno.createComponentVNode)(2, _components.Slider, {
                "animated": true,
                "color": "good",
                "minValue": 1,
                "maxValue": occupied_memory,
                "value": tape ? current_line : 0
              })
            })]
          })
        }), (0, _inferno.createComponentVNode)(2, _components.Box, {
          "className": "audiolog__buttonrow",
          children: [(0, _inferno.createComponentVNode)(2, PushButton, {
            "isRed": true,
            "index": "Record",
            "iconName": "circle"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Play",
            "iconName": "play"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Rewind",
            "iconName": "backward"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Loop",
            "iconName": "repeat"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Stop",
            "iconName": "square"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Clear",
            "iconName": "trash"
          }), (0, _inferno.createComponentVNode)(2, PushButton, {
            "index": "Eject",
            "iconName": "eject"
          })]
        })]
      })
    })
  });
};

exports.AudioLog = AudioLog;

var LabelScreenMarquee = function LabelScreenMarquee(_, context) {
  var _useBackend2 = (0, _backend.useBackend)(context),
      data = _useBackend2.data;

  var tape_name = data.tape_name;
  return (0, _inferno.createVNode)(1, "marquee", null, [(0, _inferno.createTextVNode)("LOADED TAPE: "), tape_name], 0);
};

var PushButton = function PushButton(props, context) {
  var _useBackend3 = (0, _backend.useBackend)(context),
      act = _useBackend3.act;

  var iconName = props.iconName,
      index = props.index,
      isRed = props.isRed,
      keepDown = props.keepDown;
  var keyColour = isRed && 'audiolog__buttonelement-red';
  return (0, _inferno.createComponentVNode)(2, _components.Tooltip, {
    "content": index,
    "position": "top",
    children: (0, _inferno.createComponentVNode)(2, _components.Box, {
      "className": (0, _react.classes)(['audiolog__buttonelement', keyColour]),
      "onClick": function () {
        function onClick() {
          return act(index);
        }

        return onClick;
      }(),
      children: (0, _inferno.createComponentVNode)(2, _components.Icon, {
        "className": "fa-fw",
        "name": iconName
      })
    })
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e9b0625a03f522508725"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=tgui.1fd956c4bbb94be7756b.hot-update.js.map