// Filter, map, reduce.


 const numeros = [5, 10, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 // metodo sem filter
//  let total = [];
//  for (const valor of numeros) {
    //  if (valor >= 10 ) {
        //   total.push(valor);
        //   console.log(valor);
    //  }
//  }







//  Precisar passar no filter uma função, podendo ser anonima ou arrow function, que recebe valor, indice e array, não obrigatório, somente oque for usar. 
//  E tem que retornaR um valor booleano.
//  Se for para adicionar o valor no novo Array, Deve retorna true, e false para não adicionar. 
//  Se o valor for so return true, usar somente return com o a condição.
// const numF = numeros.filter( (valor, indice, array) => {
    // console.log(valor, indice, array);
    // return valor > 10;  
// })
// console.log(numF);



const pessoa = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


// Cria um novo array com os valores que foram filtrados
// Pode receber valor, indice e array.
// Não obrigatórios.
// tem que que retornar true or false.
const nomeG = pessoa.filter( valor => valor.nome.length >= 5)

// Pessoas que tem mais de 50 anos
const idadeMais = pessoa.filter( (obj) => { 
    return obj.idade > 50; 
});

// Pessoa com a letra do final A
const nomeA = pessoa.filter( obj => obj.nome.toLowerCase().endsWith('a')); 


console.log(nomeA);