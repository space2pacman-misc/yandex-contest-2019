var fs = require('fs');
var lines = fs.readFileSync('input.txt', "utf8").split("\n");
var first = lines[0];
var last = lines[1];
var result = 0;

if(first.split("").sort().join("") === last.split("").sort().join("")) result = 1;

fs.appendFileSync('output.txt', result.toString());