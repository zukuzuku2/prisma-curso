const { crearDatos } = require("./controllers/create.controller");
const { deleteUser } = require("./controllers/delete.controller");
const { listarUsuarios } = require("./controllers/lista.controller");

crearDatos().catch((err) =>
  console.error(`Error en ${err.message} en el modulo ${err.meta.modelName}`),
);
listarUsuarios();

deleteUser();
