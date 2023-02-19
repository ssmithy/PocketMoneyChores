const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

    entry: {
        main: path.resolve(__dirname, "./src/app.js"),
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "wwwroot")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Smithy Output",
        }),
    ],
};