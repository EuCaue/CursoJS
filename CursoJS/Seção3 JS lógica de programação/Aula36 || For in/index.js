// For in -> lê os índices ou chaves  do objeto.
//                0      1         2 
const frutas = ['Pera', 'Maçã', 'Uva']; 

const pessoa = {
    nome: 'Cauê',
    sobrenome: 'Souza',
    idade: 18,
};

// metodo padrão de acessar uma chave do objeto.
// console.log(pessoa.nome);

// metódo de acessar chave do objeto, parecido com array. suporta valor de variável.
//console.log(pessoa['nome']);

 //for let in com objeto/ ele pecorre as chaves
 for (let i in pessoa){;
    console.log(i,pessoa[i]);
};


// for in com array 
//for (let i in frutas)  {
//    console.log(i) ;
//}

// for classico com array
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }