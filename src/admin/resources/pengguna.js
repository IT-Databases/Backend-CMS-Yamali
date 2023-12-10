import argon2 from 'argon2';
import { getModelByName } from '@adminjs/prisma';
import passwordsFeature from '@adminjs/passwords';

import initialize from '../../db/index.js';
import componentLoader from '../component-loader.js';


const { prisma } = await initialize();

const pengguna = {
  model: getModelByName('Pengguna'),
  client: prisma,
  options: {
    parent: null,
    properties: { password: { isVisible: false } },
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
    },
  },
};

export default pengguna;