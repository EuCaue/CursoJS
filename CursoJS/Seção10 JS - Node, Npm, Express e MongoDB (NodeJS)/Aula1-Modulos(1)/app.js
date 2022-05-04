//* Importar modulos do Node, não precisa de caminho
//* e somente do nome do modulo 
const path = require('path');
const axios = require('axios');


axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});


//? Importando todo o modulo
const mod1 = require('./mod1');
//? Importando somente um modulo do modulo 
const qualquerCoisa = require('./mod1').qualquerCoisa;
//? Pegando somente um chave do modulo exportado. 
const nome = mod1.nome; 
//? Importando com atribuição por desestruturação 
const { sobrenome, falaNome} = require('./mod1');
const { Pessoa } = require('./mod1');
const {config} = require('process');
const p1 = new Pessoa('Cauê');

mod1.falaNome()
console.log(qualquerCoisa);
console.log(sobrenome);
console.log(p1);
