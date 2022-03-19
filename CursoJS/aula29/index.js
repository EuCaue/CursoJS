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

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getTodayDay(diaSemana);

  


// if (diaSemanaTexot === 0 ) {
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemanaTexto === 1) {
//     diaSemanaTexto = 'Segunda-feira'
// } else if (diaSemanaTexto === 2) {
//     diaSemanaTexto = 'Terça-feira'
// } else if (diaSemanaTexto === 3) {
//     diaSemanaTexto = 'Quarta-feira'
// } else if (diaSemanaTexto === 4) {
//     diaSemanaTexto = 'Quinta-feira'
// } else if (diaSemanaTexto === 5) {
//     diaSemanaTexto = 'Sexta-feira'
// } else if (diaSemanaTexto === 6) {
//     diaSemanaTexto = 'Sábado'
// }


console.log(diaSemana, diaSemanaTexto);