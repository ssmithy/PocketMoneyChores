const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "wwwroot")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
};