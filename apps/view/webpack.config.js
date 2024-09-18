const path = require('path');


module.exports = {
    mode: "development",
    entry: './index.ts',
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
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../', 'dist', 'apps', 'view'),
    },
};
