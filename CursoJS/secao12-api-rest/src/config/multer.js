import multer from 'multer';
import { extname, resolve } from 'path';

// Função para gerar um número aleatório para o nome do arquivo
const random = () => Math.floor(Math.random() * 10000 + 10000);
// Exportando por padrão a config do multer
export default {
  // Filtrando o tipo do arquivo, para passar somente JPG && PNG
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      // Retornando error caso não seja JPG ou PNG
      return cb(new multer.MulterError('Filetype must be PNG or JPG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Resolvendo o caminho para o diretorio de uploads
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
    // Salvando o arquivo com o nome da data que foi posto em MS + a função random + a extensão dele
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },

  }),
};
