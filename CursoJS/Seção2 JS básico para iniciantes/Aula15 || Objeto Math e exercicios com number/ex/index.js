let numero = Number(prompt('Digite aqui um número: '))
let num = document.getElementById('number')
num.innerHTML += ` ${numero} `

document.body.innerHTML += `Raiz quadrado: ${numero ** 0.5} <br> `
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br> `
document.body.innerHTML += `é NaN: ${Number.isNaN(numero)} <br> `
document.body.innerHTML += `Arredondado para baixo ${Math.floor(numero)} <br> `
document.body.innerHTML += `Arredondado para cima ${Math.ceil(numero)} <br> `
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br> `