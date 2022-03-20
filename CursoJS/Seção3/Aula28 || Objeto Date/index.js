// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const data = new Date();
 // const tresHoras = 60 * 60 * 3 * 1000;
 // const umDIa = 60 * 60 * 24 * 1000
 // const data = new Date(0 + tresHoras + umDIa); // 01/01/1970 Timestamp unix ou época unix, se eu quiser um valor anterior a isso, uso - para achar, maior do que isso números positivos.
// const date = new Date(2019, 3, 20, 15, 14, 27, 500); // ANO MÊS DIA HORA MINUTO SEGUNDO MILISEGUNDO 
// Se aumentar o valor dos milisegundos, para mim, gera um segundo, e assim por diante. 
//Do mẽs para frente, pode se ‘omitir’, ele reconhecerá como 0.
//Se tirar o mês ele reconhecerá o ano com milisegundo.
// Mẽs é um array, então mẽs 1 = 0 mẽs 4 = 3 e assim por diante.

// const data = new Date(1646068697987); // formato mais utilizado. Chamado de dataString. que se escreve as data em string, meio obvio né?!
 // console.log('Dia', data.getDate()); // .getDate pega o Dia atual da data ou da variável que estar recebendo Date();
 // console.log('Mẽs', data.getMonth() + 1); // .getMonth pega o mẽs; mẽs é array, então para saber o mẽs real +1
 // console.log('Ano', data.getFullYear()); // .getFullYear pega o ano;
 // console.log('Horas', data.getHours()); // .getHours pega as horas;
 // console.log('Min', data.getMinutes()); // .getMinutes pega os minutos;
 // console.log('Seg', data.getSeconds()); // .getSeconds pega os segundos;
 // console.log('Ms', data.getMilliseconds()); // .getMilliseconds pega o MS;
 // console.log('Dia semana', data.getDay()); // .getDay pega o dia da semana; 0-domingo 6-sabado, começa em domingo a semana.
 //console.log(data.toString());
// console.log(Date.now()); // Te da a data desde o marco 0 até então em MS, se colocar no objeto Date(), exbirá a hora de "agora"

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate()) 
    const mes = zeroAEsquerda(data.getMonth() + 1)   
    const ano = zeroAEsquerda(data.getFullYear())   
    const horas = zeroAEsquerda(data.getHours())   
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())   
       
    return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`
}

const data = new Date(); 
const dataBrasil = formataData(data);
console.log(dataBrasil);