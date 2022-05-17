//* Arquivo feito somente para exportar coisas relacionadas a home
//? parametro next, é o próximo middleware a ser executado


//? Tratando o GET do site
exports.paginaInicial = (req, res) => {
  //* Rederizando o HTML/EJS
  res.render('index', {
    //? Injetando dados JS no EJS/HTML do index, como variáveis,
    //* Suporta HTML CSS E JS
    titulo: 'Este será o <span style="color: red;">titulo</span> da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    title: '<title>Exemplo</title>',
  });
  return;
};


//? Tratando o POST do site 
exports.trataPost = (req, res) => {
  res.send(`Nome do cliente ${req.body.cliente}`);
  return;
};