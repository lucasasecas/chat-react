const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlPluginConfig = new HtmlWebpackPlugin({
    template: 'public/index.html',
    inject: 'body'
});


module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    devServer: {
         contentBase: './public'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    plugins: [htmlPluginConfig],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                      }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
};