const pessoa = {
    nome: 'Cauê',
    sobrenome: 'Souza',
    idade: 18,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação.
//valor em fallback para caso não exista valor no nome
//para mudar o nome da variável que vem do objeto
// const { nome, sobrenome,} = pessoa
// console.log(nome, sobrenome,);

// Pegando o valor de um objeto dentro de outro, a variavel de enderoço, não existe, somento rua e numero.
// const { endereco: {rua: r = '12345', numero}, endereco} = pessoa
const { nome, sobrenome, ...resto } = pessoa; 
console.log(nome, sobrenome, resto);