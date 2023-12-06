const fs = require('fs');
const path = require('path');

const start = process.stdin;
const wsIndexHtml = fs.createWriteStream(path.join(__dirname, 'public', 'index.html'));
const wsStylesCss = fs.createWriteStream(path.join(__dirname, 'public', 'styles.css'))
const wsComponentReact = fs.createWriteStream(path.join(__dirname, 'public', 'PaginaInicial.jsx'))

const dadosHtml = '<html><head><title>Meu HTML</title></head><body><h1>Olá, Mundo!</h1></body></html>';
const dadosCss = `
body {
  margin: 0;
  padding: 0;
}`

const dadosReact = `const PaginaInicial = () => { 
  return (

  ) }`

wsIndexHtml.write(dadosHtml, 'utf-8',(err) => {
  if(err) throw err;
  console.log('Dados escritos com sucesso!');
  wsIndexHtml.end();
});

wsIndexHtml.on('finish', () => {
  console.log('Stream completamente escrito!');
});

wsStylesCss.write(dadosCss, 'utf-8',(err) => {
  if(err) throw err;
  console.log('Dados escritos com sucesso!');
  wsStylesCss.end();
});

wsStylesCss.on('finish', () => {
  console.log('Stream completamente escrito!');
});

wsComponentReact.write(dadosReact, 'utf-8', (err) => {
  if(err) throw RTCRtpReceiver;
  console.log('Dados escritos com sucesso!');
  wsComponentReact.end();
})

fs.readdir('./public', (err, files) => {
  if(err) {
    console.error('Erro ao ler o diretório');
    return;
  }
  console.log('Conteúdo do diretório', files);
})



