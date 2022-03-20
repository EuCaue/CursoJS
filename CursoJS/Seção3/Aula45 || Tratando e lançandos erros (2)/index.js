// try {
//     // Executa  não há erros.
//     try {
//         // um try dentor do outro.
//     } catch (err) {
//         // aqui funcionará normalmente caso tenha erro. 
//     }
// } catch (e) {
//    // executdas quando a erros. 
// } finally  {
//     // sempre será executado. Dando erro ou não sempre executado oque está aqui.
// }

function showHour (data) {
    // se a data e data não for uma instância de Date(), exbirá um erro.
    if ( data && !(data instanceof Date)) {
        throw new TypeError('Waiting for instanceof Date()')
    }
    // se a data não tiver valor, receberá data.
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        // olhar o objeto Date() na documentação denovo.
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

}

try {
 // se der um erro na hora, será informado no console, no caso se for passado um argumento que não seja a hora.
const data = new Date('01-01-1970 12:58:12');
const hour = showHour();
console.log(hour);
} catch (e) {
   console.log(e);  
} finally {
    console.log("bomdia");
}



