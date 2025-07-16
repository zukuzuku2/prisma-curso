const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const updateUser = () => {
  prisma.user
    .update({
      where: {
        id: 6,
      },
      data: {
        lastname: "Benitez",
      },
    })
    .then((res) =>
      console.log(`${JSON.stringify(res)} y este seria el usuario actualizado`),
    );
};

module.exports = {
  updateUser,
};
