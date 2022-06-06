"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

// Função para gerar um número aleatório para o nome do arquivo
const random = () => Math.floor(Math.random() * 10000 + 10000);
// Exportando por padrão a config do multer
exports. default = {
  // Filtrando o tipo do arquivo, para passar somente JPG && PNG
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      // Retornando error caso não seja JPG ou PNG
      return cb(new _multer2.default.MulterError('Filetype must be PNG or JPG'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      // Resolvendo o caminho para o diretorio de uploads
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
    // Salvando o arquivo com o nome da data que foi posto em MS + a função random + a extensão dele
      cb(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);
    },

  }),
};
