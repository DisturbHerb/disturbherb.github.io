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

var Gameclock = function Gameclock(_props, context) {
  var _useBackend = (0, _backend.useBackend)(context),
      data = _useBackend.data;

  var name = data.clockStatic.name;

  var _useLocalState = (0, _backend.useLocalState)(context, 'configModalOpen', false),
      configModalOpen = _useLocalState[0];

  var _useLocalState2 = (0, _backend.useLocalState)(context, 'swap', false),
      swap = _useLocalState2[0];

  return (0, _inferno.createComponentVNode)(2, _layouts.Window, {
    "title": name,
    "width": 220,
    "height": 350,
    children: (0, _inferno.createComponentVNode)(2, _layouts.Window.Content, {
      "className": "gameclock__window",
      "fitted": true,
      children: [configModalOpen && (0, _inferno.createComponentVNode)(2, ConfigModal), (0, _inferno.createComponentVNode)(2, TeamIcon, {
        "team": swap ? 'white' : 'black'
      }), (0, _inferno.createComponentVNode)(2, SidePart, {
        "team": swap ? 'white' : 'black'
      }), (0, _inferno.createComponentVNode)(2, MidPart), (0, _inferno.createComponentVNode)(2, SidePart, {
        "team": swap ? 'black' : 'white'
      }), (0, _inferno.createComponentVNode)(2, TeamIcon, {
        "team": swap ? 'black' : 'white'
      })]
    })
  });
};

exports.Gameclock = Gameclock;

var ConfigModal = function ConfigModal(_, context) {
  var _useBackend2 = (0, _backend.useBackend)(context),
      act = _useBackend2.act;

  var _useLocalState3 = (0, _backend.useLocalState)(context, 'configModalOpen', false),
      setConfigModalOpen = _useLocalState3[1];

  var _useLocalState4 = (0, _backend.useLocalState)(context, 'whiteTimeBuffer', 0),
      whiteTimeBuffer = _useLocalState4[0];

  var _useLocalState5 = (0, _backend.useLocalState)(context, 'blackTimeBuffer', 0),
      blackTimeBuffer = _useLocalState5[0];

  var setTime = function setTime(whiteTime, blackTime) {
    act('set_time', {
      'whiteTime': whiteTime * 10,
      'blackTime': blackTime * 10
    });
  };

  return (0, _inferno.createComponentVNode)(2, _components.Dimmer, {
    "className": "gameclock__configmodal",
    children: [(0, _inferno.createComponentVNode)(2, _components.LabeledList, {
      children: [(0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
        "label": "Time (White)",
        children: (0, _inferno.createComponentVNode)(2, TimeInput, {
          "team": 'white'
        })
      }), (0, _inferno.createComponentVNode)(2, _components.LabeledList.Item, {
        "label": "Time (Black)",
        children: (0, _inferno.createComponentVNode)(2, TimeInput, {
          "team": 'black'
        })
      })]
    }), (0, _inferno.createComponentVNode)(2, _components.Box, {
      "className": "gameclock__configmodalbuttoncontainer",
      children: [(0, _inferno.createComponentVNode)(2, _components.Button, {
        "content": "Apply",
        "onClick": function () {
          function onClick() {
            setConfigModalOpen(false);
            setTime(whiteTimeBuffer, blackTimeBuffer);
          }

          return onClick;
        }()
      }), (0, _inferno.createComponentVNode)(2, _components.Button, {
        "content": "Cancel",
        "onClick": function () {
          function onClick() {
            return setConfigModalOpen(false);
          }

          return onClick;
        }()
      })]
    })]
  });
};

var TimeInput = function TimeInput(props, context) {
  var _useBackend3 = (0, _backend.useBackend)(context),
      data = _useBackend3.data;

  var _data$clockStatic = data.clockStatic,
      minTime = _data$clockStatic.minTime,
      maxTime = _data$clockStatic.maxTime;
  var team = props.team;

  var _useLocalState6 = (0, _backend.useLocalState)(context, 'whiteTimeBuffer', 0),
      whiteTimeBuffer = _useLocalState6[0],
      setWhiteTimeBuffer = _useLocalState6[1];

  var _useLocalState7 = (0, _backend.useLocalState)(context, 'blackTimeBuffer', 0),
      blackTimeBuffer = _useLocalState7[0],
      setBlackTimeBuffer = _useLocalState7[1];

  var showTime = function showTime(value) {
    return (0, _format.formatTime)(value * 10);
  };

  return (0, _inferno.createComponentVNode)(2, _components.NumberInput, {
    "onDrag": function () {
      function onDrag(_e, value) {
        team === 'white' ? setWhiteTimeBuffer(value) : setBlackTimeBuffer(value);
      }

      return onDrag;
    }(),
    "format": showTime,
    "value": team === 'white' ? whiteTimeBuffer : blackTimeBuffer,
    "minValue": minTime,
    "maxValue": maxTime,
    "step": 15,
    "stepPixelSize": 2
  });
};

