const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|jpg|gif)$/,
                loader: 'file'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};