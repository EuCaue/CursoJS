//try {
//    console.log(naoExisto);
//} catch(err) {
//    console.log(err);
//}

function soma (x, y) { 
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        // Gera um "erro" igualmente os dos JS no console. 
        // throw lança um erro, e o ReferenceError, é uma classe, usando o new para criar ela. Própia ferramente do JS. Existe a Error pura, mas achei mas interresante a ReferenceError.
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}
try {
console.log(soma('2', 2));
 } catch (err) {
    // Não exiba o erro para o seu úsuario final. 
    // deixe somento no backend, para o frontEnd lançe somente um aviso padrão, caso seja necessário.
    //console.log(err);  
    console.log('Alguma coisa mais amigável');
 }