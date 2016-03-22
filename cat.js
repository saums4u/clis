#!/usr/bin/env node --use_strict --harmony

require('./helper')
let fs = require('fs')

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    let fileName = process.argv[2];
    fs.readFile(fileName, function callback(err,data){
    	process.stdout.write(data)	
    });
}

module.exports = cat
