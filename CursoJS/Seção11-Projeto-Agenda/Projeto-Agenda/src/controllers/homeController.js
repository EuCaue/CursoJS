//* Arquivo feito somente para exportar coisas relacionadas a home
//? parametro next, é o próximo middleware a ser executado
// Importando os contatos
const Contato = require('../models/ContatoModel');


//? Tratando o GET do site
exports.index = async (req, res) => {
  //? Injetando a variável de contatos no index
  const contatos = await Contato.buscaContatos();
  //* Rederizando o HTML/EJS
  res.render('index', { contatos });
  return;
};


