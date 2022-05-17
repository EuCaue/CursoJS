const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if(req.session.user) res.render('login-logado')
  return res.render('login');
  
};

// Registrando
exports.register = async (req, res) => {
  try {
    // Importando e chamando o metódo de Login para registro
    const login = new Login(req.body);
    await login.register();

    //? Se tiver erro, vai salvar a sessão, e retorna uma msg de erro
    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/login');
      });
      return;
    }

    //? Se não tiver erro, envia a mensagem que o usuario foi criado com sucesso
    req.flash('success', 'Seu úsuario foi criado com sucesso');
    req.session.save(function () {
      return res.redirect('/login');
    });

    //* DEBUG
  } catch (e) {
    console.log(e);
    return res.render('404');
  }

};

// Logando
exports.login = async (req, res) => {
  try {

    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/login');
      });
      return;
    }

    req.flash('success', 'Logado com sucesso');
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('/login');
    });


  } catch (e) {
    console.log(e);
    return res.render('404');
  }

};

// Deslogando
exports.logout = async (req, res) => {
  //? Destruindo a sessão do usuário
  req.session.destroy();
  res.redirect('/')
};