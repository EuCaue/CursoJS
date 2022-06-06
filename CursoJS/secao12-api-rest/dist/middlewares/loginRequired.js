"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Arquivo de middleware para checar se o usuário já está logado
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  // Verificando se foi mandando o token na header
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  // Coletando o token
  const [, token] = authorization.split(' ');
  try {
    // Coletando os dados do usuários que está acessando no momento
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid user'],
      });
    }

    // Atribuindo o email e senha, na requisiçao de todas as páginas que esse middleware passar
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    // Se tiver um token, mas for inválido já estiver expirado, retornará esse erro
    return res.status(401).json({
      errors: ['Token expired or invalid'],
    });
  }
};
