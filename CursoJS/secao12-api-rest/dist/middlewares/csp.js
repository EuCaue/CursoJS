"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = async (req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src '*;' style-src 'self' 'unsafe-inline; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com");
  return next();
};
