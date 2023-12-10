import { getModelByName } from '@adminjs/prisma';
import importExportFeature from '@adminjs/import-export';

import initialize from '../../db/index.js';
import componentLoader from '../component-loader.js';

const { prisma } = await initialize();

const laporanStigmaDiskriminasi = {
  model: getModelByName('LaporanStigmaDanDiskriminasiTBC'),
  client: prisma,
  options: {
    parent: null,
    locale: {
      language: 'en',
      translations: {
        en: {
          labels: {
            'Laporan Stigma Dan Diskriminasi TBC': 'Laporan Stigma',
          },
        },
      },
    },
    properties: {},
    listProperties: [
      'namaAtauInisial',
      'jenisKelamin',
      'umur',
      // 'nomorTelepon'
      // 'alamat',
      'asalFasilitasKesehatan',
      'mewakiliPengadu',
      // 'hubunganDenganPengadu',
      'laporan',
      // 'sumberStigma',
      'waktuPengalaman',
      // 'pelakuStigma',
      'keluhan',
    ],
    features: [importExportFeature({ componentLoader })],
    actions: {
      new: {
        isAccessible: false,
        isVisible: false,
      },
      edit: {
        isAccessible: false,
        isVisible: false,
      },
      delete: {
        isAccessible: false,
        isVisible: false,
      },
    },
  },
};

export default laporanStigmaDiskriminasi;
