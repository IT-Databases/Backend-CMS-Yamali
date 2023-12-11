import { getModelByName } from '@adminjs/prisma';
import uploadFeature from '@adminjs/upload';

import initialize from '../../db/index.js';
import componentLoader, { Components } from '../component-loader.js';


const { prisma } = await initialize();

const localProvider = {
  bucket: 'public/files',
  baseUrl: '/files',
};

const berita = {
  model: getModelByName('Berita'),
  client: prisma,
  options: {
    parent: null,
    listProperties: ['judulBerita', 'isiBerita', 'gambarBerita', 'sumberBerita'],
    properties: {
      idBerita: {
        isVisible: false,
      },
      isiBerita: {
        type: 'textarea',
        props: {
          rows: 20,
        },
      },
      gambarBerita: {
        type: 'string',
        components: {
          edit: Components.MyInput,
        }
      },
    },
    // features: [
    //   uploadFeature({
    //     provider: { local: localProvider },
    //     properties: {
    //       key: 'gambarBerita',
    //       mimeType: 'gambarBerita.mimeType',
    //       size: 'gambarBerita.size',
    //       filename: 'gambarBerita.filename',
    //       file: 'gambarBerita',
    //     },
    //     validation: {
    //       mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    //     },
    //   }),
    // ],
  },
};

export default berita;
