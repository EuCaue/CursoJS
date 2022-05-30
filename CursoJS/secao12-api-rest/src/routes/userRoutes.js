import { Router } from 'express';

import userController from '../controllers/UserController';

const router = new Router();

// Rotas dos users
router.post('/', userController.store);

export default router;

/*
index → lista usuários → GET
store ou create → cria um novo usuário → POST
delete → apagar um usuário → DELETE
show → mostra um usuário → GET
update → atualiza um usuário → PATCH ou PUT
*/
