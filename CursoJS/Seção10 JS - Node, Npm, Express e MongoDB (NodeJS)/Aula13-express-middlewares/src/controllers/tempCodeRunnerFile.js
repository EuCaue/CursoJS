exports.paginaInicial = (req, res, next) => {
  //* Rederizando o HTML/EJS
  res.render('index');
  Aula13-express-middlewares/src/controllers/homeController.js
  console.log('Recarreguei a página');
  next();
};