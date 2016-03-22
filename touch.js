#!/usr/bin/env node --use_strict --harmony

require('./helper')
let co = require('co')
let fs = require('fs')

let touch = co.wrap(function* () {
    // Use 'yield' in here
    // Your implementation here
    let fileName = process.argv[2];

    fs.exists(fileName, function (exists){
    	if(exists) {
    		let newName = fileName+'.temp';
    		fs.readFile(fileName,function(err, data) {
		    	fs.writeFile(newName,data);
				fs.unlink(fileName, function (err){
			    	fs.rename(newName, fileName, function (err){
			    	});
			    });
			});
    	} else {
    		fs.open(fileName, 'w', function (err, fd){
			});
    	}
    })
    
});

module.exports = touch
