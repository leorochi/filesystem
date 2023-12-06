/*const fsPromises = require('fs').promises
const path = require('path');

const firstPath = 'public/assets'
const secondPath = 'src/components'

const fileOps = async () => {
  try {
    await fsPromises.writeFile(path.join(__dirname, `${firstPath}/imagens`, 'img1.txt',), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${firstPath}/imagens`, 'img1.txt'), 'Content da IMG1');
    await fsPromises.writeFile(path.join(__dirname, `${firstPath}/imagens`, 'img2.txt',), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${firstPath}/imagens`, 'img2.txt'), 'Content da IMG2');
    
    await fsPromises.writeFile(path.join(__dirname, `${firstPath}/videos`, 'mp4.txt',), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${firstPath}/videos`, 'mp4.txt'), 'Content MP4');
    await fsPromises.writeFile(path.join(__dirname, `${firstPath}/videos`, 'mp4.txt',), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${firstPath}/videos`, 'mp4.txt'), 'Content MP4');

    await fsPromises.writeFile(path.join(__dirname, `${secondPath}`, 'app.txt'), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${secondPath}`, 'app.txt'), 'React APP');
    await fsPromises.writeFile(path.join(__dirname, `${secondPath}/login`, 'login.txt'), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${secondPath}/login`, 'login.txt'), 'User Login');
    await fsPromises.writeFile(path.join(__dirname, `${secondPath}/login`, 'loginCSS.txt'), 'utf-8');
    await fsPromises.appendFile(path.join(__dirname, `${secondPath}/login`, 'loginCSS.txt'), ' Style User Login');
    
    
  } catch(err) {
    console.error(err);
  }
}

fileOps();*/