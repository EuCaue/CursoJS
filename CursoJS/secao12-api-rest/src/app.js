import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

// Imports
import './database';
import express from 'express';

// Routes import's
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photosRoutes from './routes/photosRoutes';

// Classe do app
class App {
  constructor() {
    // Construindo o app e middlewares e routes
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // Definindo pasta de arquivos estáticos
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    // Definindo as rotas
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photosRoutes);
  }
}

export default new App().app;
