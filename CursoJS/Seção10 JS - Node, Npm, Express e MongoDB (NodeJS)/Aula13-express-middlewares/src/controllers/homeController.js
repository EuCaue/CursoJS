//* Arquivo feito somente para exportar coisas relacionadas a home
//? parametro next, é o próximo middleware a ser executado
//* Middleware é a função que faz algo antes de "responder" a req
//? Pode usar um next dentro da resposta, para após a reposta, você chamar outra função

//?GET
exports.paginaInicial = (req, res) => {
  //* Rederizando o HTML/EJS
  res.render('index');
  return;
};

//? POST 
exports.trataPost = (req, res) => {
  res.send(`Nome do cliente ${req.body.cliente}`);
  return;
};