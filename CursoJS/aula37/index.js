 
 const pessoa = {
     nome: 'Cauê',
     sobrenome: 'Souza',
     idade: 18,
 }


// For clássico - Geralmente com iteraveis (Arrays ou strings)
// For in - Retorna o índice ou chave (strings ou com array, ou objetos.)
// For of - Retorna o valor em sí (Iteraveis, arrays ou strings)

 // for in, serve para pegar chave e o alor da chave em objetos.
 // for (let key in pessoa) {
 //     console.log(key, pessoa[key]);
 // };

 // for of não funciona em objeto
 for (let valor of pessoa){
     // error pessoa não é iteravel
 }


//// for clássico para pegar o indice do array.
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }
//
// // for moderno para pegar o indice do array
// for (let i in nome) {
//     console.log(nome[i]);
//  }
//// Retorna o valor do array, não o indice, útil para quando se precisar do valor do array, não indice.
// for (let v of nome) {
//     console.log(v);
// } 
//
// // forEach é um outro metodo de pegar o valor o indice e o array completo.
// nome.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });