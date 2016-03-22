#!/usr/bin/env node --use_strict

require('./helper')
let co = require('co')
let fs = require('fs').promise

let rm = co.wrap(function* () {
    // Use 'yield' in here
    // Your implementation here
    let dirName = process.argv[2];

    fs.rmdir(dirName, function callback(err, data){
    	if(err){
    		console.error(err)
    	}
    })
});

module.exports = rm
