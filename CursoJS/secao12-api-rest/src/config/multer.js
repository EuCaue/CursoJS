import multer from 'multer';
import { extname, resolve } from 'path';

// Função para gerar um número aleatório para o nome do arquivo
const random = () => Math.floor(Math.random() * 10000 + 10000);
// Exportando por padrão a config do multer
export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Resolvendo o caminho para o diretorio de uploads
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
    // Salvando o arquivo com o nome da data que foi posto em MS + a função random + a extensão dele
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },

  }),
};
