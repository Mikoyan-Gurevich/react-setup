var express = require('express');
var path = require('path');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(require('./webpack.config'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
}));
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'build')));
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Running express server at localhost:' + port);
});