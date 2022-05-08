const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//! Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }));

//? Setando a pasta de arquivos estaticos que o express vai usar
app.use(express.static('./public/'))

// Setando a pasta da views, e qual engine ele vai usar
// No caso ./src/views
// E engine EJS

// Setando com caminho absoluto
//! app.set('views', path.resolve(__dirname, 'src', 'views'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

// Fazendo o express usar as rotas do const routes
app.use(routes);

app.listen(3000, () => {
  console.log('Acesse via http://localhost:3000');
  console.log('Server executando na porta 3000');
});
