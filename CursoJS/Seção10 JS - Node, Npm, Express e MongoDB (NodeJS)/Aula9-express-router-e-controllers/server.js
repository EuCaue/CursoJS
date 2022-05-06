const express = require('express');
const app = express();
const routes = require('./routes');


//! Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }));
// Fazendo o express usar as rotas do const routes
app.use(routes);

app.listen(3000, () => {
  console.log('Acesse via http://localhost:3000');
  console.log('Server executando na porta 3000');
});
