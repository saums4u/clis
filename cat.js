#!/usr/bin/env node --use_strict --harmony

require('./helper')
let fs = require('fs').promise

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    let fileName = process.argv[2];
    let data = yield fs.readFile(fileName);
	process.stdout.write(data)	

}

module.exports = cat
