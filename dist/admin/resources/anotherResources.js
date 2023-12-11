"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _prisma = require("@adminjs/prisma");
var _index = _interopRequireDefault(require("../../db/index.js"));
var _componentLoader = require("../component-loader.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _await$initialize = await (0, _index["default"])(),
  prisma = _await$initialize.prisma;
var investigasiKontak = {
  model: (0, _prisma.getModelByName)('InvestigasiKontak'),
  client: prisma,
  options: {
    parent: null
  }
};
var informasiFasyankes = {
  model: (0, _prisma.getModelByName)('InformasiFasyankes'),
  client: prisma,
  options: {
    parent: null
  }
};
var terdugaTBC = {
  model: (0, _prisma.getModelByName)('TerdugaTBC'),
  client: prisma,
  options: {
    parent: null
  }
};
var kasusTernotif = {
  model: (0, _prisma.getModelByName)('KasusTernotif'),
  client: prisma,
  options: {
    parent: null
  }
};
var tbcRO = {
  model: (0, _prisma.getModelByName)('TBCRo'),
  client: prisma,
  options: {
    parent: null
  }
};
var tbcSO = {
  model: (0, _prisma.getModelByName)('TBCSo'),
  client: prisma,
  options: {
    parent: null
  }
};
var tocRO = {
  model: (0, _prisma.getModelByName)('TocRo'),
  client: prisma,
  options: {
    parent: null
  }
};
var kegiatanTbcRo = {
  model: (0, _prisma.getModelByName)('KegiatanTBCRo'),
  client: prisma,
  options: {
    parent: null
    // actions: {
    //   findRelation: { isAccessible: onlyForAdmin}
    // }
  }
};
var anotherResources = {
  investigasiKontak: investigasiKontak,
  informasiFasyankes: informasiFasyankes,
  terdugaTBC: terdugaTBC,
  kasusTernotif: kasusTernotif,
  tbcRO: tbcRO,
  tbcSO: tbcSO,
  tocRO: tocRO,
  kegiatanTbcRo: kegiatanTbcRo
};
var _default = exports["default"] = anotherResources;