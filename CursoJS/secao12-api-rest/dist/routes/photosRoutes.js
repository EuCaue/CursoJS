"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _PhotosController = require('../controllers/PhotosController'); var _PhotosController2 = _interopRequireDefault(_PhotosController);

const router = new (0, _express.Router)();

// Rotas das photos
router.post('/', _loginRequired2.default, _PhotosController2.default.store);

exports. default = router;
