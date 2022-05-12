//? Arquivos usado apenas para encaminhar as rotas
const express = require('express');
const route = express.Router();

//? Importando Rotas
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


//? Controlando as rotas Da /home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//? Controlando as rotas do /contato
route.get('/contato', contatoController.paginaInicial);

//? Exportando tudo
module.exports = route;
