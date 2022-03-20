/* Tipos dados primitivos:
    String, number, undefined, null, boolean, symbol.
*/
const nome  = 'Cauê'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta para local nenhum na memória.
let sobrenomeAluno = null; // Nulo = não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2