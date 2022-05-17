exports.middlewareGlobal = (req, res, next) => {
  //? Enviando variáveis para todos os EJS 
  res.locals.umaVariavelLocal = 'Esté o valor da variável "global" para injetar em todos EJS';
  next();
};

//? Checando a 'key' do CSRF
exports.checkCsrf = (err, req, res, next) => {
  //* Renderizando se tiver erro
  if (err && err.code === 'EBADCSRFTOKEN') return res.render('404');
};
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};