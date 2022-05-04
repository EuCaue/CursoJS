//? Chamando o fs do node
const fs = require('fs').promises;
const path = require('path');

//*  Resolvendo o caminho do diretório e lendo os arquivos deles
async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  //? Retorna um array com os nomes dos arquivos 
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

//* Logando todos os arquivos que existe
async function walk(files, rootDir) {
  // Iterando em cada arquivo dos arquivos
  for (let file of files) {
    //* Resolvendo o caminho completo
    const fileFullPath = path.resolve(rootDir, file);
    //* Status do caminho completo
    const stats = await fs.stat(fileFullPath);
    //* Se for um direto, retorna true

    //* Se for true, ele vai retornar para a função
    //* E ir para a próxima iteração do laço
    if (/\.git/g.test(fileFullPath)) continue;
    if (/\node_modules/g.test(fileFullPath)) continue;
    
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if (!/\.css$/g.test(fileFullPath)) continue;
    console.log(fileFullPath);
  }
}

readdir('/home/caue/CursoJS/CursoJS/');
