"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _prisma = require("@adminjs/prisma");
var _index = _interopRequireDefault(require("../../db/index.js"));
var _componentLoader = require("../component-loader.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import importExportFeature from '@adminjs/import-export';

var _await$initialize = await (0, _index["default"])(),
  prisma = _await$initialize.prisma;
var laporanStigmaDiskriminasi = {
  model: (0, _prisma.getModelByName)('LaporanStigmaDanDiskriminasiTBC'),
  client: prisma,
  options: {
    parent: null,
    locale: {
      language: 'en',
      translations: {
        en: {
          labels: {
            'Laporan Stigma Dan Diskriminasi TBC': 'Laporan Stigma'
          }
        }
      }
    },
    properties: {},
    listProperties: ['namaAtauInisial', 'jenisKelamin', 'umur',
    // 'nomorTelepon'
    // 'alamat',
    'asalFasilitasKesehatan', 'mewakiliPengadu',
    // 'hubunganDenganPengadu',
    'laporan',
    // 'sumberStigma',
    'waktuPengalaman',
    // 'pelakuStigma',
    'keluhan'],
    // features: [importExportFeature({ componentLoader })],
    actions: {
      "new": {
        isAccessible: false,
        isVisible: false
      },
      edit: {
        isAccessible: false,
        isVisible: false
      },
      "delete": {
        isAccessible: false,
        isVisible: false
      }
    }
  }
};
var _default = exports["default"] = laporanStigmaDiskriminasi;