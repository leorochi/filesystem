const fs = require('fs').promises;
const path = require('path');
const esprima = require('esprima');

async function listaConteudoDoDiretorio(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        console.log(`Diretório: ${filePath}`);
        await listaConteudoDoDiretorio(filePath);
      } else {
        console.log(`Arquivo: ${filePath}`);
        await listaMetodosDoArquivo(filePath);
      }
    }
  } catch (err) {
    console.error('Erro ao processar o diretório:', err);
  }
}

async function listaMetodosDoArquivo(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const parsed = esprima.parseScript(fileContent, {loc: true});
    const methods = parsed.body
    .filter(node => node.type === 'FunctionDeclaration')
    .map(method => method.id.name);

    if(methods.length > 0) {
      console.log(`Métodos em ${filePath}: ${methods.join(', ')}`);
    } else {
      console.log(`Nenhum método encontrado em ${filePath}`)
    }
  } catch (err) {
    console.error(`Erro ao analisar o arquivo ${filePath}`, err);
  }
}

const directoryPath = './dir1';
listaConteudoDoDiretorio(directoryPath);
