import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('photo');

// Controller de photos
class PhotosController {
  async store(req, res) {
    // Retornando erro se tiver erro no upload
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [
            err.code,
          ],
        });
      }

      // retornando os dados do arquivo enviado
     return res.json(req.file);
    });
  }
}

// Exportando
export default new PhotosController();
