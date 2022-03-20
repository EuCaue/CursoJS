// let a = 'A';
// let b = 'B';
// let c = 'C';
// const numeros = [1, 2, 3];
// 
// [a, b, c] = numeros
// 
// console.log(a,b,c);



// Pega os valores do array que coloca nas variaveis, respctiviamanete. ...resto, recebe todo o valor "restante" do array.
//                      ...rest quando for no sentido de pegar o resto ...spread no sentido de "espalhar", dividir o "resto".

// Pula o valor do array, pegando um valor vázio
// const [um, ,tres, ,cinco, , sete] = numeros;


//console.log(um, tres, cinco);

//                   0          1            2              
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9,] ];
const [lista1, lista2, lista3] = numeros
console.log(lista3[2]);