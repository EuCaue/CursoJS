//function funcao () {
//    // dentro da função, declarada com a palavra function, existe uma "variável/objeto/array", chamado de arguments, para lá vão todos os argumentos da função, mesmo sem o parametro para executá-las.
//    // console.log(arguments);
//    // console.log('Olá');
//    let total = 0;
//    for (let argumento of arguments) {
//        total += argumento;
//    }
//    console.log(total);
//}
// O javascript não liga se a a função tiver um arguemento e não tiver parametro. Não da erro.
//funcao(1,5,3,2,4,7);

//function funcao (a, b, c, d, e, f) {
//    // se a função tiver mais parametros do variaveis passada, as que não tiverem valor, serão declarada como undefined.
//    console.log(a,b,c,d,e,f);
//}
//funcao(1,2,3)

// Declarando o valor de b, para caso não seja passada no argumento, tenha um valor padrão.
// Unica maneira de fazer o argumento usar o valor padrão, é mandando ele como undefined
//function funcao (a,b = 0) {
//    console.log(a+b);
//}
//funcao(2)


//// Pode desestruturar tanto array, como objetos nos argumentos e parametros da função
//function funcao ( { nome, sobrenome, idade} ) {
//    console.log(nome, sobrenome, idade);
//}
//let obj =  { nome: 'Caue', sobrenome: 'Souza', idade: '18'};
//funcao(obj); 

//function funcao ([valor1, valor2, valor3]) {
//    console.log(valor1, valor2, valor3);
//}
//arr = ['Cauê', 'Souza', 'Bomdia' ]
//funcao(arr)

// POde ser usar o rest operator, para mandar todo o resto dos arugmentos, para o parametro que tiver o rest.
// rest operator sempre tem que ser o último.
const conta = function  (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
            if (operador === '+') acumulador += numero;
            if (operador === '-') acumulador -= numero;
            if (operador === '/') acumulador /= numero;
            if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}; 


conta('+', 0, 20, 30, 40, 50);