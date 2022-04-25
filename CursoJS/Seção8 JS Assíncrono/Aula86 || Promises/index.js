// Cria uma promise, com o construtor dela.
// Recebendo dois parametros
// Sendo o primeiro para dar certo
// E o segundo caso der errado
// sempre que tiver uma promise, precisa do .then()
// e se tiver errado .catch() ele pegará o erro do segundo parametro


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    // Resolve para quando a "promessa" for resolvida sem erros
    // reject para quando houver erros, e ela for negada.
    //* .then() só sera chamado após o resolve. 
    return new Promise( (resolve, reject) => {
        // dando reject no then se for 
        if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
        //* Resolve so recebe um parametro
            resolve(msg);
        }, tempo);
    });
} 



// .then() será executado, apos resolver a promisse
// recebendo uma arrow function para enviar de volta para resposta.
// sempre que retonar um promise, terá que ter um .then()
// para ser exbido o valor da promise.
// .catch() vai capturar o erro se for reject...
esperaAi('Frase 1', rand(1, 3)).then(resposta => { 
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
}) 
.then(resposta => { 
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
//* ao receber o erro no reject é preciso
//* passar um arrow funct
.catch(e => {
    console.log('ERRO' , e);
});
