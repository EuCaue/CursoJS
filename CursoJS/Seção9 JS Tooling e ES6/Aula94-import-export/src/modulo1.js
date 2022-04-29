const nome = 'Halry';
const sobrenome = 'Henry';
const idade = 18;

//? Senão estiver exportando a variável, ele fica privada para o modulo dela.
const cpf = '123.123.123-45'


//? export default, é a propriedade que sempre será exportada por padrão
//? e não precisa usar o mesmo nome para importar e nem chaves
//! Somente um padrão por modulo é permitido
//! export default function helloWorld() { 
//!   console.log('Olá mundo, valor default');
//! }

export  function helloWorld() { 
  console.log('Olá mundo, valor default');
}

// Exportando diretamente a variável/objeto/função/classe
export const diretoExport = 'Exportando diretamente' 

function soma(x, y) { 
  return x + y;
}

// Exportando as variáveis para outros arquivos...
//* Exportando sobrenome, com outro nome de variável 
//* Exportando um conjunto de variaveis, tendo uma como default
export { helloWorld as default, nome, sobrenome as sobrenome2, idade, soma };

// Exportando diretamente
export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}