exports.middlewareGlobal = (req, res, next) => {
//? Assim que se injeta em todos os arquivos EJS 
  res.locals.umaVariavelLocal = 'Esté o valor da variável "global" para injetar em todos EJS'
  next(); 
}