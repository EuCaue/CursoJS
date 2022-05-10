//* Arquivo feito somente para exportar coisas relacionadas a home
//? parametro next, é o próximo middleware a ser executado
//* Middleware é a função que faz algo antes de "responder" a req
//? Pode usar um next dentro da resposta, para após a reposta, você chamar outra função

// Importando o HomeMOdel
//! const HomeModel = require('../models/HomeModel');

//! Criando na base de dados sempre que acesado a home
//! HomeModel.create({
//!   titulo: 'Another test here',
//!   descricao: 'Another test here',
//!   ano: 2022 - 2000,
//! })
//!   .then(dados => console.log(dados))
//!   .catch(e => console.log(e));


//! HomeModel.find()
//!   .then(resultado => console.log(resultado))
//!   .catch(e => console.log(e));

//?GET
exports.paginaInicial = (req, res) => {
  //* Rederizando o HTML/EJS
  res.render('index');
  return;
};

//? POST 
exports.trataPost = (req, res) => {
  res.send(`Nome do cliente ${req.body.cliente}`);
  return;
};