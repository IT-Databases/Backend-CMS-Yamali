import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { PrismaClient, Prisma } from "@prisma/client";
import * as AdminJSPrisma from "@adminjs/prisma";
// import { DMMFClass } from "@prisma/client/runtime";
import { createRequire } from "module";
import { user } from './user.entity.js' 
const require = createRequire(import.meta.url);
const MySQLStore = require("express-mysql-session")(session);



dotenv.config();

const PORT = 3000;

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

AdminJS.registerAdapter(AdminJSPrisma);

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
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

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null});
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
    resources: [{ resource: user, options: {} }],
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

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
