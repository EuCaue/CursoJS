//* Importando o Express 
const express = require('express');
// Método mais comum de ser usar o express
const app = express();

// Bascio que uma API deve faazer
//*         CRIAR   LER   ATUALIZAR  APAGAR
//? CRUD -> CREATE, READ, UPDATE,    DELETE
//*         POST    GET   PUT        DELETE


//* ROTAS
// http://meusite.com/ <- GET -> Entregue a página / -> raiz do site
//? Navegador requisitando para o servidor a página /sobre 
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
//? Entrando a página de contatos
// http://meusite.com/contato <- GET -> Entregue a página /contato

//? lendo/enviando para o navegador a pagina
//? @param -> '/' raiz do site
//? @param -> Request e response

//* Request é o que foi pedido pelo cliente
//* Response é a reposta do que foi pedido pelo cliente 
app.get('/', (req, res) => {
  //* mandando a resposta com res.send();
  //* pode mandar HTML aqui dentro
  // res.send('Hello <Strong>World')
  res.send(`<form action="/" method="POST">
  <label for="Nome">Nome</label>
  <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
  //? Tudo que está aqui dentro, será exibido, a cade vez que a página carregar
  console.log('Recarreguei a página na página');
});

app.post('/', (req, res) => {
  res.send('Recebi o form');
  console.log(req);
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato!');
});

//* Porta do computador que o express, vai ficar ouvindo.
//! 127.0.0.1:3000  para acessar
app.listen(3000, () => {
  //* Atalho para ir para o localhost, somente clicando
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Executando na Porta 3000!');
});