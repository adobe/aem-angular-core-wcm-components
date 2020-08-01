'use strict';


const paths                = require('./paths');

const ManifestPlugin       = require('webpack-manifest-plugin');
const StatsWriterPlugin    = require("webpack-stats-plugin").StatsWriterPlugin;

const isDev                = process.env.NODE_ENV !== 'production';
const publicPath           = paths.publicPath;

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        main: './src/main.ts',
    },
    bail: true,
    output: {
        path: paths.clientLibRoot,
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: publicPath,
    },
    plugins: [
        new StatsWriterPlugin({
            stats: { publicPath: true, chunkGroups: true },
            fields: ['assetsByChunkName', 'assets', 'hash', 'publicPath', 'namedChunkGroups']
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath,
        })
    ]
};