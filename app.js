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

//crearDatos()

async function listarUsuarios() {
  const listUser = await prisma.User.findMany(); //--> devuelve un arreglo de todos los usuarios
  console.log(listUser);
}

//listarUsuarios()

// devuelve un objeto con la primera coincidecia de lo que esta dentro del where
// Tambien puedo pasrle otro campo que no sea el id como por ejemplo el name pero hay que respetar las mayusculas y las minusculas
/* const primeraCoincidencia =  prisma.user.findFirst({
  where: {
    id: 2,
  },
}).then((res)=> {
	console.log(res);
}); */


// primeraCoincidencia;




// Al tener mas de 1 parametro el where ellos deben coincidir con el registro exacto, de lo contratio devolvera 1 null, ademas este metodo tambien devuelve un objeto con el user exacto o simplemente un null

/* const coincidenciaExacta = prisma.user
  .findFirst({
    where: {
      id: 3,
      name: "Elisa",
    },
  })
  .then((res) => {
    console.log(res);
  });


coincidenciaExacta */



/* // Este OR encuentra 1 u otro en dependencia del que encuentre primero

const unouOtro = prisma.user
  .findFirst({
    where: {
	    OR: [
		    {id: 1},
		    {name: "Elisa"}
	    ]
    },
  })
  .then((res) => {
    console.log(res);
  });


unouOtro */




// Este AND se comporta exatamente igual que la const coincidenciaExacta si no coincide pues sensillamente devuelve null

const unoyOtro = prisma.user
  .findFirst({
    where: {
	    AND: [
		    {id: 1},
		    {name: "Elisa"}
	    ]
    },
  })
  .then((res) => {
    console.log(res);
  });


unoyOtro 








