import dotenv from 'dotenv';

dotenv.config();

// Imports
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

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
  }

  routes() {
    // Definindo as rotas
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
