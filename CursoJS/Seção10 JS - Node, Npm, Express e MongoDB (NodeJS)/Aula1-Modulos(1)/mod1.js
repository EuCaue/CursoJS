const nome  = 'Halry';
const sobrenome = 'Hnery';

const falaNome = () => {
  console.log(`${nome}, ${sobrenome}`);
};

// console.log(module);

//* Exportando a variável com o NodeJS
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome; 


//? Sobre escreve a 'exports' e a module.exports 
// e importa somente o que estiver dentro das chaves 
//! module.exports = { 
//! }

//? Atalho para o jeito de cima
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//* this, nesse contexo, significa, o module.exports
this.qualquerCoisa = 'Qualquer coisa que eu quiser exportar' 


// Criando uma classe e exportando ela
class Pessoa{
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

