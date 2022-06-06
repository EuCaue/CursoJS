import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

// Classe para o controller da Aluno, enviando um JSON
class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      // Retornando o aluno com os campos abaixo
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      // Retornando a photo vinculada ao aluno
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'id', 'originalname', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      // Criando aluno
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          // Retornando um erro caso não tem tenha o ID do aluno
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        // Mostrando o campos abaixo, do aluno, por id
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          // Mostra a foto vinculada ao aluno
          model: Photo,
          attributes: ['url', 'id', 'originalname', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno does not exist'],

        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      // Procurando o aluno na DB por ID
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno does not exist'],
        });
      }
      // Deletando o aluno, e retornando um JSON com a resposta que foi deletado com sucesso
      await aluno.destroy();
      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno does not exist'],
        });
      }
      // Retornando o dados atualizado do aluno selecionado
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// Exportando
export default new AlunoController();
