#!/usr/bin/env node --use_strict

require('./helper')
let co = require('co')
let fs = require('fs').promise

let rm = co.wrap(function* () {
    // Use 'yield' in here
    // Your implementation here
    let filePath = process.argv[2];
	let stats = yield fs.stat(filePath)

	if(stats.isDirectory()) {
	    let dir = yield fs.rmdir(filePath);
	} else {
		let deleted = yield fs.unlink(filePath);
	}
})

module.exports = rm