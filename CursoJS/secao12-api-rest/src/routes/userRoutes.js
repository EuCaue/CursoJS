import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir...
// router.get('/', loginRequired, userController.index); // Lista usuários
// router.get('/:id', userController.show ); // Lista usuaŕio

// Rotas dos users
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index → lista usuários → GET
store ou create → cria um novo usuário → POST
delete → apagar um usuário → DELETE
show → mostra um usuário → GET
update → atualiza um usuário → PATCH ou PUT
*/
