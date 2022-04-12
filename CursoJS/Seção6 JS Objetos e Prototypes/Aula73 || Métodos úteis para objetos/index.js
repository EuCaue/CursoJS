/* 

Object.values => retorna os valores do objeto dentro de um array
Object.entries => retorna as chaves e valor em um array para cada...
Object.assign(des, any) => mesma coisa que ... de forma mais complexa
Objetct.getOwnPropertyDescriptor(o, 'prop') => pega as propriedades do defineProprieties
...(spread)

// Já visto...
Object.keys (retorna as chaves)
Object.Freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/ 


// Copiando o objeto para outra várivel com ...(spread)
// se não usar o spreed seria um váriavel apontando para o mesmo lugar da outra na memória

const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = {...produto};
// Object.assign faz a mesma coisa que o spread operator... 
const outroExemplo = Object.assign({}, produto, {material: 'porcelana'});
// Pior forma/ forma mais manual... 
const piorForma = {nome: produto.nome, preco: produto.preco};

// Congela completamento o objeto...
Object.freeze(produto);


outraCoisa.nome = 'Copo'; 
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa); 
// Retorna um array das chaves do seu objeto.
console.log(Object.keys(produto));

// Serve para pegar todas as propriedades do objetos definidas por Object.defineProperty/ies... 
// Passando o nome do objeto, e podendo passar a chave do objeto também...
console.log(Object.getOwnPropertyDescriptor(produto));

// Retorna somente os valores do objeto...
console.log(Object.values(produto));
// Retorna a chave e o valor dela em array.
// Cada chave e seu respectivo valor tem um array especifico.
console.log(Object.entries(produto));

