const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient(); // --> conexion a prisma

async function crearDatos() {
  const newUser = await prisma.User.create({
    data: {
      name: "Maytee",
      email: "maytee@gmail.com",
    },
  });
  console.log(newUser);
}

crearDatos();
