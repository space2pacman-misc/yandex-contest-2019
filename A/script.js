var fs = require('fs');
var lines = fs.readFileSync('input.txt', "utf8").split("\n");
var j = lines[0];
var s = lines[1];
var result = 0;

for(var i = 0; i < s.length; i++) {
	if(j.indexOf(s[i]) != -1) result++;
}

fs.appendFileSync('output.txt', result.toString());