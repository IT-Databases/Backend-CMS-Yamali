import { getModelByName } from '@adminjs/prisma';

import initialize from '../../db/index.js';
import componentLoader from '../component-loader.js';

const { prisma } = await initialize();

const investigasiKontak = {
  model: getModelByName('InvestigasiKontak'),
  client: prisma,
  options: {
    parent: null,
  },
};

const informasiFasyankes = {
  model: getModelByName('InformasiFasyankes'),
  client: prisma,
  options: {
    parent: null,
  },
};

const terdugaTBC = {
  model: getModelByName('TerdugaTBC'),
  client: prisma,
  options: {
    parent: null,
  },
};

const kasusTernotif = {
  model: getModelByName('KasusTernotif'),
  client: prisma,
  options: {
    parent: null,
  },
};

const tbcRO = {
  model: getModelByName('TBCRo'),
  client: prisma,
  options: {
    parent: null,
  },
};

const tbcSO = {
  model: getModelByName('TBCSo'),
  client: prisma,
  options: {
    parent: null,
  },
};

const tocRO = {
  model: getModelByName('TocRo'),
  client: prisma,
  options: {
    parent: null,
  },
};

const kegiatanTbcRo = {
  model: getModelByName('KegiatanTBCRo'),
  client: prisma,
  options: {
    parent: null,
    // actions: {
    //   findRelation: { isAccessible: onlyForAdmin}
    // }
  },
};

const anotherResources = {
  investigasiKontak,
  informasiFasyankes,
  terdugaTBC,
  kasusTernotif,
  tbcRO,
  tbcSO,
  tocRO,
  kegiatanTbcRo,
};

export default anotherResources;
