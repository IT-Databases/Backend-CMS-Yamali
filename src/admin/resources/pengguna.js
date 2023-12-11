import argon2 from 'argon2';
import { getModelByName } from '@adminjs/prisma';
import passwordsFeature from '@adminjs/passwords';
import { ValidationError } from 'adminjs';

import initialize from '../../db/index.js';
import componentLoader, { Components } from '../component-loader.js';


const { prisma } = await initialize();

const customAfter = (originalResponse, request, context) => {
  console.log(originalResponse.meta);

  return originalResponse;
};

const pengguna = {
  model: getModelByName('Pengguna'),
  client: prisma,
  options: {
    parent: null,
    actions: {
      myCustomAction: {
        actionType: 'record',
        component: Components.MyCustomAction,
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;
          return {
            record: record.toJSON(currentAdmin),
          };
        },
        showInDrawer: true,
      },
      guard: 'doYouReallyWantToDoThis',
      // new: {
      //   isAccessible: false,
      //   isVisible: false,
      // },
      // edit: {
      //   before: [validateForm],
      // },
      list: {
        // before: [customBefore],
        // after: [customAfter],
        showFilter: true,
      },
      // delete: {
      //   isAccessible: false,
      //   isVisible: false,
      // },
    },
    properties: {
      randomPicture: {
        type: 'string',
        components: {
          list: Components.MyCustomAction,
          show: Components.MyCustomAction,
        },
      },
      links: {
        description: "User's Linkedin/Github/social profiles links",
      },
      gender: {
        availableValues: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
          { value: 'notSay', label: 'Rather not say' },
        ],
      },
      bio: {
        type: 'textarea',
        props: {
          rows: 20,
        },
      },
      // password: { isVisible: false },
    },
    features: [
      passwordsFeature({
        componentLoader,
        properties: {
          encryptedPassword: 'password',
          password: 'newPassword',
        },
        hash: argon2.hash,
      }),
    ],
  },
};

export default pengguna;