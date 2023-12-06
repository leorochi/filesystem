const fs = require('fs');

if(!fs.existsSync('./public')) {
  fs.mkdir('./public', (err) => {
    if(err) throw err;
    console.log('Diretório /public criado com sucesso!');
  })

  if(!fs.existsSync('./public/assets')) {
    fs.mkdir('./public/assets', (err) => {
      if(err) throw err;
      console.log('Diretório /assets criado com sucesso!');
    })
  }

  if(!fs.existsSync('./public/assets/imagens')) {
    fs.mkdir('./public/assets/imagens', (err) => {
      if(err) throw err;
      console.log('Diretório /imagens criado com sucesso')
    })
  }

  if(!fs.existsSync('./public/assets/videos')) {
    fs.mkdir('./public/assets/videos', (err) => {
      if(err) throw err;
      console.log('Diretório /videos criado com sucesso!');
    })
  }

  if(!fs.existsSync('./src')) {
    fs.mkdir('./src', (err) => {
      if(err) throw err;
      console.log('Diretório /src criado com sucesso!');
    })
  }

  if(!fs.existsSync('./src/components')) {
    fs.mkdir('./src/components', (err) => {
      if(err) throw err;
      console.log('Diretório /components criado com sucesso!');
    })
  }

    if(!fs.existsSync('./src/components/login')) {
      fs.mkdir('./src/components/login', (err) => {
        if(err) throw err;
        console.log('Diretório /login criado com sucesso!');
      })
    }
    
    if(!fs.existsSync('./src/components/home')) {
      fs.mkdir('./src/components/home', (err) => {
        if(err) throw err;
        console.log('Diretório /home criado com sucesso!!');
      })
    }
}
