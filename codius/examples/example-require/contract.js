var example = require('./example');

console.log(example.example);

var myExample = require('myexample');

console.log(myExample.bar);

var foo = require('./lib/1').foo;
var bar = require('./lib/other/2').bar;

console.log(foo + ' + ' + bar + ' = ' + (foo + bar));
