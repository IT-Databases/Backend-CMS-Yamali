/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// api/laporan.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getBerita = async (req, res) => {
  try {
    const results = await prisma.Berita.findMany();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while trying to retrieve the data' });
  }
};

export default getBerita;
