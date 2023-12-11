import Joi from 'joi';

const LaporanTBCSchema = Joi.object({
  namaAtauInisial: Joi.string().max(100).required(),
  jenisKelamin: Joi.string().valid('LAKI_LAKI', 'PEREMPUAN').required(),
  umur: Joi.number().integer().required(),
  nomorTelepon: Joi.string().max(15).required(),
  alamat: Joi.string().max(255).required(),
  asalFasilitasKesehatan: Joi.string().max(255).required(),
  mewakiliPengadu: Joi.boolean().required(),
  hubunganDenganPengadu: Joi.string().max(100).optional(),
  laporan: Joi.string().valid('STIGMA_DAN_DISKRIMINASI', 'PENDAMPINGAN').required(),
  sumberStigma: Joi.string()
    .valid('DIRI_SENDIRI', 'KELUARGA', 'MASYARAKAT_KOMUNITAS_SEKOLAH', 'FASILITAS_KESEHATAN', 'TEMPAT_KERJA')
    .required(),
  waktuPengalaman: Joi.string().max(255).required(),
  pelakuStigma: Joi.string().max(255).optional(),
  keluhan: Joi.string().required(),
});

export default LaporanTBCSchema;
