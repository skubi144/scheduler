const path = require('path');


module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/electron.main.ts'),
    target: "electron-main",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.main.js',
        path: path.resolve(__dirname, '../../', 'dist', 'apps', 'view'),
    },
};
