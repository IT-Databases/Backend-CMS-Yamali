"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _prisma = require("@adminjs/prisma");
var _upload = _interopRequireDefault(require("@adminjs/upload"));
var _index = _interopRequireDefault(require("../../db/index.js"));
var _componentLoader = require("../component-loader.js");
var _myInput = _interopRequireDefault(require("../components/my-input.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _await$initialize = await (0, _index["default"])(),
  prisma = _await$initialize.prisma;
var localProvider = {
  bucket: 'public/files',
  baseUrl: '/files'
};
var berita = {
  model: (0, _prisma.getModelByName)('Berita'),
  client: prisma,
  options: {
    parent: null,
    listProperties: ['judulBerita', 'isiBerita', 'gambarBerita', 'sumberBerita'],
    properties: {
      idBerita: {
        isVisible: false
      },
      isiBerita: {
        type: 'textarea',
        props: {
          rows: 20
        }
      },
      gambarBerita: {
        type: 'string',
        components: {
          edit: _myInput["default"]
        }
      }
    },
    features: [(0, _upload["default"])({
      provider: {
        local: localProvider
      },
      properties: {
        key: 'gambarBerita',
        mimeType: 'gambarBerita.mimeType',
        size: 'gambarBerita.size',
        filename: 'gambarBerita.filename',
        file: 'gambarBerita'
      },
      validation: {
        mimeTypes: ['image/png', 'image/jpg', 'image/jpeg']
      }
    })]
  }
};
var _default = exports["default"] = berita;