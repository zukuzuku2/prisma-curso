const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient(); // --> conexion a prisma




// Siempre de esta manera se puede borra los registros, pero al id ser unico e incrementalentonces siempre va a haber que recuperar el id o el campo asociado a el delete que querramos hacer y que coincida con los registros, de lo contratio lanzara un error que se puede manejar en un catch para que no se caiga la app

const deleteUser = () => {
  prisma.user
    .delete({
      where: {
        id: 4,
      },
    })
    .then((res) =>
      console.log(`${JSON.stringify(res)} este es el Elemento borrado`),
    )
    .catch((err) => console.error(err.message));
};

module.exports = {
  deleteUser,
};
