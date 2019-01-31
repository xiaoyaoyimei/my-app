const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target:'http://10.0.0.31:8888/',
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    }));
};