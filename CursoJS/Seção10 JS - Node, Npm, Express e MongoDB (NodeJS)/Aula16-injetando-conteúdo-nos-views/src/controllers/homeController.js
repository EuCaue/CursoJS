//* Arquivo feito somente para exportar coisas relacionadas a home
//? parametro next, é o próximo middleware a ser executado
//* Middleware é a função que faz algo antes de "responder" a req
//? Pode usar um next dentro da resposta, para após a reposta, você chamar outra função

//?GET
exports.paginaInicial = (req, res) => {
  //? Vai ficar salvo 7 dias na base de dados, porque foi defindo no server...  
  //* Adicionar usuario e status de login 
  // req.session.usuario = { nome: 'Cauê', logado: true}; 
  // console.log(req.session.usuario);

  //! Mensagem flash, que é um uso único, após exibidas umas vez, não será mais
  //? Retorna um array, com as mensagem, podendo ter várias mensagem em um flash 
  // req.flash('info', 'Hello World');
  // req.flash('error', 'Mensagem de erro');
  // req.flash('sucess', 'Mensagem de sucesso');
  // console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));
  

  //* Rederizando o HTML/EJS
  res.render('index', {
    //? Injetando dados JS no EJS/HTML do index
    titulo: 'Este será o <span style="color: red;">titulo</span> da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

//? POST 
exports.trataPost = (req, res) => {
  res.send(`Nome do cliente ${req.body.cliente}`);
  return;
};