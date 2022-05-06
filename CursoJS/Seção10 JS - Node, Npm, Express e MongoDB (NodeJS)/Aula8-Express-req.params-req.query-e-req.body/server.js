const express = require('express');
const app = express();

//! Necessário para tudo que for usado POST, o express retornar um OBJETO com as informações
app.use(express.urlencoded({ extended: true }))


//! PARAMETROS DE URL 
//* ID -> URL PARAMETRO
//* ?chave=valor&chave=valor -> queryString
// http://facebook.com/profiles/ID?campanha=googleads&nome_campanha=seila


//! name no form, serve para usar no req.body.name, para pegar o valor.
//? req.body é um objeto
app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  <label for="Nome">Nome</label>
  <input type="text" name="nome"><br>
//? Name do input é a chave para o req.body
  <label for="Outro Campo">Outro Campo</label>
  <input type="text" name="outroCampo">
  <button>Enviar</button>
  </form>`);

  console.log('Recarreguei a página');
});

//* O que tiver depois do /:, é o nome da chave no objeto que vai receber
//* O parametro passador na web, após /
//* ? após o nome da chave do objeto depois dos /, serve para o parametro ser opcional
//? : depois do barra, significa que é um parametro, com ? significa opcional 
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // Recebe o valor de parametros da URL
  // params => www.site/param1/param2
  console.log(req.params);

  // query => www.site/param1/?chave1=valor1&chave2=valor2
  // Recebe os valores querys da URL
  console.log(req.query);
  // Escrevendo no HTML o que tiver no Query String
  res.send(req.query.nome)
})

app.post('/', (req, res) => {
  // pegando o que estiver vindo no corpo da requisição
  //* No caso do formulário
  //* Que precisa necessariamente, ter o metódo POST 
  console.log(req.body);
  res.send(`O que foi postado ${req.body.nome} <br>${req.body.outroCampo}`);
});

app.listen(3000, () => {
  console.log('Acesse via http://localhost:3000');
  console.log('Server executando na porta 3000');
});
