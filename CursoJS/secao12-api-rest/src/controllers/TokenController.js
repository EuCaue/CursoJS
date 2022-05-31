import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const user = await User.findOne({ where: { email } });
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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    // Retornando o Token do usuário
    return res.json({ token });
  }
}

// Exportando
export default new TokenController();
