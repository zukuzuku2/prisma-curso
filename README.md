### Prisma es un paquete que nos permite interactuar con la base de datos (ORM)

## Pasos

1. Instalar nodejs en el caso de que no este instalado --> https://nodejs.org/es
2. Ejecutar npm init -y
3. Instalar el modulo de prisma --> npm i prisma -D para Instalar como dependencia de desarrollo
4. Inicializar la configuracion de prisma con --> npx prisma init que por defecto trabaja con postgressql inicializa por defecto con postgressql
5. Definir la opcion --datasource-provider + provider siendo provider una de las siguientes opciones sqlite, postgressql, mysql, mongodb etc
6. Automaticamente se crea la carpeta prisma con el fichero schema.prisma
7. Se crea el fichero .env que por lo general se crea en la raiz donde se establece la URL de la base de datos   


## Prisma
1. npx prisma migrate --> espera 2 banderas -dev o produccion
2. Instalar SQLiteViewer en caso de que estemos en VSCode sino buscar otro gestor de BBDD
3. @prisma/client es el modulo que nos permite sincronizar el codigo de JS o TS con la BBDD
