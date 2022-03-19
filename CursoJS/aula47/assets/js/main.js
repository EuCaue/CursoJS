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
    }, 0);
    
    
}
f
start.addEventListener('click', (e) => {
   startWatch();
});

pause.addEventListener('click', (e) => {
    pauseWatch();
});

clear.addEventListener('click', (e) => {
    stopWatch();
});

