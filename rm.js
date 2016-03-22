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
	    fs.rmdir(filePath, function callback(err, data){
	    	if(err){
	    		console.error(err)
	    	}
	    })
	} else {
		fs.unlink(filePath, function (err){
			if( err ) {
				throw err
			}
		});
	}
	
});

module.exports = rm
