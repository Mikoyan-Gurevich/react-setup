var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './js/main.js',
            'webpack-hot-middleware/client?path=__webpack_hmr'
        ],
        vendor: [
            './js/includeLibrary.js',
            'webpack-hot-middleware/client?path=__webpack_hmr'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.join(__dirname, '/node_modules/')
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: path.join(__dirname, '/node_modules/')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // The path specified here gets appended to the path provided in output section above
            path: path.resolve(__dirname, 'build'),
            title: 'React Set',
            template: 'index.ejs'
        }),
        // either of the below two can be used, but hashed module is prferred for the production use
        new webpack.HashedModuleIdsPlugin(),  // uses the 4 digits hash, which is created by the file path of the module
        //new webpack.NamedModulesPlugin()  // uses the path to the module rather than a numerical identifier
    ]
};