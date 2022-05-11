//? Arquivos de ROTAS, somente para "usar" as rotas
const express = require('express');
const route = express.Router();
// Importando as Rotas
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//? parametro next, é o próximo middleware a ser executado
//* Middleware é a função que faz algo antes de "responder" a req
//? Middle são funções passadas, antes e depois da res

// function meuMiddleware(req, res, next) {
//    Salvando dados na sessão
//   req.session = { nome: 'Cauê', sobrenome: 'Souza'}
//   console.log('\n Passei no seu Middleware');

//    OBRIGATORIO O NEXT PARA ele ir para a próxima função
//   next();
// }

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
