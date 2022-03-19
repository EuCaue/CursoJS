// Pegando os valores
const peso = document.querySelector('#pesoT');
const altura = document.querySelector('#alturaT');
const divR = document.querySelector('.div')
const form = document.querySelector('#formulario')

// "Função" principal e evitando o evento padrão do form
form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento Previnido');
    exbirResultado();    
})

// função ara escrever o resultado
function setResultado (msg) {
    
    divR.innerHTML += `<br/>  ${msg} <br/> `
}

// função para exbir o resultado.
function exbirResultado () {
    let rR = peso.value / (altura.value * altura.value).toFixed(2)
    if (peso.value >= 1 && peso.value <= 595 && altura.value >= 0.5 && altura.value <= 2.71) {
        setResultado(`${rR.toFixed(2)} <style> .div{background: rgba(40, 253, 40, 0.349);}<style/> <br/> `)
    } else if (peso.value <= 0) {
        setResultado(`Digite um valor válido no Peso! <style> .div{background: rgba(211, 10, 10, 0.158);}<style/> <br/>`)
    } else if (altura.value <= 0 ) {
        setResultado(`Digite um valor válido na Altura! <style> .div{background: rgba(211, 10, 10, 0.158);}<style/> <br/>`)
    } else {
        setResultado(`Digite um valor válido! <style> .div{background: rgba(211, 10, 10, 0.158);}<style/> <br/>`)
    }
}

