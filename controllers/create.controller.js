const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient(); // --> conexion a prisma

 async function crearDatos() {
  const newUser = await prisma.User.create({
    data: {
      name: "Yoandri",
      email: "yoandri@gmail.com",
    },
  });
  console.log(newUser);
}

module.exports = {
	crearDatos
}
