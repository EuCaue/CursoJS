const nome = 'Luiz';

function falaNome () {
    // Tudo que está aqui dentro de chaves é um escopo léxico.
    // funções sempre lembra onde ela foi decladara.
    // escopo léxico sempre vai procurar a variável dentro do escopo primeiro.
    console.log(nome);
}

falaNome();