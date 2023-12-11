"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _designSystem = require("@adminjs/design-system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RandomPicture = function RandomPicture(props) {
  // Picsum generates a random 200x200 photo
  var url = 'https://picsum.photos/200';
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: url
  });
};
RandomPicture.propTypes = {
  // Define your prop types here
  // For example, if props should have a property 'record' which is an object:
  record: _propTypes["default"].object
  // If you have more props, define them similarly
};
var _default = exports["default"] = RandomPicture;