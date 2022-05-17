exports.middlewareGlobal = (req, res, next) => {
  //? Enviando variáveis para todos os EJS 
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  // Definindo a variável de sessão de usuário
  res.locals.user = req.session.user;
  next();
};

//? Checando a 'key' do CSRF
exports.checkCsrf = (err, req, res, next) => {
  //* Renderizando se tiver erro
  if (err) { return res.render('404'); };
  next();

};
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};


// Middleware para checar se o usuário está logado para te acesso a páginas
exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa estar logado');
    req.session.save(() => res.redirect('/'));
    return
  }
  next();
};

