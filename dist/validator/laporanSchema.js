"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LaporanTBCSchema = _joi["default"].object({
  namaAtauInisial: _joi["default"].string().max(100).required(),
  jenisKelamin: _joi["default"].string().valid('LAKI_LAKI', 'PEREMPUAN').required(),
  umur: _joi["default"].number().integer().required(),
  nomorTelepon: _joi["default"].string().max(15).required(),
  alamat: _joi["default"].string().max(255).required(),
  asalFasilitasKesehatan: _joi["default"].string().max(255).required(),
  mewakiliPengadu: _joi["default"]["boolean"]().required(),
  hubunganDenganPengadu: _joi["default"].string().max(100).optional(),
  laporan: _joi["default"].string().valid('STIGMA_DAN_DISKRIMINASI', 'PENDAMPINGAN').required(),
  sumberStigma: _joi["default"].string().valid('DIRI_SENDIRI', 'KELUARGA', 'MASYARAKAT_KOMUNITAS_SEKOLAH', 'FASILITAS_KESEHATAN', 'TEMPAT_KERJA').required(),
  waktuPengalaman: _joi["default"].string().max(255).required(),
  pelakuStigma: _joi["default"].string().max(255).optional(),
  keluhan: _joi["default"].string().required()
});
var _default = exports["default"] = LaporanTBCSchema;