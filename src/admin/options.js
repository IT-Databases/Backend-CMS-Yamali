/* eslint-disable linebreak-style */
// import AdminJS from 'adminjs';
import { dark, light, noSidebar } from '@adminjs/themes';

import pengguna from './resources/pengguna.js';
import berita from './resources/berita.js';
import laporanStigmaDiskriminasi from './resources/laporanStigmaDiskriminasi.js';
import anotherResources from './resources/anotherResources.js';
import componentLoader from './component-loader.js';

const options = async () => ({
  rootPath: '/admin',
  defaultTheme: light.id,
  availableThemes: [dark, light, noSidebar],
  // assets: {
  //   styles: ['../../public/sidebar.css'],
  // },
  resources: [
    pengguna,
    berita,
    laporanStigmaDiskriminasi,
    anotherResources.investigasiKontak,
    anotherResources.informasiFasyankes,
    anotherResources.terdugaTBC,
    anotherResources.kasusTernotif,
    anotherResources.tbcRO,
    anotherResources.tbcSO,
    anotherResources.tocRO,
    anotherResources.kegiatanTbcRo,
  ],
  components: componentLoader,
});

export default options;
