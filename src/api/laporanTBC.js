/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// api/laporan.js
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

import LaporanTBCSchema from '../validator/laporanSchema.js';

const prisma = new PrismaClient();

const postLaporan = async (req, res) => {
  const { error, value } = LaporanTBCSchema.validate(req.body);

  if (error) {
    console.error('Validation error:', error.details[0].message);
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  try {
    const result = await prisma.LaporanStigmaDanDiskriminasiTBC.create({
      data: {
        idLaporan: uuidv4(),
        ...value,
      },
    });

    res.status(201).json(result);
  } catch (catchError) {
    console.error(catchError);
    res.status(500).json({ error: 'An error occurred while trying to create the data' });
  }
};

const getLaporan = async (req, res) => {
  try {
    const results = await prisma.LaporanStigmaDanDiskriminasiTBC.findMany();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while trying to retrieve the data' });
  }
};

export default {
  postLaporan,
  getLaporan,
};
