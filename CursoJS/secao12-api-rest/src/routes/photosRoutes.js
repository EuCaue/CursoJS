import { Router } from 'express';
import multer from 'multer';

import photosController from '../controllers/PhotosController';
import multerConfig from '../config/multer';
// Função para o multer carregar a config feita antes
const upload = multer(multerConfig);

const router = new Router();

// Rotas das photos
router.post('/', upload.single('photo'), photosController.store);

export default router;
