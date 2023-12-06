const fsPromises = require('fs').promises;
const { readFile } = require('fs');
const path = require('path');


const crud = {
  posts: [],
  async create({id, content}) {
    const dados = {id, content};
    console.log(crud.posts);
    crud.posts.push(dados);
    await fsPromises.writeFile(path.join(__dirname, 'crud.json'), JSON.stringify(crud.posts), 'utf-8');
  },
  async read() {
    const data = await fsPromises.readFile(path.join(__dirname, 'crud.json'), 'utf-8');
    crud.posts = JSON.parse(data);
    return crud.posts;
  }
}

async function run() {
  //Read
  console.log('Leitura do arquivo', await crud.read());

  //Create
  await crud.create({id: Date.now(), content: 'Olá pessoas'});
  console.log('Leitura do arquivo após a criação', await crud.read());
}

run();