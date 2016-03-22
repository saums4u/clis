#!/usr/bin/env node --use_strict --harmony
require('./helper');
let co = require('co');

let fs = require('fs').promise;
let path = require('path');
let dir = process.argv[2]
let isRecursive = process.argv[3];

let ls = co.wrap(function* (rootPath, isRecursive) {
  	// Use 'yield' in here
	var fileNames = yield fs.readdir(rootPath);
	for (let fileName of fileNames) {
    	let filePath = path.join(rootPath, fileName)
    	let stats = yield fs.stat(filePath)
		if(stats.isDirectory() && isRecursive === '-R') {
			ls(filePath);
		} else {
			process.stdout.write(fileName+'\n');
		}
	}
})


function* main() {

	ls(dir, isRecursive);
}
module.exports = main;