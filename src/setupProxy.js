const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://47.108.154.180:8034",
            changeOrigin: true,
            pathRewrite: {'^/api' : ''}
        })
    );
};

