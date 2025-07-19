# Prisma es un paquete que nos permite interactuar con la base de datos (ORM)

### Pasos

1. Instalar nodejs en el caso de que no este instalado --> https://nodejs.org/es
2. Ejecutar npm init -y
3. Instalar el modulo de prisma --> npm i prisma -D para Instalar como dependencia de desarrollo
4. Inicializar la configuracion de prisma con --> npx prisma init que por defecto trabaja con postgressql inicializa por defecto con postgressql
5. Definir la opcion --datasource-provider + provider siendo provider una de las siguientes opciones sqlite, postgressql, mysql, mongodb etc
6. Automaticamente se crea la carpeta prisma con el fichero schema.prisma
7. Se crea el fichero .env que por lo general se crea en la raiz donde se establece la URL de la base de datos
8. Cada vez que se agregue un modelo nuevo hay que hacer una migracion para ello utilizamos el comando del paso anterior pero con la bandera dev --> npx prisma migrate dev

### Prisma

1. npx prisma migrate --> espera 2 banderas -dev o produccion
2. Cada vez que se agregue un modelo nuevo hay que hacer una migracion para ello utilizamos el comando del paso anterior pero con la bandera dev --> npx prisma migrate dev
3. Instalar SQLiteViewer en caso de que estemos en VSCode sino buscar otro gestor de BBDD
4. @prisma/client es el modulo que nos permite sincronizar el codigo de JS o TS con la BBDD

### Crear Datos

1. @prisma/client --> siempre se utiliza para comenzar con la importacion import {(Modulos de Prisma)} from "@prisma/client"
2. El modulo PrismaClient es la propia conexion a Prisma no tengo que utilizar ningun parametro adicional como en mongoose

### Upsert

#### upsert nos permite buscar un dato que si existe lo va a actualizar y sino existe lo va a crear

1. where:{} buscar el dato
2. create:{} donde se le pasa el dato a crear en caso de que no exista lo buscado en el where
3. update:{} donde se le pasa los datos a modificar en caso de que exista

## Estructura Upsert

prisma.model.upsert({
where:{
},
create:{
},
update:{
},
})

### Relacionar datos

1. Se logra mediante una propiedad que relaciona 2 modelos como por ejemplo
   ** author User @relation (fields: [authorId], references: [id]) **
   a. User --> el modelo con el cual queremos Relacionar.
   b. fields --> hace referencia al campo authorId del propio modelo que es el que vamos a relacionar.
   c. references --> hace referencia al campo del otro modelo con el que vamos a relacionar.
2. Hay que agregar los campos de relacion en ambos modelos

#### Resumen

En el modelo **Post** el campo **author** se va a relacionr con el modelo **User** y los campos que se van a relacionar son **authorId** que seria del modelo **Post** con **id** que seria del modelo **User**

## Listar datos relacionados
1. Se declara una funcion asincrona donde se listan los usuarios dentro como parametro del metodo findMany se le pasa una propiedad **include: {}** y dentro de las llaves se le especifica el valor relacionado con en el siguiente ejemplo
    a. prisma.user.findMany({
        include: {
        post: true, --> propiedad que relaciona el modelo **User** con el modelo **Post** que no es lo mismo que *post* ya que este es la propiedad a la que hacer referencia la relacion
        },
        })
