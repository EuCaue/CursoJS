import Aluno from '../models/Aluno';

// Classe para o controller da Aluno, enviando um JSON
class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

// Exportando
export default new AlunoController();
