const { crearDatos } = require('./controllers/create.controller');
const { deleteUser } = require('./controllers/delete.controller');
const { listarUsuarios } = require('./controllers/lista.controller');
const { updateUser } = require('./controllers/modify.controller');
const { upsertFunction } = require('./controllers/upsert.controller');
const {
  postUser,
  primeraCoincidencia,
} = require('./controllers/relationships.controller');
const { listPost, usersPosts } = require('./controllers/list.post.controller');

/* crearDatos().catch((err) =>
  console.error(`Error en ${err.message} en el modulo ${err.meta.modelName}`),
); */
// listarUsuarios();

// deleteUser();

// updateUser()
//
// upsertFunction();

// postUser();
// primeraCoincidencia();
//
// listPost();
// usersPosts();
