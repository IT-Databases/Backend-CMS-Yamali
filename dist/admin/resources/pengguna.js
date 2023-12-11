"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _argon = _interopRequireDefault(require("argon2"));
var _prisma = require("@adminjs/prisma");
var _passwords = _interopRequireDefault(require("@adminjs/passwords"));
var _index = _interopRequireDefault(require("../../db/index.js"));
var _componentLoader = require("../component-loader.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _await$initialize = await (0, _index["default"])(),
  prisma = _await$initialize.prisma;
var pengguna = {
  model: (0, _prisma.getModelByName)('Pengguna'),
  client: prisma,
  options: {
    parent: null,
    properties: {
      randomPicture: {
        type: 'string',
        components: {
          list: _componentLoader.Components.randomPicture,
          show: _componentLoader.Components.randomPicture
        }
      },
      password: {
        isVisible: false
      }
    },
    // features: [
    //   passwordsFeature({
    //     componentLoader,
    //     properties: {
    //       encryptedPassword: 'password',
    //       password: 'newPassword',
    //     },
    //     hash: argon2.hash,
    //   }),
    // ],
    actions: {
      // new: {
      //   isAccessible: false,
      //   isVisible: false,
      // },
      // edit: {
      //   isAccessible: false,
      //   isVisible: false,
      // },
      // delete: {
      //   isAccessible: false,
      //   isVisible: false,
      // },
    }
  }
};
var _default = exports["default"] = pengguna;