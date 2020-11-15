/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



'use strict';


const paths                = require('./paths');

const ManifestPlugin       = require('webpack-manifest-plugin');
const StatsWriterPlugin    = require("webpack-stats-plugin").StatsWriterPlugin;

const isBrowser            = process.env.NODE_ENV   === 'browser';

const publicPath           = paths.publicPath;

const toExport = (isBrowser) ? {} : {
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

module.exports = toExport