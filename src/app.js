/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import * as url from 'url';
import path from 'path';

import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';

import laporanTBC from './api/laporanTBC.js';
import getBerita from './api/berita.js';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';

const port = process.env.PORT || 3000;

const start = async () => {
  const app = express();
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

  await initializeDb();

  const adminOptions = await options();
  const admin = new AdminJS(adminOptions);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    },
  );

  app.use(admin.options.rootPath, router);

  app.use(express.json());

  app.use(express.static(path.join(__dirname, '../public')));

  app.post('/api/laporan', laporanTBC.postLaporan);
  app.get('/api/laporan', laporanTBC.getLaporan);
  app.get('/api/berita', getBerita);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
