"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

// Classe para o controller dos users, enviando um JSON
class UserController {
  async store(req, res) {
    try {
      // Esperando para criar um novo usuário
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      // Retornando os erros, se tiver, em um objeto
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      // Procurando todos os usuários na base da dados
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      // Retornando o usuários pedido
      return res.json({ id, nome, email });
    } catch (e) {
      // Retornando o erro
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Update
  async update(req, res) {
    try {
      // Procurando o usuário na base de dados por pk(id)
      const user = await _User2.default.findByPk(req.userId);
      // Checando se o usuário existe na base de dados
      if (!user) {
        return res.status(400).json({
          errors: ['User doesn\'t exist'],
        });
      }
      const novoDados = await user.update(req.body);
      const { id, nome, email } = novoDados;
      // Retornando os novosDados editados do usuários selecionado
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Procurando o usuário na base de dados por pk(id)
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User doesn\'t exist'],
        });
      }
      // Deletando o usuário selecionado da base da dos
      await user.destroy();
      // Retornando o user, para verificar os dados que foram deletados
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
  // Exportando
}

exports. default = new UserController();
