const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        proxy(
            '/ray/api',
            {
                target: 'http://localhost:8889',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/ray/api': ''
                }
            }
        )
    )
}
