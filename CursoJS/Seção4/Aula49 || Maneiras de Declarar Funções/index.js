// Declaração  de função nesse tipo de declaração de função, existe o function hoisting, vai elevar as funções para o topo do arquivo. 
falaOI();

function falaOI () {
    console.log('Oi!');
}

// Funções são First-class objects, funções pode ser dado, como dados.
// Function expression => passar um função para um variável 
// Não existe funciton hoisting aqui. 
const souUmDado =  function () {
    console.log('Sou Um Dado');
};


// É possível passar funções como parametro para funcção e executar dentro delas a função por parametro.
function executaFunção (funcao) {
    console.log('Sua função será executada abaixo.');
    funcao();
}
executaFunção(souUmDado);

// Arrow function
const arrow = () => {
    console.log('Sou Uma arrow function');
}
arrow();

// Dentro de um objeto
const obj = { 
    // Um jeito de colocar uma função dentro do objeto
    falar: function () {
        console.log('Estou falando');
    },
    // Método mais moderno de fazer isso.
    falar2 () {
        console.log('Outro Jeito de falar');
    } 
}
obj.falar();
obj.falar2();