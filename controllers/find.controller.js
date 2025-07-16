const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient(); // --> conexion a prisma

// devuelve un objeto con la primera coincidecia de lo que esta dentro del where
// Tambien puedo pasrle otro campo que no sea el id como por ejemplo el name pero hay que respetar las mayusculas y las minusculas
const primeraCoincidencia = ()=> prisma.user
  .findFirst({
    where: {
      id: 2,
    },
  })
  .then((res) => {
    console.log(
      `${JSON.stringify(res)}  primeraCoincidencia que corresponde al primero que tenga el id 2 en este caso`,
    );
  });

// Al tener mas de 1 parametro el where ellos deben coincidir con el registro exacto, de lo contratio devolvera 1 null, ademas este metodo tambien devuelve un objeto con el user exacto o simplemente un null

const coincidenciaExacta = ()=> prisma.user
  .findFirst({
    where: {
      id: 3,
      name: "Elisa",
    },
  })
  .then((res) => {
    console.log(
      `${JSON.stringify(res)} coincidenciaExacta que corresponda exactamente con lo que esta dentro del where`,
    );
  });

/* // Este OR encuentra 1 u otro en dependencia del que encuentre primero

const unouOtro = ()=> prisma.user
  .findFirst({
    where: {
	    OR: [
		    {id: 1},
		    {name: "Elisa"}
	    ]
    },
  })
  .then((res) => {
    console.log(`${JSON.stringify(res)} el primero que corresponda a 1 u otro de lo que esta dentro del where`);
  });


unouOtro */

// Este AND se comporta exatamente igual que la const coincidenciaExacta si no coincide pues sensillamente devuelve null

const unoyOtro = ()=> prisma.user
  .findFirst({
    where: {
      AND: [{ id: 1 }, { name: "Elisa" }],
    },
  })
  .then((res) => {
    console.log(
      `${JSON.stringify(res)} unoyOtro se comporta de la misma manera que el res de la coincidencia exacta`,
    );
  });

module.exports = {
  unoyOtro,
  primeraCoincidencia,
  coincidenciaExacta,
};
