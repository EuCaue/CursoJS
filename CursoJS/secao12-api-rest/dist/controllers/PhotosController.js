"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multer4.default).single('photo');

// Controller de photos
class PhotosController {
  store(req, res) {
    // Retornando erro se tiver erro no upload
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [
            err.code,
          ],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await _Photo2.default.create({ originalname, filename, aluno_id });

        // retornando os dados do arquivo enviado
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno does not exist'],
        });
      }
    });
  }
}

// Exportando
exports. default = new PhotosController();
