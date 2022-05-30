import User from '../models/User';

// Classe para o controller dos users, enviando um JSON
class UserController {
  async store(req, res) {
    try {
      // Esperando para criar um novo usuário
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      // Retornando os erros, se tiver, em um objeto
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

// Exportando
export default new UserController();
