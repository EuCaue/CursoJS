"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

// Imports
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

// Routes import's
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _photosRoutes = require('./routes/photosRoutes'); var _photosRoutes2 = _interopRequireDefault(_photosRoutes);

//const whitelist = [
  //'http://34.176.148.27',
  //'http://localhost:3000',
  //'http://localhost:3001',
//];

//const corsOptions = {
  //origin(origin, callback) {
    //if (whitelist.indexOf(origin) !== -1 || !origin) {
      //callback(null, true);
    //} else {
     // callback(new Error('Not allowed by CORS'));
   // }
 // },
//};

// Classe do app
class App {
  constructor() {
    // Construindo o app e middlewares e routes
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //this.app.use(cors());
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // Definindo pasta de arquivos estáticos
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    // Definindo as rotas
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/photos/', _photosRoutes2.default);
  }
}

exports. default = new App().app;