var TeamIcon = function TeamIcon(props, context) {
  var team = props.team;
  return (0, _inferno.createComponentVNode)(2, _components.Stack, {
    "direction": 'column',
    children: (0, _inferno.createComponentVNode)(2, _components.Tooltip, {
      "content": team === 'white' ? 'White' : 'Black',
      children: (0, _inferno.createComponentVNode)(2, _components.Icon, {
        "className": "gameclock__teamicon",
        "name": "circle" + (team === 'white' ? '' : '-o')
      })
    })
  });
};

var SidePart = function SidePart(props, context) {
  var _useBackend4 = (0, _backend.useBackend)(context),
      data = _useBackend4.data,
      act = _useBackend4.act;

  var team = props.team;

  var showTime = function showTime(value) {
    return (0, _format.formatTime)(value * 10);
  };

  return (0, _inferno.createComponentVNode)(2, _components.Stack, {
    "direction": 'column',
    "fill": true,
    "className": "gameclock__sidepart",
    children: (0, _inferno.createComponentVNode)(2, _components.Button, {
      "color": "orange",
      "disabled": !data.timing || (data.turn ? team === 'black' : team === 'white'),
      "className": "gameclock__timebutton",
      "onClick": function () {
        function onClick() {
          return act('end_turn');
        }

        return onClick;
      }(),
      children: (0, _inferno.createComponentVNode)(2, _components.Stack, {
        "className": "gameclock__timeflex",
        children: (0, _inferno.createComponentVNode)(2, _components.AnimatedNumber, {
          "value": team === 'white' ? data.whiteTime : data.blackTime,
          "format": showTime
        })
      })
    })
  });
};

var MidPart = function MidPart(_, context) {
  var _useBackend5 = (0, _backend.useBackend)(context),
      data = _useBackend5.data,
      act = _useBackend5.act;

  var _useLocalState8 = (0, _backend.useLocalState)(context, 'configModalOpen', false),
      setConfigModalOpen = _useLocalState8[1];

  var _useLocalState9 = (0, _backend.useLocalState)(context, 'whiteTimeBuffer', 0),
      setWhiteTimeBuffer = _useLocalState9[1];

  var _useLocalState10 = (0, _backend.useLocalState)(context, 'blackTimeBuffer', 0),
      setBlackTimeBuffer = _useLocalState10[1];

  var _useLocalState11 = (0, _backend.useLocalState)(context, 'swap', false),
      swap = _useLocalState11[0],
      toggleSwap = _useLocalState11[1];

  return (0, _inferno.createComponentVNode)(2, _components.Stack, {
    "direction": 'row',
    "className": "gameclock__mid",
    children: [(0, _inferno.createComponentVNode)(2, _components.Box, {
      children: (0, _inferno.createComponentVNode)(2, _components.Button, {
        "className": "gameclock__utilbutton",
        "disabled": data.timing,
        "tooltip": "Setup",
        "tooltipPosition": "top",
        "icon": "cog",
        "onClick": function () {
          function onClick() {
            setConfigModalOpen(true);
            setWhiteTimeBuffer(data.whiteTime);
            setBlackTimeBuffer(data.blackTime);
          }

          return onClick;
        }()
      })
    }), (0, _inferno.createComponentVNode)(2, _components.Box, {
      children: (0, _inferno.createComponentVNode)(2, _components.Button, {
        "className": "gameclock__utilbutton",
        "disabled": data.timing,
        "tooltip": "Current Turn: " + (data.turn ? "White" : "Black"),
        "tooltipPosition": "top",
        "icon": "flag",
        "color": data.turn ? "white" : "black",
        "onClick": function () {
          function onClick() {
            return act('set_turn');
          }

          return onClick;
        }()
      })
    }), (0, _inferno.createComponentVNode)(2, _components.Box, {
      children: (0, _inferno.createComponentVNode)(2, _components.Button, {
        "className": "gameclock__utilbutton",
        "disabled": data.whiteTime === 0 || data.blackTime === 0,
        "tooltip": data.timing ? 'Pause' : 'Unpause',
        "tooltipPosition": "top",
        "icon": data.timing ? 'pause' : 'play',
        "color": data.timing ? 'orange' : '',
        "onClick": function () {
          function onClick() {
            return act('toggle_timing');
          }

          return onClick;
        }()
      })
    }), (0, _inferno.createComponentVNode)(2, _components.Box, {
      children: (0, _inferno.createComponentVNode)(2, _components.Button, {
        "className": "gameclock__utilbutton",
        "disabled": data.timing,
        "tooltip": "Rotate view",
        "tooltipPosition": "top",
        "icon": "rotate",
        "onClick": function () {
          function onClick() {
            return toggleSwap(!swap);
          }

          return onClick;
        }()
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
/******/ 	__webpack_require__.h = function() { return "05c23f1c0105b0edaaba"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=tgui.68afbc7f328de927c37e.hot-update.js.map