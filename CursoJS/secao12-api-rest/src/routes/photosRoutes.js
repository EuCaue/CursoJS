import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import photosController from '../controllers/PhotosController';

const router = new Router();

// Rotas das photos
router.post('/', loginRequired, photosController.store);

export default router;
