const nodeExternals = require('webpack-node-externals'),
    path = require('path'),
    distPath = path.resolve(__dirname, 'dist');

module.exports = {
	mode: 'development',
    entry: './src/server/server.tsx',
    output: {
        path: distPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
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
	// keeps node_modules out of bundle
	externals: nodeExternals(),
	resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    devtool: 'source-map'
};
