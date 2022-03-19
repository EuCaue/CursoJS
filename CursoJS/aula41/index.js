// Escreva uma função que recebe dois números e retorne o maior deles.
function numHigh (x = 1, y = 1) {
    if (x > y && x !== String) {
        return console.log(x);
    }else if (y > x && y !== String) {
        return console.log(y);
    }else if (x === y || y === x) {
        return console.log(`Os valores são iguais, ${x}, ${y}`);
    } else if (x === String || y === String) {
        return console.log(`Digite um valor válido.`);
    }

}

const numHigh2 = (x, y) => {
    return x > y ? x : y
}

console.log(numHigh2(102, 20));

numHigh('20', '100'); 