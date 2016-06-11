'use strict';

const path = require('path');

const config = {
    entry: "./app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}

module.exports = config;
