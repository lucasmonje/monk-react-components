"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomButton = function CustomButton(_ref) {
  var align = _ref.align,
      label = _ref.label,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? label : _ref$children,
      className = _ref.className,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      idleStyle = _ref.idleStyle,
      activeStyle = _ref.activeStyle;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hovered = _useState4[0],
      setOver = _useState4[1];

  var handleClick = function handleClick() {
    if (onClick != null && typeof onClick === 'function') onClick();
  };

  var handleMouseEnter = function handleMouseEnter() {
    setOver(true);
    if (onMouseEnter != null && typeof onMouseEnter === 'function') onMouseEnter();
  };

  var handleMouseLeave = function handleMouseLeave() {
    setOver(false);
    if (onMouseLeave != null && typeof onMouseLeave === 'function') onMouseLeave();
  };

  var handleFocus = function handleFocus() {
    return setFocus(true);
  };

  var handleBlur = function handleBlur() {
    return setFocus(false);
  };

  var renderIcon = function renderIcon() {
    if (icon == null) {
      return null;
    } else {
      return _react.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          maxWidth: iconSize,
          maxHeight: iconSize
        }
      }, icon, children ? _react.default.createElement("div", {
        style: {
          width: '10px'
        }
      }) : null);
    }
  };

  return _react.default.createElement("button", _extends({
    style: _objectSpread({}, defaultButtonStyles.idleStyle, idleStyle, (hovered || focused) && activeStyle, {
      width: children ? 'calc(100% - 10px)' : 'auto'
    }),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, {
    className: className
  }), _react.default.createElement("div", {
    style: {
      alignItems: 'center',
      display: 'flex',
      height: 'calc(100% - 20px)'
    }
  }, renderIcon(), children ? _react.default.createElement("div", {
    style: {
      textAlign: align,
      width: '100%'
    }
  }, children) : null));
};

exports.CustomButton = CustomButton;
CustomButton.propTypes = {
  label: _propTypes.default.string,
  children: _propTypes.default.node,
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  className: _propTypes.default.string,
  icon: _propTypes.default.node,
  iconSize: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  idleStyle: _propTypes.default.object,
  activeStyle: _propTypes.default.object
};
CustomButton.defaultProps = {
  align: 'center',
  iconSize: '26px',
  text: ''
};
var defaultButtonStyles = {
  idleStyle: {
    display: 'block',
    border: '0px',
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0 1px 2px',
    color: '#ffffff',
    backgroundColor: '#4eb151',
    cursor: 'pointer',
    fontSize: '19px',
    margin: '5px',
    overflow: 'hidden',
    userSelect: 'none',
    padding: '10px 10px 10px'
  }
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomInputText = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomInputText = function CustomInputText(_ref) {
  var value = _ref.value,
      label = _ref.label,
      placeHolder = _ref.placeHolder,
      onChangeInput = _ref.onChangeInput,
      className = _ref.className,
      customStyle = _ref.style,
      inputIdleStyle = _ref.inputIdleStyle,
      inputActiveStyle = _ref.inputActiveStyle,
      labelIdleStyle = _ref.labelIdleStyle,
      labelActiveStyle = _ref.labelActiveStyle;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocus = _useState2[1];

  var handleFocus = function handleFocus() {
    return setFocus(true);
  };

  var handleBlur = function handleBlur() {
    return setFocus(false);
  };

  var handleChange = function handleChange(event) {
    return onChangeInput(event.target.value);
  };

  return _react.default.createElement("div", {
    style: _objectSpread({}, defaultInputTextStyles.container, customStyle),
    className: className
  }, _react.default.createElement("label", {
    style: _objectSpread({}, defaultInputTextStyles.labelIdle, labelIdleStyle, focused && defaultInputTextStyles.labelActive, focused && labelActiveStyle)
  }, label), _react.default.createElement("input", {
    id: "input",
    type: "text",
    style: _objectSpread({}, defaultInputTextStyles.inputIdle, inputIdleStyle, focused && defaultInputTextStyles.inputActive, focused && inputActiveStyle),
    placeholder: placeHolder,
    value: value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange
  }));
};

exports.CustomInputText = CustomInputText;
CustomInputText.propTypes = {
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  placeHolder: _propTypes.default.string,
  onChangeInput: _propTypes.default.func,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  inputIdleStyle: _propTypes.default.object,
  inputActiveStyle: _propTypes.default.object,
  labelIdleStyle: _propTypes.default.object,
  labelActiveStyle: _propTypes.default.object
};
CustomInputText.defaultProps = {
  label: 'label',
  placeHolder: 'enter text...',
  style: {},
  inputIdleStyle: {},
  inputActiveStyle: {},
  labelIdleStyle: {},
  labelActiveStyle: {}
};
var defaultInputTextStyles = {
  container: {},
  inputIdle: {
    width: '100%',
    height: '56px',
    borderRadius: '6px',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    transition: '0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out',
    padding: '0px 16px'
  },
  inputActive: {
    width: '100%',
    height: '56px',
    position: 'relative',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 'normal',
    backgroundColor: '#FFFFFF',
    color: '#282828',
    outline: 'none',
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
    webkitAppearance: 'none',
    padding: '10px 16px 8px 16px'
  },
  labelIdle: {
    display: 'block',
    position: 'relative',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '24px',
    color: '#fff',
    pointerEvents: 'none',
    transition: '0.1s all ease-in-out',
    padding: '0px 0px 0px',
    margin: '0px 0px 0px',
    opacity: '0.7'
  },
  labelActive: {
    opacity: '1'
  }
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CustomButton", {
  enumerable: true,
  get: function get() {
    return _CustomButton.CustomButton;
  }
});
Object.defineProperty(exports, "CustomInputText", {
  enumerable: true,
  get: function get() {
    return _CustomInputText.CustomInputText;
  }
});

var _CustomButton = require("./CustomButton");

var _CustomInputText = require("./CustomInputText");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var components = _interopRequireWildcard(require("./components"));

Object.keys(components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return components[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = components;
exports.default = _default;
