var webpack = require('webpack'),
path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    }
};