const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api/', { 
       target: 'https://99ttt.cc:8443' ,
        // secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": "/"
        // },
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};