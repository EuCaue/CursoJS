//! Importando pacotes importantes
const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

//? Configurando o Schema da DB para o Login
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Criando modelo de login, basedo no Schema acima
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  // Criando variáveis importantes
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    // Checando se tem erros
    if (this.errors.length > 0) return;
    // Verificando se tem o usuário na base de dados
    this.user = await LoginModel.findOne({ email: this.body.email });
    // Criando erro caso não tenha o usuário na base de dados 
    if (!this.user) return this.errors.push('Usuário ou senha inválidos! ');
    // Checando se a senha que o usuário digitou é igual a da base de dados
    // e criando erro caso não seja
    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida!');
      this.user = null;
      return;
    }
  }


  //? Registrando o usuario e mandando para a base de dados
  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    this.user = await LoginModel.create(this.body);


  }

  // Verificando se o úsuario já existe na base de Dados
  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) return this.errors.push('Usuário já cadastrado');

  }

// Valida os dados do form
  valida() {
    this.cleanUp();

    // Validação
    //? O e-mail precisa ser válido 
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail Inválido');

    //? A senha precisa ter entre 3 e 50
    if (this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres ');

  }


  //? Limpando os valores que vem do POST do FORM
  // E garantindo que seja uma String
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      };
    }

    // Deixando o body, apenas com os campos de email e senha
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }

}

module.exports = Login;