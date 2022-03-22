// const p = document.createElement('p');
// document.body.appendChild(p);
// p.classList.add('paragrafo');

// campos de variáveis para as funções
const dataNow = Date.now();
const data  = new Date(dataNow); 

const diaSemana = data.getDay();
const diaSemanaTexto = getTodayDay(diaSemana);

const month = data.getMonth();

const h1 = document.querySelector('.h1');

// Função usada para escrever nos documentos
function writeInDoc (msg) {

    h1.innerHTML = `${msg}`
    console.log("works");
}

// Escrevendo no documento
writeInDoc(dataFormat());

// Adicionar um zero a esquerda, caso for necessário.
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}
// Formatando e escrevendo as datas.
function dataFormat () {
    const weekDay = getTodayDay(diaSemana);
    const monthNow = getMonth(month);
    const day = data.getDate();
    const year = data.getFullYear();
    const hours = data.getHours();
    const minutes = zeroAEsquerda(data.getMinutes());
    console.log(getTodayDay(diaSemana),day,getMonth(),year,hours, minutes);
    return `${weekDay}, ${day} de ${monthNow} de ${year} ${hours}:${minutes}`
}




// "Pegando" o dia da semana
function getTodayDay (diaSemana) {
    let diaSemanaTexto; 

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira'; 
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';   
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira' ;   
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
    } 
    return diaSemanaTexto;
}

// "Pegando" o mês.
function getMonth () {
    // switch case pode ser subsistuido por array ou objetos
    let monthText; 
   switch (month) {
       case 0:
            monthText = 'Janeiro';
            return monthText;
       case 1:
           monthText = 'Fevereiro';
           return monthText;
        case 2:
            monthText = 'Março';
            return monthText;
        case 3:
            monthText = 'Abril';
            return monthText;
        case 4: 
            monthText = 'Maio';
            return monthText;
        case 5:
            monthText = 'Junho';
            return monthText;    
        case 6:
            monthText = 'Julho';
            return monthText;
        case 7:
            monthText = 'Agosto';
            return monthText;
        case 8:
            monthText = 'Setembro';
            return monthText;
        case 9:
            monthText = 'Outubro';
            return monthText;
        case 10:
            monthText = 'Novembro';
            return monthText;
        case 11:
            monthText = 'Dezembro';
            return monthText;










   }
}

// JEITO MAIS SIMPLES, porque ele não ensinou isso antes?????????????
// const h1  = document.querySelector('.h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timestyle:'short' });