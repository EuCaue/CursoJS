// Escreva uma função que recebe um número e 
// retorna o seguinte: 
// Número divísivel por 3 = Fizz
// Número divísil por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número não é divísível por 3 e 5 = retorna o próprio número
// Checkar se o número, é realmente um número.
// Use a função com números de 0 a 100.

const isDivisible = (num) => {
    if (typeof num !== 'number'){
        'não é um número';
    } else {

        if (num >= 0 && num <= 100 ) {
            // console.log(num);
            if ( num % 3 !== 0 && num % 5 !== 0){
                return num;
            } else {
                if (num % 3 === 0 && num % 5 === 0) {
                    return 'FizzBuzz';
                } else if ( num % 3 === 0) {
                    return 'Fizz';
                } else if (num % 5 === 0) {
                    return 'Buzz';
                }
            }
            
        }
    } 
    
}



for (let i = 0; i <= 100; i++) {
    console.log(i, isDivisible(i));
    
}