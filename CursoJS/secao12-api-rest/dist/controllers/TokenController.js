"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    // Checando se foi enviado um email e senha
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials'],
      });
    }
    // Checando se o email e senha que foi enviado, corresponde a algum usuário na base de dados
    const user = await _User2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['User doesn\'t exist'],
      });
    }
    // Checando se a senha é válida para o usuário
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Invalid password'],
      });
    }
    const { id } = user;
    // Designando um token único para o usuário
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // Retornando o Token do usuário
    return res.json({ token });
  }
}

// Exportando
exports. default = new TokenController();
