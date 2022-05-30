import Aluno from '../models/Aluno';

// Classe para o controller da home, enviando um JSON
class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Cauê',
      sobrenome: 'Souza',
      email: 'caueadriano.castro@yahoo.com.br',
      idade: 18,
      peso: 82,
      altura: 1.81,
    });
    res.json(novoAluno);
  }
}

// Exportando
export default new HomeController();
