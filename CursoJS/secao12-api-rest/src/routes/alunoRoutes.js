import { Router } from 'express';

import alunoController from '../controllers/AlunoController';

const router = new Router();

// Rotas do aluno
router.get('/', alunoController.index);

export default router;
