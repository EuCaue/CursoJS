import app from './app';

const port = 3001;

// Definindo a port que vai ser escutada pelo Express
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
