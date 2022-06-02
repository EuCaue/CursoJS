import { Router } from 'express';

import photosController from '../controllers/PhotosController';

const router = new Router();

// Rotas das photos
router.post('/', photosController.store);

export default router;
