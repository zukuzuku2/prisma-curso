const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient(); // --> conexion a prisma

async function listarUsuarios() {
  const listUser = await prisma.user.findMany(); //--> devuelve un arreglo de todos los usuarios
  console.log(listUser);
}

module.exports = {
  listarUsuarios,
};
