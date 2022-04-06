

const numeros = [5, 10, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,];
// Reduce é usada normalmente para reduzir o array um único elemento.
// reduce, recebe uma função que tem acumulador indice, valor e o array inteiro...
// Acumulador sempre que for retornado, manterá seu valor.
// Senão for retornado, ele virará undefined.
// Papel do reduce, é reduzir um array à um único elemento.
// O  valor do acumulador é dado no final das {} da função, podendo ser passado um array, para retornar um array.
const total = numeros.reduce( (acumulador, valor, indice, array,) => {
    return acumulador += valor
}, 0)

// console.log(total);



// Retorne a pessoa mais velha
const pessoa = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// O acumulador recebe o objeto ou array, senão for passado parametro inicial diferente.
// apenas retornando a pessoa mais velha.
// Para cada looping do acumulador, ele recebe um objeto do array
// Assim, comparando se o valor salvo no acumulador, será comparado com o valor do objeto.

const pessoaVelha = pessoa.reduce( (acumulador, obj, indice, array,) => {
    console.log(obj,acumulador);

    if (acumulador.idade > obj.idade) return acumulador

    
});

console.log(pessoaVelha);