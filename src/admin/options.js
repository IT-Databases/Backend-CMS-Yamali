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
            list: {
              showFilter: false,
            },
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
              }
            }
          },
          properties: {
            // 'namaAtauInisial': {
            //   label: 'Nama/Inisial',
            // },
            // jenisKelamin: {
            //   label: 'New Label for jenisKelamin',
            // },
            // Add more fields as needed
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
          // actions: {
          //   new: {
          //     isAccessible: false,
          //     isVisible: false,
          //   },
          //   edit: {
          //     isAccessible: false,
          //     isVisible: false,
          //   },
          //   delete: {
          //     isAccessible: false,
          //     isVisible: false,
          //   },
          // },
        },
      },
    ],
    databases: [],
  };
};

export default options;
