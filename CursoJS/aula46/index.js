function showHour () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,

    })
}

console.log(showHour());
 // um jeito de usar o setInterval
//function showHourInterval() {
//    console.log(showHour());
//
//}
// setInverval serve para chamar uma função de intervalos em intervalos, em milisegundo.
// se passa a função sem () no setInverval, e depoois o tempo.
// setInterval(showHourInterval, 1000);

// Método mais comum de se usar com função anonima.



const timer = setInterval(function () {
    console.log(showHour());
}, 1000);   

// Método de parar o setInterval pelo Node. 
setTimeout(() => {
   clearInterval(timer); 
}, 3000);

// Pode usar o setTimeout() para outras coisas, que precisam fazer por um tempo.
// vai esperar o timeout de cima e após 5 segundos, irá exbir o log.
setTimeout(() => {
    console.log('Bom dia!');
}, 5000);
