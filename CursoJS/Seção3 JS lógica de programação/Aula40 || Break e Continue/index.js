const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// Continue, continua o laço para próxima iteração
// Break, sai do laço, terminando ele.


for (let numero of numeros) {
    // retorna para o começo do laço, com a próxima iteração, após achar o número 2 no array. Continue serve para pular um valor da iteração.
    if ( numero === 2 || numero === 5) {
        console.log(`Pulei o número ${numero}`);        
        continue;
    }
    console.log(numero);
    // ao achar o número 7 dentro do array, ele não fará mas o laço, assim encerreando ele. 
    
    if (numero === 7) {
        console.log(`Número ${numero}, encontrado, saindo...`);
        break;
    }

    
}