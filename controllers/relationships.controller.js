const { PrismaClient } = require('../generated/prisma');
const { primeraCoincidencia } = require('./find.controller');

const prisma = new PrismaClient();

// primeraCoincidencia(2, true);

const postUser = () => {
  primeraCoincidencia(2, false).then((res) => {
    return prisma.post.create({
      data: {
        title: 'Primer post para Jose',
        content: 'Primer contenido para Jose',
        author: {
          connect: {
            id: res.id,
          },
        },
      },
    });
  });
};

/* const postUser = () => {
  primeraCoincidencia().then((res) => {
    return prisma.post.create({
      data: {
        title: "Primer post para Jose",
        content: "Primer contenido para Jose",
        author: {
          connect: {
            id: res.id,
          },
        },
      },
    });
  });
}; */

// Tambien se puede hacer de esta manera pero solo que se puede relacionar directamente el id pero como el modelo Post tiene mas parametros prefiero hacerlo de la manera anterior
/* const postUser = () => {
  primeraCoincidencia().then((res) => {
    return prisma.post.create({
      data: {
        title: 'Primer post para Jose',
        content: 'Primer contenido para Jose',
        authorId: res.id,
      },
    });
  });
}; */

module.exports = {
  postUser,
  primeraCoincidencia,
};
