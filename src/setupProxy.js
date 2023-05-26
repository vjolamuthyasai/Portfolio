const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/resume',
    createProxyMiddleware({
      target:
        'https://github.com/vjolamuthyasai/Portfolio/blob/PDF_File_upload/public/vanka_jola_muthya_sai_resume.pdf',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );
};
