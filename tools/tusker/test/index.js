#!/usr/bin/env node
 
var Mocha = require('mocha');
 
var mocha = new Mocha;
mocha.reporter('spec').ui('tdd');
 
mocha.addFile('test/tusker.js');
 
var runner = mocha.run(function(){
	process.exit(0);
});