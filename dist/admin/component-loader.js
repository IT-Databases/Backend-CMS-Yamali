"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentLoader = exports.Components = void 0;
var _path = _interopRequireDefault(require("path"));
var _url = _interopRequireDefault(require("url"));
var _adminjs = require("adminjs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable linebreak-style */

var componentLoader = exports.componentLoader = new _adminjs.ComponentLoader();

// componentLoader.load('CustomDashboard', './admin/components/custom-dashboard');
// componentLoader.add(componentName, path.join(__dirname, url));

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

var Components = exports.Components = {
  MyInput: componentLoader.add('MyInput', './components/my-input.jsx')
};