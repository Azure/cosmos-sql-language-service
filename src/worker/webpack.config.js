"use strict";

module.exports = {
    entry: {
        LanguageServiceWorker: './LanguageServiceWorker.ts'
    },
    mode: 'production',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        globalObject: 'this', 
        path: __dirname + "/dist",
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    node: { fs: "empty" }
};