const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];


//* Transforma o array, em uma string de "JSON", com um espaço em branco a cada {} e 2 de identação
const json = JSON.stringify(pessoas, '', 2);

//* Usando a função que escree um arquivo
//? @param caminho, dados
escreve(caminhoArquivo, json);

//? Função para ler o arquivo com async
async function lerArquivo(caminho) {
  //? "Esperando"  e lendo os dados 
  const dados = await ler(caminho);
  // Logando os dados
  renderizaDados(dados);
}

function renderizaDados(dados) { 
  //? Transformando o JSON para objeto JS novament
  dados = JSON.parse(dados);
  // for(let nome of dados) {
  //   console.log(nome);
  // }
  //? Exbindo cada chave do OBJETO
  dados.forEach(val => console.log(val.nome))
 } 

const dadosArquivo = lerArquivo(caminhoArquivo)
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e));