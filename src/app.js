import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { PrismaClient, Prisma } from "@prisma/client";
import { Database, Resource, getModelByName } from "@adminjs/prisma";
// import { DMMFClass } from "@prisma/client/runtime";
import { createRequire } from "module";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();
const require = createRequire(import.meta.url);
const Joi = require('joi');
const MySQLStore = require("express-mysql-session")(session);

dotenv.config();

const PORT = 3000;

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

AdminJS.registerAdapter({ Database, Resource });

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: uuid,
        name: "Alice",
        email: "alice@prisma.io",
      },
    });
    console.log(newUser);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      console.log("A user with this email already exists.");
    } else {
      throw error;
    }
  }

  // const allUsers = await prisma.user.findMany();
  // console.dir(allUsers, { depth: null});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const start = async () => {
  const app = express();

  // const dmmf = prisma._baseDmmf;
  const adminOptions = {
    resources: [
      {
        resource: { model: getModelByName("user"), client: prisma },
        options: {},
      },
    ],
  };

  const admin = new AdminJS(adminOptions);

  const sessionStore = new MySQLStore({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
      name: "adminjs",
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  const schema = Joi.object({
    namaAtauInisial: Joi.string().max(100).required(),
    jenisKelamin: Joi.string().valid("LAKI_LAKI", "PEREMPUAN").required(),
    umur: Joi.number().integer().required(),
    nomorTelepon: Joi.string().max(15).required(),
    alamat: Joi.string().max(255).required(),
    asalFasilitasKesehatan: Joi.string().max(255).required(),
    mewakiliPengadu: Joi.boolean().required(),
    hubunganDenganPengadu: Joi.string().max(100).optional(),
    laporan: Joi.string()
      .valid("STIGMA_DAN_DISKRIMINASI", "PENDAMPINGAN")
      .required(),
    sumberStigma: Joi.string()
      .valid(
        "DIRI_SENDIRI",
        "KELUARGA",
        "MASYARAKAT_KOMUNITAS_SEKOLAH",
        "FASILITAS_KESEHATAN",
        "TEMPAT_KERJA"
      )
      .required(),
    waktuPengalaman: Joi.string().max(255).required(),
    pelakuStigma: Joi.string().max(255).optional(),
    keluhan: Joi.string().required(),
    status: Joi.string().required(),
  });

  app.use(express.json());

  app.post("/api/laporan", async (req, res) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    // const data = {
    //   idLaporan: uuidv4(),
    //   ...value,
    // };

    // console.log(data);


    try {
      console.log('Masuk try')
      const result = await prisma.LaporanStigmaDiskriminasiTBC.create({
        data: {
          ...value
        },
      });
      console.log('Setelah result')
      console.log(result)

      res.status(201).json(result);
      console.log(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while trying to create the data" });
    }
  });

  app.get("/api/laporan", async (req, res) => {
    try {
      const results = await prisma.LaporanStigmaDiskriminasiTBC.findMany();
      res.status(200).json(results);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while trying to retrieve the data" });
    }
  });

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
