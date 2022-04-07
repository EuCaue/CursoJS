const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,];

//  Filtrnado os numeros pares, multiplicando todos eles por 2 e somando todos.
const numerosUsados = numeros.filter( (valor, indice, array) => {
    return valor % 2 === 0;
}).map( (valor) => { 
    return valor * 2;
}).reduce( (acumulador, valor) => {
    return acumulador + valor
});

//  Dobrando números com map
// const numerosDobrados = numeros.map( (valor) => { 
//     return valor * 2;
// });

// Somando os numeros com reduce
// const numerosSomados = numeros.reduce( (acumulador, valor) => {
//     return acumulador += valor
// });


// logs
// console.log(numerosSomados);
// console.log(numerosDobrados);
console.log(numerosPares);

