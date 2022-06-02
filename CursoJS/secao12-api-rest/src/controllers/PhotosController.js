// Controller de photos
class PhotosController {
  async store(req, res) {
    res.json(req.file);
  }
}

// Exportando
export default new PhotosController();
