/*
&& ->  false && true -> false "valor mesmo" Exibi o valor do que foi falso no circuito, se for verdadeiro, mostrar o verdadeiro
|| -> true || false  ->  vai retonar o valor "verdadeiro"
FALSY -> valor avaliado em falso
*false -> literal
0
'' "" ``
null / undefined
NaN
*/
// retorna 'Maria'
// console.log('Caue' &&  'Maria');
// Retorna string vázia
// console.log('Caue' &&  '' && 'Maria');

// function falaOi () {
//     return 'Oi';
// }
// 
// const vaiExecutar =  false; 
// console.log(vaiExecutar && falaOi());
                        // retorna 'Cauê', porque é o primeiro verdadeiro ao ser encontrado.
// console.log(0 || false || null || 'Cauê' || true);

// const corUsuario = 'vermelho'; 
// const corPadrao = corUsuario || 'preto';
// 
// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
 // retorna 'c' no caso, a verdadeira. Quando todas forem falsas, será retornada a última falsa.
console.log(a || b || c || d || e);