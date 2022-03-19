/*
Primitivos (Imutaveis) - string, number, boolean, undefined, null, (biginit, symbol) VALORES

Referência (mutável) - array, object, function => passados por referencia. 


*/ 




/* VALORES PRIMITIVOS
 let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);


let a = 'A';
let b =  a; // Cópia  
console.log(a, b);

a = 'Outra Coisa'
console.log(a, b); */

// REFERÊNCIA

// OS DOIS APONTAM PARA O MESMO LUGAR NA MEMÓRIA!!!1
// usando [...X] {...X} você copia os valores da referencia. 

/* let a = [1, 2, 3];
let b = [...a];
let c = b; 
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);*/


const a = {
    nome: 'Cauê',
    sobrenome: 'Souza',
};

const b = {...a};

a.nome = 'João';
console.log(b);

