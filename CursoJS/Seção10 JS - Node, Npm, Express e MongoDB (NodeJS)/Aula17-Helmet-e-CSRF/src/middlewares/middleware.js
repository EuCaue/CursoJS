exports.middlewareGlobal = (req, res, next) => {
  //? Assim que se injeta em todos os arquivos EJS 
  res.locals.umaVariavelLocal = 'Esté o valor da variável "global" para injetar em todos EJS';
  next();
};

exports.checkCsrf = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') return res.render('404');
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};