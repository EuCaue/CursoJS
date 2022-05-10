const mongoose = require('mongoose');

//? Schema para a base de dados 
const HomeSchema = new mongoose.Schema({
  //* Aqui é a configuração do esquema
  //* recebe um objeto de configuração
  //* e cada chave, pode receber um objeto de configuração para definir as coisas
  //* Como o type para saber o tipo, se é obrigatório e etc
  titulo: {type: String, required: true},
  ano: {type: Number, required: false},
  descricao: {type: String, required: false},
})

// Criando o Model, param1 = nome do Model, para2 = qual Schema
const HomeModel = mongoose.model('Home', HomeSchema);

//! module.exports = HomeModel;

class Home {

}

module.exports = Home;