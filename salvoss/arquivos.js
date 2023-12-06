//Construa um script que organiza automaticamente os arquivos em um diretório, movendo-os para subdiretórios com base em critérios como tipo de arquivo ou data de modificação.

const fs = require('fs');
const path = require('path');

const diretorioOrigem = './diretorio_a_organizar';

// Função para criar um diretório se não existir
function criarDiretorioSeNaoExistir(diretorio) {
  if (!fs.existsSync(diretorio)) {
    fs.mkdirSync(diretorio);
  }
}

// Lê os arquivos no diretório de origem
fs.readdir(diretorioOrigem, (err, arquivos) => {
  if (err) {
    console.error(`Erro ao ler o diretório: ${err}`);
    return;
  }

  // Loop através dos arquivos
  arquivos.forEach((arquivo) => {
    const caminhoArquivo = path.join(diretorioOrigem, arquivo);

    // Ignora diretórios, se necessário
    if (fs.statSync(caminhoArquivo).isDirectory()) {
      return;
    }

    // Obtém a extensão do arquivo
    const extensao = path.extname(arquivo).toLowerCase();

    // Cria o diretório correspondente à extensão, se ainda não existir
    const diretorioDestino = path.join(diretorioOrigem, extensao.slice(1)); // Ignora o ponto na extensão
    criarDiretorioSeNaoExistir(diretorioDestino);

    // Move o arquivo para o diretório correspondente
    const novoCaminho = path.join(diretorioDestino, arquivo);
    fs.renameSync(caminhoArquivo, novoCaminho);
    console.log(`Movido ${arquivo} para ${diretorioDestino}`);
  });

  console.log('Organização concluída!');
});