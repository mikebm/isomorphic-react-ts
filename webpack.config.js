const path = require('path'),
    webpack = require('webpack');

srcPath = path.resolve(__dirname),

module.exports = {
	context: srcPath,
    entry: {
        app: './src/client/index.tsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    module: {
		rules: [
			{
				test: /\.tsx?/,
				exclude: [/node_modules/],
				use: [{
					loader: 'awesome-typescript-loader',
				}],
			}
			//loaders for other file types can go here
		]
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    }
}