// // Ele "pausa" o código, e vai passand o "resto" dos valores, quanto mais é chamada. 
// // Nunca vai te entregar todos os valores de uma vez
// // Na primeira vez que chamar a função geradora, ela ira retornar o primeiro yield.
// // E assim por diante.
// // para ver o valor de dentro da função, precisa usar o .next()


// // declara com * na frente do nome function
// function* geradora1 () {
//     // return das funções geradoras é yield
//     // bloco de código  
//     yield 'Valor 1';
//     // bloco de código  
//     yield 'Valor 2';
//     // bloco de código  
//     yield 'Valor 3';
// }  


// const g1 = geradora1();
// // retorna um objeto, com a chave do valor, e se já terminou a função.
// // usa o .value para pegar o valor da chave.
// // se precisar do próximo yield, chama a função denovo.
// console.log(g1.next().value );

// // o for sabe exatamento quando termina a função.
// for (let valor of g1) {
//     console.log(valor);
// }


// fazendo um loop controlado.
// exibir a cada vez que chama mais um, e não chamando infitinamente sem parar.
function* contador () { 
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

// const Ccontador = contador();
// console.log(Ccontador.next().value);
// console.log(Ccontador.next().value);
// console.log(Ccontador.next().value);

function* geradora2 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3 () {
// Delegou o trabalho da função geradora2 para a geradora3.
// continuando o trabalho da geradora.
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora3();

// return para a função, e não existirá mais yields
function* geradora4 () {
    yield function () {
        console.log('vim do yield1');
    };

    yield function () {
        console.log('vim do yield2');
    };

}

const g5 = geradora4();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();