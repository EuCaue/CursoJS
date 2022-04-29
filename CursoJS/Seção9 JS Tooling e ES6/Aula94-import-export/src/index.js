// 1
// 2
// 3

// Importanto do modulo1 as variáveis dele
//* import as, serve para importa a variável com outro nome para o seu .js
//* Caso já exista uma com aquele nome de variável 

//? Importando todas as variaveis que existem
//? como objeto com todas dentro dela
import * as todosAsVar from "./modulo1"

//? Importando variável por variável do arquivo 
import { nome as nome2, sobrenome2, idade, soma, Pessoa} from './modulo1';

//? Importando o valor padrão do modulo um
//? para valores padrão não precisa de nome especifico, e nem de chaves
//? Pode tambem importar os valores + default 
import valorPadrao from './modulo1'

const nome = 'Caue';

// Utilizando a classe importada
const p1 = new Pessoa('Alvaro', 'Soares');

console.log(` Nome1: ${nome}\n Nome2: ${nome2}\n Sobrenome: ${sobrenome2}\n Idade: ${idade}\n`);
console.log(`P1: ${p1.nome} ${p1.sobrenome}`);
console.log(soma(5, 5));
console.log(todosAsVar);
console.log(valorPadrao);