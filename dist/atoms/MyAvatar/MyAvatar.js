"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MyAvatar;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MyAvatar() {
  return /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: "Some Text",
    src: "broken-image.jpg"
  });
}