const mongoose = require('mongoose');
const validator = require('validator');


//? Configura o Schema para a base de dados 
const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, required: false, default: Date.now() },

});

//? Criando o Model a partir do Scheme
// param1 = nome do Model, para2 = qual Schema
const ContatoModel = mongoose.model('Contato', ContatoSchema);


class Contato {
  // Variáveis
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
  }




  // Criando um contato na Agenda
  async register() {
    this.valida();
    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);

  }

  // Valida os dados para criar um contato na Agenda
  valida() {
    this.cleanUp();

    // Validando se tem um email e se ele é válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail Inválido');
    // Verificando se tem nome, campo obrigatório
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    // Verificando se existe telefone ou email, obrigatório também
    if (!this.body.email && !this.body.telefone) return this.errors.push('Necessário email ou telefone!');
  }


  //? Limpando os valores que vem do POST do FORM
  // E garantindo que seja uma String
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      };
    }

    // Setando o objeto que vem do req.body.
    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    };
  }

  // Método para editar o contato mais criar ele
  async edit(id) {
    // Checando se o ID foi enviado e é uma String
    if (typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    // Procurando por ID na base de dados & editando & retornando o contato editado para DB 
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
  };

  //? Metódos estáticos 

  // Metódo estático para buscar por ID na DB
  static async buscaPorId(id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
  }
  // Método para buscar contato na DB
  static async buscaContatos() {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
    return contatos;
  }
  // Metódo para deletar o contato
  static async delete(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findByIdAndDelete(id);
    return contato;
  }

}

// Exportando
module.exports = Contato;