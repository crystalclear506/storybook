const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "production",
    "entry": [
        "./src/index.js",
    ],
    "devServer": {
        port: 8001,
        historyApiFallback: true,
    },
    "module": {
        "rules": [
            {
                "test": /\.m?js$/,
                "exclude": /(node_modules|bower_components)/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-react"]
                    }
                }
            },
            {
                "test": /\.s[ac]ss$/i,
                "use": [
                    "style-loader",
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    "plugins": [new HtmlWebpackPlugin({
        template: './index.html'
    })],
};
