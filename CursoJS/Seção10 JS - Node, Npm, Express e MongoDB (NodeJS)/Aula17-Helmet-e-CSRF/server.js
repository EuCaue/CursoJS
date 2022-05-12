//! dotenv feito para a connectionString para a base de dados
require('dotenv').config();

//? Importando o Express
const express = require('express');
const app = express();

//* Conectando a base de dados do MONGO
const mongoose = require('mongoose');

//? Connectando e emitindo um sinal de pronto
//* Para a conexão so ocorrer quando for emitido o sinal de 'pronto'
// Retorna uma promise
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  }).catch(e => {
    console.log(e);
  });

//* Import's para salvar a salvar sessão 
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Mensagens auto-destrutivas
const flash = require('connect-flash');

//? Rotas&&Segurança 
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

//? Importando Middleswares
const { middlewareGlobal, checkCsrf, csrfMiddleware } = require('./src/middlewares/middleware');


//? Usando helmet para a segurança
app.use(helmet());


//? Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }));

//? Opção para poder dar JSON.parse() para a aplicação
app.use(express.json());

//? Configurando qual a pasta de arquivos estaticos que o express vai usar
app.use(express.static('./public/'));

//? Configurações sobre a sessão
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

// Usando Csurf para a segurança
app.use(csrf());

//? Utilizando os Middlewares, para todas as rotas
app.use(middlewareGlobal);
app.use(checkCsrf);
app.use(csrfMiddleware);


//? Configurando a pasta de Views e a Engine
// Views = Arquivos que vão sendo renderizado
//* Pasta: ./src/views
//* Engine: EJS
//* Exemplo com caminho absoluto
// app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


// Fazendo o express usar as rotas do app
app.use(routes);


//? Iniciar o servidor, após conectar com sucesso na base de dados
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acesse via http://localhost:3000');
    console.log('Server executando na porta 3000');
  });
});

