// Classe para o controller da home, enviando um JSON
class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

// Exportando
export default new HomeController();
