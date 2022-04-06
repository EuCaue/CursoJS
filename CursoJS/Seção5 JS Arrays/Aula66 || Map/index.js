// Map vai alterar os valores do array
// Vai retonar um array com a mesma 

// Dobre os numeros 

const numeros = [5, 10, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,];

// Tudo que se aplica a filter se aplica em Map, menos o retorno final.
// map, modifica o array que foi usado.
// recebe uma função que recebe valor, indice, array
// map vai sempre ter o tamanho do array original. 
// Porém, não com os mesmo valores.
const numerosDobro = numeros.map( (valor) => {
    return valor * 0;
})

// console.log(numerosDobro);

const pessoa = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


// Retorna apenas o nome do objeto.
const nomes = pessoa.map( (obj) => {
    return obj.nome
});

// remove a chave do nome, do objeto.
const pessoaSemChave = pessoa.map( (obj) => {
    delete obj.nome
    return obj
})

// Adiciona um nova chave ao objeto
// E da um valor aleatório.
const pessoaID = pessoa.map( (obj) => {
     obj.id = Math.random() * 10 
     return obj;
})

console.log(pessoaID);

