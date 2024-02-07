const path = require('path');
const glob = require('glob');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env['NODE_ENV'] === 'production';
const src = path.join(__dirname, 'playcanvas');

console.log(path.join(src, '*'));

const config = {
    entry: {
        'bundle.js': [
            path.join(src, '__start__.js'),
            path.join(src, '__loading__.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'www'),
        filename: '[name]'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.join(__dirname, 'tsconfig.json'),
                },
            },
        ],
    },
    plugins: []
};

if (isProduction) {
    config.devtool = '';
} else {
    config.devtool = 'inline-source-map';
}

//const jsFiles = glob.sync('playcanvas/files/assets/*/*/*.js');
/*
for (const file of jsFiles) {
    const output = file.replace('playcanvas/', '');
    config.entry[output] = path.join(__dirname, file);
}*/

config.plugins.push(
    new CleanWebpackPlugin(['www']),
   /* new CopyWebpackPlugin([{
        from: path.join(src, 'files/assets'),
        to: path.join(__dirname, 'www/files/assets'),
        ignore: ['*.js']
    }]),*/
    new CopyWebpackPlugin([{
        from: src,
        to: path.join(__dirname, 'www'),
        ignore: ['__start__.js', '__loading__.js']
    }])
);

module.exports = config;