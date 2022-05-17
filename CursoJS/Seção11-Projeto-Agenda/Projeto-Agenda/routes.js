//? Arquivos usado apenas para encaminhar as rotas
const express = require('express');
const route = express.Router();

//? Importando Rotas
const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Middleware, para checar se o $USER está logado, para ter acesso a página
const { loginRequired } = require('./src/middlewares/middleware');


//? Controlando as rotas Da /home
route.get('/', homeController.index);

//? Rotas de Login
route.get('/login/', loginController.index);

// Register
route.post('/login/register', loginController.register);

// In || Out
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


// Rotas para a área de contato na Agenda

// INDEX
route.get('/contato/',loginRequired, contatoController.index);

// Register
route.post('/contato/register',loginRequired, contatoController.register);

// Edit
route.get('/contato/:id',loginRequired, contatoController.editIndex); 
route.post('/contato/edit/:id',loginRequired, contatoController.edit);

// Delete 
route.get('/contato/delete/:id',loginRequired, contatoController.delete); 

//? Exportando tudo
module.exports = route;
