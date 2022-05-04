//? Importando como default do modulo1 
//? Quando não for um arquivo JS, colocar a extensão
const multi = require('./mod1');
const path = require('path');


console.log(multi(2, 2));

//Caminho absoluto até o arquivo
console.log(__filename);
//Caminho absoluto até o diretorio do arquivo 
console.log(__dirname);

// 'Resolvendo" o caminho idenpendente do sistema
// Ele vai ter levar para esse diretorio corretamente
//? Pode ser passado parametros de diretorio
//? COmo por exemplos, voltando duas pastas 
console.log(path.resolve(__dirname, '..', '..'));