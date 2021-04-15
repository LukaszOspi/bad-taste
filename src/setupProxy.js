const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      logLevel: 'debug',
      target: 'https://tastedive.com/api/similar',
      changeOrigin: true,
    })
  );
};
