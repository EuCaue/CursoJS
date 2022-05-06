//* Arquivo feito somente para exportar coisas relacionadas a home

//?GET
exports.paginaInicial = (req, res) => {
  res.send(`<form action="/" method="POST">
    <label for="Nome">Nome</label>
    <input type="text" name="nome"><br>
    <label for="Outro Campo">Outro Campo</label>
    <input type="text" name="outroCampo">
    <button>Enviar</button>
    </form>`);

  console.log('Recarreguei a página');
};

//? POST 
exports.trataPost = (req, res) => {
  res.send('Nova Rota de Post funcionando')
};