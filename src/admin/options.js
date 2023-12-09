import { getModelByName } from '@adminjs/prisma';

import initialize from '../db/index.js';

import componentLoader from './component-loader.js';

const options = async () => {
  const { prisma } = await initialize();

  return {
    componentLoader,
    rootPath: '/admin',
    resources: [
      {
        model: getModelByName('Pengguna'),
        client: prisma,
        options: {
          parent: null,
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
          },
        },
      },
      {
        model: getModelByName('Berita'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('LaporanStigmaDanDiskriminasiTBC'),
        client: prisma,
        options: {
          parent: null,
          // name: 'Laporan Stigma',
          locale: {
            language: 'id',
            translations: {
              resources: {
                'Laporan Stigma Dan Diskriminasi TBC': {
                  name: 'Laporan Stigma',
                },
              },
            },
          },
          properties: {
          },
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
      },
      {
        model: getModelByName('InvestigasiKontak'),
        client: prisma,
        options: {
          parent: null,
        }
      },
      {
        model: getModelByName('InformasiFasyankes'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('TerdugaTBC'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('KasusTernotif'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('TBCRo'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('TBCSo'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('TocRo'),
        client: prisma,
        options: {
          parent: null,
        },
      },
      {
        model: getModelByName('KegiatanTBCRo'),
        client: prisma,
        options: {
          parent: null,
        },
      },
    ],
    // databases: [],
  };
};

export default options;
