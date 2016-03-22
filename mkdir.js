#!/usr/bin/env node --use_strict --harmony

require('./helper')
let fs = require('fs').promise

function* mkdir() {
    // Use 'yield' in here
    // Your implementation here
    let dirName = process.argv[2];
    fs.mkdir(dirName, function callback(err, data){
    	if(err){
    		console.log(err)
    	}
    	//process.stdout.write(data)
    })
}

module.exports = mkdir
