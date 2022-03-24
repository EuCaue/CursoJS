/*function falaFrase (comeco) {
    // função que retorna o começo mais o fim
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    // retorna a função como valor
    return falaResto;
}
// ao criar a função, "olá", vira o começo, e ao chamar a variável olaMundo, como função, o valor dela será o resto.
const fala = falaFrase('Olá');
const resto = fala("mundo!");
console.log(resto);
*/

// function duplica (a) {
    // return a * 2;
// }
// 
// function triplica (a) {
    // return a * 3;
// }
// 
// function quadriplica (a) {
    // return a * 4;
// }
// Jeito mais facil de fazer isso acima :)
function criaMultiplicador(multiplicador) {
    // multiplicador 

    return  (n) => {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
//  pode retornar qualquer coisa dentro da função.