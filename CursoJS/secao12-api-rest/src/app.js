import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

// Imports
import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Routes import's
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photosRoutes from './routes/photosRoutes';

const {
  expressCspHeader, INLINE, NONE, SELF,
} = require('express-csp-header');

const whitelist = [
  'http://34.176.148.27',
  'http://localhost:3000',
];

const corsOptions = {
  // eslint-disable-next-line object-shorthand, func-names
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// express will send header "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' somehost.com; style-src 'self' mystyles.net; img-src data: images.com; workers-src 'none'; block-all-mixed-content; report-uri https://cspreport.com/send;'

// Classe do app
class App {
  constructor() {
    // Construindo o app e middlewares e routes
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(expressCspHeader({
      directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true,
      },
    }));
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // Definindo pasta de arquivos estáticos
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
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
