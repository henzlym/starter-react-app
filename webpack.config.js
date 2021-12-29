const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const openBrowser = require('react-dev-utils/openBrowser');
const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

const config = {
    devServer:{
        compress: true,
        hot: true,
        host,
        // open: true,
        onListening: () => {
            openBrowser(`http://${host}:${port}`);
        },
        port,
        static: {
            directory: path.join(__dirname, 'dist'),
        },    
    },
    entry:path.resolve(__dirname, 'src', 'index.js'),
    output:{
        filename:'index.bundle.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[
                    currentTask == 'build' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'src', 'index.html')
        })    
    ],
}

if (currentTask == 'build') {
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename:'main.[fullhash].css'
        }),
        new CleanWebpackPlugin()
    );
}

module.exports = config;