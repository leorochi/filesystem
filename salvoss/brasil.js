const fs = require('fs');
const path = require('path');

const dados = [
  { estado: 'SP', cidade: 'São Paulo' },
  { estado: 'SP', cidade: 'Campinas' },
  { estado: 'RJ', cidade: 'Rio de Janeiro' },
  // Adicione mais dados conforme necessário
];

function criarArquivosPorEstado(dados) {
  // Agrupar cidades por estado
  const cidadesPorEstado = {};

  dados.forEach((registro) => {
    const { estado, cidade } = registro;
    if (!cidadesPorEstado[estado]) {
      cidadesPorEstado[estado] = [];
    }
    cidadesPorEstado[estado].push(cidade);
  });

  // Criar arquivos JSON para cada estado
  for (const estado in cidadesPorEstado) {
    const nomeArquivo = `${estado}.json`;
    const caminhoArquivo = path.join(__dirname, nomeArquivo);
    const conteudo = JSON.stringify(cidadesPorEstado[estado]);

    fs.writeFileSync(caminhoArquivo, conteudo, 'utf-8');
    console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
  }
}

// Chamada da função
criarArquivosPorEstado(dados);