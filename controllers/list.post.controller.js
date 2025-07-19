const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const getPosts = () => {
  return prisma.user.findMany({
    include: {
      post: true,
    },
  });
};

const listPost = () => {
  getPosts().then((res) => console.log(res));
};

const usersPosts = () => {
  getPosts().then((res) => {
    res.map((usr) => {
      if (usr.post != 0) {
        console.log('=========================');
        console.log(usr.name);
        console.log(usr.email);
        usr.post.map((res, index) => {
          const { id, title, content } = res;
          console.log(`${index}. \n Titulo: ${title} \n Contenido: ${content}`);
        });
      }
    });
  });
};

module.exports = {
  listPost,
  usersPosts,
};
