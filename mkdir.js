#!/usr/bin/env node --use_strict --harmony

require('./helper')
let fs = require('fs').promise

function* mkdir() {
    // Use 'yield' in here
    // Your implementation here
    let dirName = process.argv[2];
    let status = yield fs.mkdir(dirName);
}

module.exports = mkdir
