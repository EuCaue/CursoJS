// Estrutura geral, o relógio zerado e formatado.
function getTimeFromSeconds (seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}
// Varíaveis para funcionar
const watch = document.querySelector('.watch');
// não é necessário mais as variáveis, com o document.addEventListener();
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear =  document.querySelector('.clear');
let seconds = 0; 
let timer;

// começar o timer
function startWatch () {
    
    timer = setInterval(() => {
        watch.style.color = '';
        seconds++;
        watch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}
// pausa o timer
function pauseWatch () { 
    const pauseTimer = setTimeout(() => {
        clearInterval(timer)
        watch.style.color = 'red'; 
    }, 0);
}

// limpar o timer.
function stopWatch() {
    const stopTimer = setTimeout(() => {
        watch.style.color = '';
        clearInterval(timer);
        watch.innerHTML = '00:00:00'
        seconds = 0;
    }, 0);
    
    
}
// Jeito pŕatico de usar o addEventListener
document.addEventListener('click' , function(e) {
    // .target pega o lugar onde está sendo clicado no document
    const el = e.target
    // checagem para ver qual botão está sendo pressionado. 'class ou id'
    if(el.classList.contains('clear')) stopWatch();
    if(el.classList.contains('pause')) pauseWatch();
    if(el.classList.contains('start')) {
        clearInterval(timer); startWatch();
    }
})

/*
start.addEventListener('click', (e) => {
   clearInterval(timer);
   startWatch();
});

pause.addEventListener('click', (e) => {
    pauseWatch();
});

clear.addEventListener('click', (e) => {
    stopWatch();
});
*/
