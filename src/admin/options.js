/* eslint-disable linebreak-style */
// import AdminJS from 'adminjs';
import pengguna from './resources/pengguna.js';
import berita from './resources/berita.js';
import laporanStigmaDiskriminasi from './resources/laporanStigmaDiskriminasi.js';
import anotherResources from './resources/anotherResources.js';
import componentLoader from './component-loader.js';

const options = async () => ({
  componentLoader,
  rootPath: '/admin',
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
});

export default options;
