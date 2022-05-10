//! dotenv feito para a connectionString para a base de dados
require('dotenv').config();

const express = require('express');
const app = express();
//* Conectando a base de dados do MONGO
const mongoose = require('mongoose');

//? Connectando e emitindo um sinal de pronto
//* Para a conexão so ocorre quando estiver pronto
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  }).catch(e => {
    console.log(e);
  });


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');


//! Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }));

//? Setando a pasta de arquivos estaticos que o express vai usar
app.use(express.static('./public/'));

//? Fazendo o todos os verbos e rotas, passarem por esse Middleware
app.use(middlewareGlobal);


// Setando a pasta da views, e qual engine ele vai usar
// No caso ./src/views
// E engine EJS

// Setando com caminho absoluto
//! app.set('views', path.resolve(__dirname, 'src', 'views'));



app.set('views', './src/views');
app.set('view engine', 'ejs');

// Fazendo o express usar as rotas do const routes
app.use(routes);

//? Para so começar a escutar após conectar na base de Dados. com o sinal de pronto
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acesse via http://localhost:3000');
    console.log('Server executando na porta 3000');
  });
});

