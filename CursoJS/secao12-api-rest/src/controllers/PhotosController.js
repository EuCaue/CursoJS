/* eslint-disable camelcase */
import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

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
        const photo = await Photo.create({ originalname, filename, aluno_id });

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
export default new PhotosController();
