import User from '../models/User';

// Classe para o controller dos users, enviando um JSON
class UserController {
  async store(req, res) {
    try {
      // Esperando para criar um novo usuário
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      // Retornando os erros, se tiver, em um objeto
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      // Procurando todos os usuários na base da dados
      const users = await User.findAll();
      // Retornando todos os usuários em JSON
      return res.json(users);
    } catch (e) {
      // Retornando o erro
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Show
  async show(req, res) {
    try {
      // Procurando o usuário na base de dados por pk(id)
      const user = await User.findByPk(req.params.id);
      // Retornando o usuários pedido
      return res.json(user);
    } catch (e) {
      // Retornando o erro
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Update
  async update(req, res) {
    try {
      // Checando se foi passado o ID na URL
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      // Procurando o usuário na base de dados por pk(id)
      const user = await User.findByPk(req.params.id);
      // Checando se o usuário existe na base de dados
      if (!user) {
        return res.status(400).json({
          errors: ['User doesn\'t exist'],
        });
      }
      const novoDados = await user.update(req.body);
      // Retornando os novosDados editados do usuários selecionado
      return res.json(novoDados);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Checando se foi passado o ID na URL
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      // Procurando o usuário na base de dados por pk(id)
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['User doesn\'t exist'],
        });
      }
      // Deletando o usuário selecionado da base da dos
      await user.destroy();
      // Retornando o user, para verificar os dados que foram deletados
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
  // Exportando
}

export default new UserController();
