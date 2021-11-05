"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAlert = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  cursor: pointer;\n\n  border-radius: 2.5rem;\n\n  box-shadow: 0 8px 20px 0px #0000003b;\n\n  background-color: ", ";\n  color: ", ";\n\n  height: ", ";\n  width: ", ";\n\n  transition: 250ms;\n\n  &:hover {\n    opacity: 0.9;\n  }\n\n  p.alert-text {\n    cursor: pointer;\n    line-height: ", ";\n    margin: 0 1rem;\n    text-align: left;\n    overflow: hidden;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: calc(100% - 4rem);\n  }\n\n  .icon {\n    text-align: right;\n  }\n"])), function (props) {
  return props.color ? props.color : "white";
}, function (props) {
  return props.textColor ? props.textColor : "unset";
}, function (props) {
  return props.height ? props.height : "3rem";
}, function (props) {
  return props.width ? props.width : "12rem";
}, function (props) {
  return props.height ? props.height : "3rem";
});

var Alert = function Alert(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, visible ? /*#__PURE__*/React.createElement(StyledAlert, _extends({
    className: "proomka-alert",
    id: props.id,
    height: props.height,
    width: props.width,
    isClosable: props.isClosable,
    color: props.color,
    textColor: props.textColor,
    onClick: function onClick() {
      return setVisible(false);
    }
  }, props), /*#__PURE__*/React.createElement("p", {
    className: "alert-text"
  }, props.children)) : null);
};

var _default = Alert;
exports.default = _default;