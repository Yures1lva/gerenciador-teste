const PROXY_CONFIG = [
    {
        context: [
            '/Colaborador',
        ],
        target: "https://localhost:7039/api",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/" : ""
        }
    }
]

module.exports = PROXY_CONFIG