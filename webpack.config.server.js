const nodeExternals = require('webpack-node-externals'),
    path = require('path'),
    srcPath = path.resolve(__dirname),
    distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
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
	externals: nodeExternals(),
	resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    devtool: 'source-map'
};
