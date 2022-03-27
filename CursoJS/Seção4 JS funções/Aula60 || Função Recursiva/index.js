// não usar a função recursiva com mais de 900 "chamadas"
// usar com moderação
// Recursiva é uma função que é um "loop", porque chama ela própria.
// conta de 0 a 10, em loop.
function recursiva (max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-1);
