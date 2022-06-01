class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

// Exportando
export default new HomeController();
