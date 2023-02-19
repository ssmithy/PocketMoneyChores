const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, "./src/app.ts"),
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "wwwroot")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Smithy Output",
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    }
};
