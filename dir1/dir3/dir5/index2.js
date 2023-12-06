const fsPromisse = require('fs').promises;
const path = require('path');
const type = 'utf-8'

//Função para copiar um arquivo
async function copiarArquivo(origem, destino) {
  try {
    const conteudo = await fsPromisse.readFile(origem, type);
    await fsPromisse.writeFile(destino, conteudo, type);
  } catch(err) {
    console.error(`Erro ${err} ao copiar arquivos!`);
  }
}

// Função para criar um novo componente com base nos modelos
 async function criarComponente(nomeComponente) {
  const diretorioDestino = path.join(__dirname, nomeComponente);

  //Criar diretório destino
  await fsPromisse.mkdir(diretorioDestino);

  //Copia os arquivos de template
  copiarArquivo(path.join(__dirname, 'templates', 'component.js'), path.join(diretorioDestino, `${nomeComponente}.js`));
  copiarArquivo(path.join(__dirname, 'templates', 'styles.css'), path.join(diretorioDestino, 'styles.css'));
  copiarArquivo(path.join(__dirname, 'templates', 'test.js'), path.join(diretorioDestino, `${nomeComponente}.test.js`));

  console.log(`Componente ${nomeComponente} criado com sucesso em ${diretorioDestino}`)
}

const nomeComponente = process.argv[2];

if(!nomeComponente) {
  console.error('Por favor, forneça  um nome para o componente');
} else {
  criarComponente(nomeComponente);
}
