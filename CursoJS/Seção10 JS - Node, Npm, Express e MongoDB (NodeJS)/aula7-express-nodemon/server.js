const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  <label for="Nome">Nome</label>
  <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);

  console.log('Recarreguei a página');
});

app.post('/', (req, res) => {
  res.send('Recebi o formulárioa');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
  console.log('Acesse via http://localhost:3000');
  console.log('Server executando na porta 3000');
});
