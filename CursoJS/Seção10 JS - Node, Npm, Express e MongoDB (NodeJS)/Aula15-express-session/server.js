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

//* Import's para salvar a salvar sessão 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');


//! Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }));

//? Setando a pasta de arquivos estaticos que o express vai usar
app.use(express.static('./public/'));

// Configurando a sessão
//* secret: tem que ser algo bem secreto, pode ser qualqquer coisa
//* store: Onde tá salvando, no caso usando mongoose, tá salvando no MONGODB
//* resave: false, recomendado
//* cookie: maxage: quanto tempo a sessão vai ficar ativo
//* httpOnly: para usar HTTP ONLY  
const sessionOptions = session({
  secret: process.env.SECRET,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});



// Usando flash e as opções da sessão
app.use(sessionOptions);
app.use(flash());

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

