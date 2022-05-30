import User from '../models/User';

// Classe para o controller da home, enviando um JSON
class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

// Exportando
export default new UserController();
