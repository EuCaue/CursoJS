const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');

// Index da página de contato
// Mais criando um "fake" object, para não dar erro no editIndex
exports.index = (req, res) => {
  res.render('contato', {
    contato: {}
  });
};

// Rota de cadastro de contato na Agenda 
exports.register = async (req, res) => {
  try {
    // Criando o contato
    // E esperando a base de dados cadastrar
    // E checando se tem algum erro, se tiver, não cadastra
    const contato = new Contato(req.body);
    await contato.register();
    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato'));
      return;
    }
    // Se não tiver erro, cadastra, e manda uma flash msg
    req.flash('success', 'Contato cadastrado!');
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    return;

    // DEBUG
  } catch (e) {
    console.log(e);
    return res.render('404');
  }

};

// rota para quando cadastrar volta para a página de "cadastro", para editar o contato enviado para a DB
exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render('404');
  const contato = await Contato.buscaPorId(req.params.id);
  if (!contato) return res.render('404');

  res.render('contato', { contato });

};

// Rota para editar os dados do contato após o cadastro do mesmo 
exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato'));
      return;
    }

    // Se não tiver erro, cadastra, e manda uma flash msg
    req.flash('success', 'Contato editado com sucesso!');
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    res.render('404');
  }



};

// Rota para deletar o contato da DB e da Agenda
exports.delete = async (req, res) => {
  // Checando se tem o ID
  if (!req.params.id) return res.render('404');

  // Deletando baseado no ID
  const contato = await Contato.delete(req.params.id);
  if(!contato) return res.render('404');

  // Messagem de sucesso para o delete
  req.flash('success', 'Contato deletado com sucesso!');
  req.session.save(() => res.redirect(`/`));
  return
};