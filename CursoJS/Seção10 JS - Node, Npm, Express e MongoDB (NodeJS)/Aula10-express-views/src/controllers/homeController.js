//* Arquivo feito somente para exportar coisas relacionadas a home

//?GET
exports.paginaInicial = (req, res) => {
  //* Rederizando o HTML/EJS
  res.render('index')

  console.log('Recarreguei a página');
};

//? POST 
exports.trataPost = (req, res) => {
  res.send('Nova Rota de Post funcionando')
};