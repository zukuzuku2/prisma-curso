const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const upsertFunction = () => {
  prisma.user
    .upsert({
      where: {
        email: "jose@gmail.com",
      },
      create: {
        name: "Jose",
        email: "jose@gmail.com",
      },
      update: {
        lastname: "Santos",
      },
    })
    .then((res) =>
      console.log(
        `${JSON.stringify(res)} esto me debiese devolver la actualizacion`,
      ),
    )
    .catch((err) => console.log(err.message));
};

module.exports = {
  upsertFunction,
};
