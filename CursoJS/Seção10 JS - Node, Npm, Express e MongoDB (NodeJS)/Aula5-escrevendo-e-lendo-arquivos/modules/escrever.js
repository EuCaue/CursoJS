const fs = require('fs').promises;
//! const path = require('path');
//! const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');




//! const pessoas = [
//!   {nome: 'João'},
//!   {nome: 'Maria'},
//!   {nome: 'Eduardo'},
//!   {nome: 'Luiza'},
//! ]


//! JSON.stringify() Primeiro parametro é o valor que você quer transformar em uma string de JSON, podendo ser uma variável com as informações
//! segundo é o espaçamento, 
//! terceiro é a identação

//* Transforma o array, em uma string de "JSON", com um espaço em branco a cada {} e 2 de identação
// const json = JSON.stringify(pessoas, '', 2);

//! JSON.parse(jsonfile), transforma de JSON, para objeto JS 
// const jsonC = JSON.parse(json)




module.exports = (caminho, dados) => {
  //?  Caminho do arquivo onde vai ser escrito
//?  O que vai ser escrito nesse arquivo
//? Opções opcionais 
//* Não quebra a linha por padrão 
fs.writeFile(caminho, dados, {
  //*flag 'w', serve para apagar tudo que estiver dentro do arquivo, e reescrever.
  flag: 'w',

  //* flag 'a', para sempre escrever junto que o que já tem no arquivo
  // flag: 'a',
  //* por padrão já é utf-8
  encoding: 'utf8',
});
}