let path = require('path');

module.exports = {
	mode: 'development',
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	}
};